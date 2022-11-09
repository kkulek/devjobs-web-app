import {useLocation} from 'react-router-dom';

export function Job() {
    const locationData = useLocation();

    const {
        postedAt,
        contract,
        position, location,
        apply,
        description,
        requirements,
        role
    } = locationData.state

    return (
        <div className="w-3/4 mt-10 mx-auto">
            <div className="flex mb-10 gap-5 flex-col xs:flex-row xs:justify-between xs:items-center">
                <div>
                    <p>
                        <span className="mr-2">{postedAt}</span>
                        <span className="mr-2">.</span>
                        <span>{contract}</span>
                    </p>
                    <h1>{position}</h1>
                    <p>{location}</p>
                </div>
                <a href={apply} target="_blank" rel="noreferrer">Apply</a>
            </div>
            <p className="mb-10">{description}</p>
            <h2 className="mb-4">Requirements</h2>
            <p className="mb-4">{requirements.content}</p>
            <ul className="list-disc">
                {requirements.items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
            <h2 className="mb-4 mt-10">What You Will Do</h2>
            <p className="mb-4">{role.content}</p>
            <ol className="list-decimal">
                {role.items.map((item, index) => {
                    return (
                        <li key={index}>{item}</li>
                    )
                })}
            </ol>
        </div>
    )
}