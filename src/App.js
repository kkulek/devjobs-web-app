import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {jobPositions} from './data'
import {useEffect, useState} from "react";
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {Job} from "./pages/Job";
import {PageNotFound} from "./pages/PageNotFound";

function App() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        setData(jobPositions.map(item => (
            {
                ...item,
                mix: item.position + item.company
            })));
    }, [])

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.theme = 'light'
        localStorage.theme = 'dark'
        localStorage.removeItem('theme')
    }, [])

    return (
        <Router>
            <main className="bg-gray-100 h-full min-h-screen relative">
                <Header/>
                {!isLoaded ? console.log('not loaded yet') : (
                    <Routes>
                        <Route path="/" element={<Home data={data}/>}></Route>
                        <Route path="/jobs/:name" element={<Job/>}></Route>
                        <Route path="*" element={<PageNotFound/>}></Route>
                    </Routes>
                )}
            </main>
        </Router>
    );
}

export default App;
