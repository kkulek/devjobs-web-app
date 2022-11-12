export function Header() {

    return (
        <div className="w-full h-40 bg-header-mobile lg:bg-header-desktop bg-no-repeat bg-cover bg-center">
            <div className="mx-auto max-w-[1600px] h-full flex justify-between items-center px-4">
                <img src="../assets/desktop/logo.svg" alt="Devjobs logo"/>
                <label htmlFor="theme" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" id="theme" className="sr-only"/>
                        <span className=
                                  "block bg-white w-10 h-6 rounded-full
                                   before:content-sun before:absolute before:-left-6 before:top-0.5
                                   after:content-moon after:absolute after:-right-4">
                            </span>
                        <span className="circle absolute left-1 top-1 bg-blue-400 w-4 h-4 rounded-full transition"></span>
                    </div>
                </label>
            </div>
        </div>
    )
}