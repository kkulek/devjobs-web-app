import {Card} from "./Card";

export function Feed({data}) {

    return (
        <div className="mx-auto max-w-[1600px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {data.map((data, key) => {
                        return (
                            <Card key={key} data={data}/>
                        )
                    })}
                </div>
        </div>
    )
}
