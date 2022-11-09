import {Link} from "react-router-dom";

export function Card() {
    return (
        <div className=
                 "p-6 bg-white rounded relative inline-block
                 before:absolute before:top-0 before:inline-block before:h-12 before:w-12 before:rounded-xl before:bg-violet-50 before:-translate-y-1/2"
        >
            <p className="mt-4">
                <span className="mr-2">5h ago</span>
                <span className="mr-2">.</span>
                <span>Full Time</span>
            </p>
            <Link to="/">
                <h2 className="mt-1 font-bold">Senior Software Engineer</h2>
            </Link>
            <h3 className="mt-1">Scoot</h3>
            <p className="mt-8">United Kingdom</p>
        </div>
    )
}