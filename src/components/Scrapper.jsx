import React, { useState } from "react";
import Navbar from "./Navbar";

const Scrapper = () => {
  const [result, setResult] = useState(null);

  return (
    <div >
      <Navbar />
      <div className="bg-slate-200">
        <h1 className="font-extrabold text-lg">Wikipedia Scraper</h1>
        <h1 className="font-semibold">Enter the url to be scrapped</h1>
        <div className="flex flex-col">

          <div>
             {/* input for for url */}
            <input type="text" className="bg-slate-400 " />
          </div>
          <div>
            {/* button for starting the scrappig */}
            <button onClick={handleScrape} className="bg-green-400 m-5">
              Scrape Wikipedia
            </button>
          </div>
          <div>
            {/* text area where html is shown */}
            <h1 className="font-semibold">Html Scrapped from the URL </h1>
            <textarea
              cols="60"
              row="60"
              className=" bg-slate-400 m-5"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scrapper;
