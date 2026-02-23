// Replace this with your actual OpenAI API key
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const SYSTEM_PROMPT: ChatMessage = {
  role: "system",
  content:
    "You are Serendib Elite's friendly travel assistant. You help users plan luxury trips to Sri Lanka — suggest tours, answer questions about destinations, accommodations, and experiences. Keep answers concise and warm.",
};

export async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: ChatMessage[];
  onDelta: (text: string) => void;
  onDone: () => void;
  onError: (err: string) => void;
}) {
  try {
    const resp = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [SYSTEM_PROMPT, ...messages],
        stream: true,
      }),
    });

    if (!resp.ok || !resp.body) {
      const errText = await resp.text().catch(() => "Unknown error");
      onError(resp.status === 401 ? "Invalid API key. Please update your OpenAI key." : `API error: ${errText}`);
      return;
    }

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let newlineIdx: number;
      while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
        let line = buffer.slice(0, newlineIdx);
        buffer = buffer.slice(newlineIdx + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (!line.startsWith("data: ")) continue;
        const json = line.slice(6).trim();
        if (json === "[DONE]") {
          onDone();
          return;
        }
        try {
          const parsed = JSON.parse(json);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) onDelta(content);
        } catch {
          // partial JSON, ignore
        }
      }
    }
    onDone();
  } catch (e) {
    onError(e instanceof Error ? e.message : "Network error");
  }
}