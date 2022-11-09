import {jobPositions} from '../data'
import {Card} from "./Card";
import {useEffect, useState} from "react";

export function Feed() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    return (
        <>
            {!isLoaded ? console.log('not loaded yet') : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {jobPositions.map((data, key) => {
                        return (
                            <Card key={key} data={data}/>
                        )
                    })}
                </div>
            )}
        </>
    )
}
