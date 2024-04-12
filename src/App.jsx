import Home from './component/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import CreatePost from './pages/CreatePost';
import ReadPost from './pages/ReadPost';

function App() {
  return (
    <div className='w-screen h-screen bg-gray-700 text-gray-50'>
    <BrowserRouter>
      <div className='flex'>
        <div className='flex flex-col gap-8 w-[260px] p-4 pt-20 text-center text-2xl bg-gray-800 h-screen'>
          <Link to="/">Home</Link>
          <Link to="/create">Create a CrewMate!</Link>
          <Link to="/read">Crewmate Gallery</Link>
        </div>
        <div className='flex justify-center items-center align-center flex-1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/read" element={<ReadPost />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
