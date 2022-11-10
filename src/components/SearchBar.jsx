import {useState} from "react";

export function SearchBar({handleFilter}) {
    const DEFAULT = {
        mix: '',
        location: '',
    }

    const [input, setInput] = useState(DEFAULT);

    const handleInput = (e) => {
        const id = e.target.id;
        const input = e.target.value

        setInput((prev) => ({
            ...prev,
            [id]: input
        }))
    }

    const handleSearch = (e) => {
        e.preventDefault();
        handleFilter(input);
    }

    const handleClear = (e) => {
        e.preventDefault();
        setInput(DEFAULT)
        handleFilter(DEFAULT)
    }

    return (
        <form className="mb-20 flex gap-4">
            <input
                type="text"
                placeholder="Filter by title, companies, experience..."
                id="mix"
                value={input.mix}
                onChange={handleInput}
            />
            <input
                type="text"
                placeholder="Filter by location"
                id="location"
                value={input.location}
                onChange={handleInput}
            />
            <button type="submit" onClick={handleSearch}>Search</button>
            <button onClick={handleClear}>clear</button>
        </form>
    )
}