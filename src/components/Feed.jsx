import {Card} from "./Card";
import {useState} from "react";

const step = 12;

export function Feed({data}) {
    const [jobsToShow, setJobsToShow] = useState(step);

    function handleLoadMoreJobs() {
        setJobsToShow(jobsToShow + step)
    }

    return (
        <div className="mx-auto max-w-[1600px] px-4 sm:px-10 lg:px-20 mt-10 md:mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                {data.map((data, key) => {
                    return (
                        key >= jobsToShow ? null : <Card key={key} data={data}/>
                    )
                })}
            </div>
            <button className=
                        "block px-4 py-3 mx-auto mt-10 w-full sm:w-32 bg-blue-500
                        font-bold text-sm text-white rounded"
                    onClick={handleLoadMoreJobs}>Load More
            </button>
        </div>
    )
}
