import React, { useEffect, useState } from "react";

import "./EbookReader.css";



const EbookReader = () => {

    const [parts, setParts] = useState([]);

    const [currentChapter, setCurrentChapter] = useState(null);

    const [searchTerm, setSearchTerm] = useState("");



    // Fetch eBook data

    useEffect(() => {

        fetch("/data/ebook.json")

            .then(response => response.json()) // Fixed: 'Response' → 'response'

            .then(data => {

                setParts(data.parts);

                if (data.parts.length > 0 && data.parts[0].chapters.length > 0) {

                    setCurrentChapter(data.parts[0].chapters[0]); // Ensure valid data

                } else {

                    console.error("eBook data is empty or incorrectly formatted.");

                }

            })

            .catch(error => console.error("Error loading eBook:", error));

    }, []);



    // Function to go to the next chapter

    const goToNextChapter = () => {

        if (!currentChapter) return;



        let allChapters = parts.flatMap(p => p.chapters);

        let currentIndex = allChapters.findIndex(ch => ch.id === currentChapter.id);



        if (currentIndex < allChapters.length - 1) {

            setCurrentChapter(allChapters[currentIndex + 1]);

        }

    };



    // Function to go to the previous chapter

    const goToPreviousChapter = () => {

        if (!currentChapter) return;



        let allChapters = parts.flatMap(p => p.chapters);

        let currentIndex = allChapters.findIndex(ch => ch.id === currentChapter.id);



        if (currentIndex > 0) {

            setCurrentChapter(allChapters[currentIndex - 1]);

        }

    };



    // Search function

    const filteredChapters = parts.flatMap(p => p.chapters).filter(

        chapter =>

            chapter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||

            chapter.content.toLowerCase().includes(searchTerm.toLowerCase())

    );



    return (

        <div className="ebook-container">

            {/* Sidebar for Chapter List */}

            <div className="sidebar">

                <h3>Chapters</h3>

                <ul>

                    {parts.length > 0 ? (

                        parts.flatMap(p => p.chapters).map(chapter => (

                            <li key={chapter.id}>

                                <button onClick={() => setCurrentChapter(chapter)}>

                                    {chapter.title}

                                </button>

                            </li>

                        ))

                    ) : (

                        <p>No chapters available</p>

                    )}

                </ul>

            </div>



            {/* Main Content Area */}
            <div className="cover-containter">
                <img src="/images/ebook_cover.PNG" alt="eBook Cover" className="ebook_cover" />
            </div>

            <div className="content">

                {/* Search Bar */}

                <input

                    type="text"

                    placeholder="Search for a chapter..."

                    onChange={(e) => setSearchTerm(e.target.value)}

                    className="search-bar"

                />



                {/* Chapter Content */}

                {currentChapter ? (

                    <div>

                        <h2>{currentChapter.title}</h2>

                        <h3>{currentChapter.subtitle}</h3>

                        <p>{currentChapter.content}</p>



                        {/* Navigation Buttons */}

                        <button onClick={goToPreviousChapter}>⬅ Previous</button>

                        <button onClick={goToNextChapter}>Next ➡</button>

                    </div>

                ) : (

                    <p>Loading eBook...</p>

                )}

            </div>

        </div>

    );

};



export default EbookReader;