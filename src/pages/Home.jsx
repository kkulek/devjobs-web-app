import {Feed} from "../components/Feed";
import {SearchBar} from "../components/SearchBar";

export function Home({data}) {

    const handleFilter = (input) => {
        const {
            mix, // position, company
            location,
        } = input

        const hideCard = (id) => document.getElementById(id).style.display = 'none'
        const showCard = (id) => document.getElementById(id).style.display = 'block'

        data.map((item) => !item.location.toLowerCase().includes(location) || !item.mix.toLowerCase().includes(mix)
            ? hideCard(item.id)
            : showCard(item.id)
        )
    }

    return (
        <div className="dark:bg-slate-900 pb-10">
            <SearchBar handleFilter={handleFilter}/>
            <Feed data={data}/>
        </div>
    )
}