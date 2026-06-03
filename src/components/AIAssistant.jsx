import { useState } from "react";

function AIAssistant() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {

    if (!question.trim()) return;

    try {

      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: question
          })
        }
      );

      const data = await response.json();

      setAnswer(data.answer);

    } catch (error) {

      console.error(error);

      setAnswer("Error contacting AI.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <section className="section">

      <h2>🤖 AI Assistant</h2>

      <textarea
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        placeholder="Ask anything about One Piece..."
        rows={4}
      />

      <button
        className="theme-btn"
        onClick={askAI}
      >
        Ask AI
      </button>

      {loading && (
        <p>Thinking...</p>
      )}

      {answer && (
        <div className="timeline-card">
          {answer}
        </div>
      )}

    </section>
  );
}

export default AIAssistant;