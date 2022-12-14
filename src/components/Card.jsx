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
            <div id={id} className="p-6 bg-white dark:bg-slate-800 rounded relative">
                <div className="absolute top-0 h-14 w-14 rounded-xl -translate-y-1/2"
                     style={{backgroundColor: logoBackground}}>
                    <img src={process.env.PUBLIC_URL + logo} alt={company + ' logo'}
                         className="p-2 h-full w-full object-center object-contain"/>
                </div>
                <p className="mt-4">
                    <span className="mr-2 dark:text-slate-500">{postedAt}</span>
                    <span className="mr-2 dark:text-slate-500">.</span>
                    <span className="dark:text-slate-500">{contract}</span>
                </p>
                <Link to={`/jobs/${company}-${position}`} state={data}>
                    <h2 className="mt-1 font-bold dark:text-slate-200">{position}</h2>
                </Link>
                <h3 className="mt-1 dark:text-slate-500">{company}</h3>
                <p className="mt-8 text-blue-600 font-bold">{location}</p>
            </div>
    )
}