import React, { useState } from "react";
import Navbar from "./Navbar";

const Scrapper1 = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-5 border-yellow-400">
      <Navbar />
      <div className="p-10 border-yellow-400">
        <form
          onSubmit={handleSubmit}
          className="bg-opacity-20 border-yellow-400 bg-gray-800 p-5 rounded-md shadow-md w-full max-w-lg"
        >
          <label
            htmlFor="prompt"
            className="block text-white font-bold mb-2 text-lg"
          >
            Enter your prompt:
          </label>
          <input
            type="text"
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full p-2 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-md mb-4"
            placeholder="Type your prompt here..."
          />
          <button
            type="submit"
            className="bg-green-400 px-4 py-2 text-bold rounded-md hover:bg-green-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Scrapper1;
