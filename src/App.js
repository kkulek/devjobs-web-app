import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Home} from "./pages/Home";
import {Job} from "./pages/Job";
import {PageNotFound} from "./pages/PageNotFound";

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/jobs/:name" element={<Job />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
      </Router>
  );
}

export default App;
