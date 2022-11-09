import {Button} from "./Button";

export function CTA({company, position, apply}) {
    return (
        <div className="absolute p-10 w-full xs:static bg-white mt-10">
            <div className="flex justify-center sm:justify-between items-center">
                <div className="hidden sm:inline-block">
                    <h2>{position}</h2>
                    <p>{company}</p>
                </div>
                <Button link={apply} text={'Apply Now'} primary/>
            </div>
        </div>
    )
}