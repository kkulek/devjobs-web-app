import {Button} from "./Button";

export function Banner({company, website, logoBackground}) {

    const logoBg = {
        backgroundColor: logoBackground,
    }

    return (
        <div className=
                 "bg-white flex flex-col items-center rounded relative text-center pb-6 sm:pr-10
                  sm:flex-row sm:justify-between sm:gap-6 sm:text-left sm:pb-0 "
        >
            <span className=
                      "absolute top-0 left-1/2 h-12 w-12 rounded bg-violet-50 -translate-y-1/2 -translate-x-1/2 sm:static sm:translate-x-0 sm:translate-y-0
                      sm:h-32 sm:w-32 shrink-0 sm:justify-start"
                  style={logoBg}>
            </span>
            <div className="mt-10 mb-4 sm:basis-full sm:mt-0 sm:mb-0">
                <h2>{company}</h2>
                <h2>{company.toLowerCase()}.com</h2>
            </div>
            <Button link={website} text={"Company Size"}/>
        </div>
    )
}