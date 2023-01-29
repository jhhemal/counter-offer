import {useEffect, useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import CasesPage from './components/CasesPage'
import GamePage from './components/GamePage'
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';



function App() {

  const [un, setUN] = useState(undefined)

  useEffect(() => {

    // Fetch the username from the cookie
    // async function fetch() {
    //   await getUser().then((response) => {
    //     if ("response is not null") {
    //       setUser("INSERT USERNAME HERE");
    //     }
    //   })
    // }
    // fetch();

  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar un={un} setUN={setUN}/>
          <Routes>
            <Route path="/" element={<HomePage un={un} setUN={setUN}/>} />
            <Route path="/login" element={<LoginPage un={un} setUN={setUN}/>} />
            <Route path="/signup" element={<SignupPage un={un} setUN={setUN}/>} />
            <Route path="/cases" element={<CasesPage un={un} setUN={setUN}/>} />
            <Route path="/case/:cid/:rid" element={<GamePage un={un} setUN={setUN}/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
