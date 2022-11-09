import {Link} from "react-router-dom";

export function Card({data}) {

    return (
            <div className="p-6 bg-white rounded relative">
                <div className="absolute top-0 h-14 w-14 rounded-xl -translate-y-1/2"
                     style={{backgroundColor: data.logoBackground}}>
                    <img src={process.env.PUBLIC_URL + data.logo} alt={data.company + ' logo'}
                         className="p-2 h-full w-full object-center object-contain"/>
                </div>
                <p className="mt-4">
                    <span className="mr-2">{data.postedAt}</span>
                    <span className="mr-2">.</span>
                    <span>{data.contract}</span>
                </p>
                <Link to={`/jobs/${data.company}-${data.position}`} state={data}>
                    <h2 className="mt-1 font-bold">{data.position}</h2>
                </Link>
                <h3 className="mt-1">{data.company}</h3>
                <p className="mt-8">{data.location}</p>
            </div>
    )
}