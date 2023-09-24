import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" categories={"general"} />} />
          <Route path="/business" element={<News key="business" categories={"business"} />} />
          <Route path="/entertainment" element={<News key="entertainment" categories={"entertainment"} />} />
          <Route path="/general" element={<News key="general" categories={"general"} />} />
          <Route path="/health" element={<News key="health" categories={"health"} />} />
          <Route path="/science" element={<News key="science" categories={"science"} />} />
          <Route path="/sports" element={<News key="sports" categories={"sports"} />} />
          <Route path="/technology" element={<News key="sports" categories={"technology"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
