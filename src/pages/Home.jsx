import {Feed} from "../components/Feed";

export function Home({data}) {
    return (
        <div className="bg-gray-200 my-10 p-10">
            <Feed data={data} />
        </div>
    )
}