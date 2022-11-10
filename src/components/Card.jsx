import {Link} from "react-router-dom";

export function Card({data}) {

    const {
        id,
        logoBackground,
        logo,
        company,
        postedAt,
        contract,
        position,
        location
    } = data;

    return (
            <div id={id} className="p-6 bg-white rounded relative">
                <div className="absolute top-0 h-14 w-14 rounded-xl -translate-y-1/2"
                     style={{backgroundColor: logoBackground}}>
                    <img src={process.env.PUBLIC_URL + logo} alt={company + ' logo'}
                         className="p-2 h-full w-full object-center object-contain"/>
                </div>
                <p className="mt-4">
                    <span className="mr-2">{postedAt}</span>
                    <span className="mr-2">.</span>
                    <span>{contract}</span>
                </p>
                <Link to={`/jobs/${company}-${position}`} state={data}>
                    <h2 className="mt-1 font-bold">{position}</h2>
                </Link>
                <h3 className="mt-1">{company}</h3>
                <p className="mt-8">{location}</p>
            </div>
    )
}