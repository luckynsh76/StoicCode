import React, { useEffect, useState } from "react";

const EbookReader = () => {
    const [parts, setParts] = useState([]);
    const [currentChapter, setCurrentChapter] = useState(null);

    useEffect (() => {
        fetch("/data/ebook.json")
        .then(Response => Response.json())
        .then(data => {
            setParts(data.parts);
            setCurrentChapter(data.parts[0].chapters[0]);
        })
        .catch(error => console.error("Error loading eBook:", error));
    }, []);

    const goToNextChapter = () => {
      let currentIndex = parts.flatMap(p => p.chapters).findIndex(c => c.id === currentChapter.id);
      if (currentIndex < parts.flatMap(p => p.chapters).length - 1) {
        setCurrentChapter(parts.flatMap(p => p.chapters)[currentIndex + 1]);
      }
    };

    const goToPreviousChapter = () => {
      let currentIndex = parts.flatMap (p => p.chapters).findIndex(c => c.id === currentChapter.id);
      if (currentIndex > 0) {
        setCurrentChapter(parts.flatMap(p => p.chapters)[currentIndex - 1]);
      }
    };

    return (
      <div>
        {currentChapter ? (
           <div>
             <h2>{currentChapter.title}</h2>
             <h3>{currentChapter.subtitle}</h3>
             <p>{currentChapter.content}</p>
             <button onClick={goToPreviousChapter}> Previous </button>
             <button onClick={goToNextChapter}>Next</button>
           </div>
         ) : (
           <p>Loading eBook...</p>
         )}
     </div>
    );
};

export default EbookReader;