import { Routes, Route } from "react-router-dom"
import './App.css'
import NavBar from "./Components/NavBar"
import AllPlayers from "./Components/AllPlayers"
import SinglePlayer from "./Components/SinglePlayer"
import NewPlayerForm from "./Components/NewPlayerForm"
import SearchBar from "./Components/SearchBar"


function App() {

  return (
    <>
      <div className="NavBar">
        <NavBar />
      </div>
      <h1>Puppy Bowl!</h1>
      <div className="SearchBar">
        <SearchBar />
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/newplayerform" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App