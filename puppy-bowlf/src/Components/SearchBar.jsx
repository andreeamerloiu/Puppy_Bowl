import  { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState("");
    console.log("Received onSearch1", onSearch);
    console.log("Received onSearch2", searchQuery)

    const handleSearchChange = (event) => {
        const newQuery = event.target.value;
        console.log("Typing in search bar", newQuery)
        setSearchQuery(newQuery);
        if (onSearch) {
            onSearch(newQuery);
        }
    };

    return (
        <div className="search-bar">
            <p className="search-hint">Search For A Puppy By Name</p>
            <input
            className="search-input"
            type="text"
            placeholder="Search puppy"
            value={searchQuery}
            onChange={handleSearchChange}
            />
        </div>
    );
}