export function Button({link, text, primary}) {
    return (
        <a
            href={link} target="_blank" rel="noreferrer"
            className={
            `${primary 
                ? ('bg-blue-500 text-white w-full py-3 sm:w-32') 
                : ('bg-blue-100 text-blue-700 py-2')} 
            font-bold text-sm rounded text-center 
            px-4 whitespace-nowrap`}
        >
            {text}
        </a>
    )
}