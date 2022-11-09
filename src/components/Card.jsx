import {Link} from "react-router-dom";

export function Card({data}) {
    const logoBackground = {
        backgroundColor: data.logoBackground,
    }

    return (
            <div className="p-6 bg-white rounded relative">
                <div className="absolute top-0 h-12 w-12 rounded-xl bg-violet-50 -translate-y-1/2"
                     style={logoBackground}>
                </div>
                <p className="mt-4">
                    <span className="mr-2">{data.postedAt}</span>
                    <span className="mr-2">.</span>
                    <span>{data.contract}</span>
                </p>
                <Link to="/">
                    <h2 className="mt-1 font-bold">{data.position}</h2>
                </Link>
                <h3 className="mt-1">{data.company}</h3>
                <p className="mt-8">{data.location}</p>
            </div>
    )
}