import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Interview() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const chatRef = useRef(null);

  const handleSend = async () => {

  if (message.trim() === "") {
    return;
  }

  const userAnswer = message;

  // Clear input immediately
  setMessage("");

  // Show user's answer
  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userAnswer,
    },
  ]);

  const token = localStorage.getItem("token");

  try {

    const response = await axios.post(
      "http://localhost:5000/interview/next",
      {
        answer: userAnswer,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Show AI next question
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: response.data.question,
      },
    ]);

  } catch (err) {

    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text:
          "⚠️ " +
          (err.response?.data?.message ||
            "Something went wrong. Please try again."),
      },
    ]);

  }

};


const startInterview = async () => {

  const token = localStorage.getItem("token");

  try {

    const response = await axios.post(
      "http://localhost:5000/interview/start",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setMessages([
      {
        sender: "ai",
        text: response.data.question,
      },
    ]);

  } catch (err) {

    if (err.response?.status === 404) {

      sessionStorage.setItem(
        "warningMessage",
        err.response.data.message
      );

      navigate("/dashboard/resume");

      return;

    }

    setMessages([
      {
        sender: "ai",
        text:
          "⚠️ " +
          (err.response?.data?.message ||
          "Something went wrong. Please try again."),
      },
    ]);

  }

};
  useEffect(() => {

    startInterview();

  }, []);

  // Auto-scroll whenever a new message is added
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
          <h1 className="text-4xl font-bold">
            AI Mock Interview
          </h1>

          <p className="mt-2 text-purple-100">
            Answer every question honestly. The AI will evaluate your responses based on your resume.
          </p>
        </div>

        {/* Chat Area */}
        <div className="p-8">

          <div
            ref={chatRef}
            className="h-[500px] bg-gray-50 border border-gray-200 rounded-2xl p-6 overflow-y-auto"
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex mb-4 ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-lg px-5 py-4 rounded-2xl shadow-md ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>

              </div>

            ))}

          </div>

          {/* Input */}
          <div className="flex items-center gap-4 mt-6">

            <input
              type="text"
              placeholder="Type your answer..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              onClick={handleSend}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl transition duration-300 font-semibold"
            >
              Send
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Interview;