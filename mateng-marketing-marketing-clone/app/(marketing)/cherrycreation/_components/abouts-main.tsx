import React, { useState, useEffect } from "react";
import Link from "next/link";

export function AboutsMain() {
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwbW-Y6Yg5yGMUN5n6KOPTTBeK2-yohH722vaUuk9TZnJZOqkC4eZeUZqMybNGbE_fV/exec"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.text();
        setPageContent(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center pt-20 pb-10 sm:pt-32 flex flex-col justify-center items-center space-y-4">
      <div className="font-semibold text-base sm:text-lg w-[70%]">
        Please Click the button to check the order history by date
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-10 pt-2 sm:pt-10">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded">
          <Link
            href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTHN0zGNE30l9KtBVql-eZK-G9RMf28xIhFd46odDSm8h018fOX4dubde4DV37-wpVFWFfl5idXzBmv/pub?gid=832371842&single=true&output=pdf"
            passHref
          >
            <a>Last 3 Days</a>
          </Link>
        </button>
        {/* Add other buttons here */}

      </div>
      <div
        dangerouslySetInnerHTML={{ __html: pageContent }}
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-1 px-2 rounded"
        style={{ minHeight: "100px" }}
      />
    </div>
  );
}
export default AboutsMain;
