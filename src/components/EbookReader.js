import React, { useState, useEffect } from "react";

function EbookReader() {
const [searchTerm, setSearchTerm] = useState("");
const [chapters, setChapters] = useState([]);

useEffect(() => {
// Fetch the real ebook.json
fetch("/data/ebook.json")
.then((response) => response.json())
.then((data) => {
// Assuming the JSON structure is { parts: [{ title, chapters: [{ id, title, content }] }] }
const allChapters = data.parts.flatMap(part => part.chapters);
setChapters(allChapters);
})
.catch((error) => {
console.error("Error loading ebook:", error);
});
}, []);

const lowerSearch = searchTerm.toLowerCase();
const filteredChapters = chapters.filter(
(chap) =>
chap.title.toLowerCase().includes(lowerSearch) ||
chap.content.toLowerCase().includes(lowerSearch)
);

return (
<div style={{ maxWidth: "800px", margin: "auto", padding: "20px", lineHeight: "1.6" }}>
<h1>Read StoicCode eBook</h1>

<input
type="text"
placeholder="Search chapters..."
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
style={{
width: "100%",
padding: "10px",
marginBottom: "20px",
fontSize: "16px",
borderRadius: "5px",
border: "1px solid #ccc",
}}
/>

{filteredChapters.map((chapter) => (
<div key={chapter.id} style={{ marginBottom: "40px" }}>
<h2>{chapter.title}</h2>
<p>{chapter.content}</p>
</div>
))}
</div>
);
}

export default EbookReader;