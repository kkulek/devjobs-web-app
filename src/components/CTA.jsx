import {Button} from "./Button";

export function CTA({company, position, apply}) {
    return (
        <div className="absolute p-10 w-full xs:static bg-white dark:bg-slate-800 mt-10 dark:text-slate-200">
            <div className="flex justify-center sm:justify-between items-center">
                <div className="hidden sm:inline-block">
                    <h3 className="font-bold text-xl md:text-2xl ">{position}</h3>
                    <p>{company}</p>
                </div>
                <Button link={apply} text={'Apply Now'} primary/>
            </div>
        </div>
    )
}