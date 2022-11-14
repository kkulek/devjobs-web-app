import {Button} from "./Button";

export function PositionDescription({postedAt, contract, position, location, apply, description, requirements, role}) {
    return (
        <div className="bg-white dark:bg-slate-800 p-10 mt-10 dark:text-slate-200">
            <div className="flex mb-10 gap-5 flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <p>
                        <span className="mr-2">{postedAt}</span>
                        <span className="mr-2">.</span>
                        <span>{contract}</span>
                    </p>
                    <h1>{position}</h1>
                    <p>{location}</p>
                </div>
                <Button link={apply} text={"Apply Now"} primary/>
            </div>
            <p className="mb-10 max-w-prose">{description}</p>
            <h2 className="mb-4">Requirements</h2>
            <p className="mb-4 max-w-prose">{requirements.content}</p>
            <ul>
                {requirements.items.map((item, index) => {
                    return (
                        <li key={index} className="relative pl-6 max-w-prose">
                            <span
                                className="bg-black dark:bg-slate-200 absolute inline-block w-2 h-2 left-0 top-0 translate-y-full rounded-full"></span>
                            {item}
                        </li>
                    )
                })}
            </ul>
            <h2 className="mb-4 mt-10">What You Will Do</h2>
            <p className="mb-4 max-w-prose">{role.content}</p>
            <ol>
                {role.items.map((item, index) => {
                    return (
                        <li key={index} className="relative pl-6 max-w-prose">
                            <span className="absolute left-0">{index + 1}.</span>
                            {item}</li>
                    )
                })}
            </ol>
        </div>
    )
}