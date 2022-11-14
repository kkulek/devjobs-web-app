import {Button} from "./Button";

export function Banner({company, website, logoBackground, logo}) {

    return (
        <div className=
                 "bg-white dark:bg-slate-800 dark:text-slate-200 flex flex-col items-center rounded relative text-center pb-6 sm:pr-10
                  sm:flex-row sm:justify-between sm:gap-6 sm:text-left sm:pb-0 "
        >
            <div className=
                      "absolute top-0 left-1/2 h-12 w-12 rounded bg-violet-50 -translate-y-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:translate-y-0
                      sm:h-32 sm:w-32 shrink-0 sm:justify-start"
                 style={{backgroundColor: logoBackground}}>
                 <img src={process.env.PUBLIC_URL + logo} alt={company + ' logo'}
                      className="p-1 sm:p-2 h-full w-full object-center object-contain"/>
            </div>
            <div className="mt-10 mb-4 sm:basis-full sm:mt-0 sm:mb-0">
                <h1 className="font-bold text-2xl md:text-3xl">{company}</h1>
                <h3>{company.toLowerCase().split(' ').join('')}.com</h3>
            </div>
            <Button link={website} text={"Company Site"}/>
        </div>
    )
}