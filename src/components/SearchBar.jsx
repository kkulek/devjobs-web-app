import {useState} from "react";
import {Input} from "../misc/Input"

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
        <div className="flex justify-center -translate-y-1/4 md:-translate-y-1/2 ">
            <div className="inline-block bg-white dark:bg-slate-800 px-6 rounded shadow-lg">
                <form className="flex flex-col md:flex-row gap-2">
                    <label htmlFor="mix" className="flex items-center">
                        <span className="inline-block h-6 w-6 bg-search bg-no-repeat bg-center bg-contain"></span>
                        <Input
                            placeholder="Filter by title, companies, experience..."
                            idVal="mix"
                            value={input.mix}
                            onChange={handleInput}
                            width={60}
                        />
                    </label>
                    <label htmlFor="location" className="flex items-center">
                        <span className="inline-block h-6 w-6 bg-location bg-no-repeat bg-center bg-contain"></span>
                        <Input
                            placeholder="Filter by location"
                            idVal="location"
                            value={input.location}
                            onChange={handleInput}
                            width={40}
                        />
                    </label>
                    <div className="flex items-center justify-between gap-4 py-2">
                        <button className="px-4 py-3 mx-auto w-full bg-blue-500 font-bold text-sm text-white rounded"
                            type="submit" onClick={handleSearch}>Search</button>
                        <button className="px-4 py-3 mx-auto w-full sm:w-32 bg-blue-100 text-blue-700 font-bold text-sm text-white rounded"
                            onClick={handleClear}>Clear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}