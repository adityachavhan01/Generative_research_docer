import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function Input() {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  async function GeneratePrompt() {
    try {
      setAnswer("Loading...");
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB--ACW_U52STPDXS-J4Oy1aRRuGFJPEnY",
        {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }
      );
      const generatedContent = response.data.candidates[0].content;
      const generatedText = generatedContent.parts[0].text;
      setAnswer(generatedText);
    } catch (error) {
      console.error("Error generating prompt:", error);
      setAnswer("Failed to generate response.");
    }
  }

  const settingPrompt = (e) => setPrompt(e.target.value);

  return (
    <div className="">
      <Navbar />
      <div className="p-10">
        <h1 className=" text-lg mb-2 text-green-200">Enter the prompt</h1>

        <div className="relative mt-2 rounded-md shadow-sm">
          <textarea
            cols="60"
            rows="10"
            value={prompt}
            onChange={settingPrompt}
            className="max-w-screen-md p-2 bg-transparent border-2 border-yellow-400 text-yellow-400 rounded-md"
            placeholder="Type your prompt here..."
          />
        </div>

        <button
          className="bg-green-400 mt-4 px-4 py-2 text-bold rounded-md hover:bg-green-500"
          onClick={GeneratePrompt}
        >
          Generate Prompt
        </button>

        <div className="text-yellow-500 bg-opacity-70  mt-4 p-5 rounded-md h-64 max-w-screen-md overflow-y-scroll">
          <h1 className="font-bold mb-2">Research Generated:</h1>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
