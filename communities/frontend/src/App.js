import React, {useState} from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Bollywood from './pages/Bollywood';
import KDrama from './pages/KDrama';
import Profile from './pages/Profile';
import Post from './pages/Post';
import OOTD from './pages/OOTD';
import Sidebar from './components/Sidebar';
import './App.css';
import FrPage from './pages/FrPage';
import Friend from './components/Friend';
import FriendPage2 from './pages/FriendPage2';
// import FrPage from "./pages/FrPage"
// import FriendPage2 from './pages/FriendPage2';
import FriendDetail from './components/FriendDetail';
import img1 from "./assets/isha-profile.png"
import Searchuser from "./pages/Searchuser";
import Myootd from "./pages/Myootd";
import Sidebar2 from './components/Sidebar2';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'Isha', // Example username
    profilePicture: img1 // Example profile picture
});

    return (
        <Router>
            <div className="app">
                <Sidebar loggedInUser={loggedInUser} />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/bollywood" element={<Bollywood />} />
                        <Route path="/kdrama" element={<KDrama />} />
                        <Route path="/FriendPage2" element={<FriendPage2 />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/sidebar2" element={<Sidebar2 />} />
                        <Route path="/ootd" element={<OOTD />} />
                        <Route path="/friends" element={<Friend />} />
                        <Route path="/friend/:id" element={<FriendDetail />} />
                        <Route path="/FrPage" element={<FrPage />} />
                        <Route path='/searchuser' element={<Searchuser/>}></Route>
                        <Route path="/myootd" element={<Myootd />} />
                        {/* Add routes for other communities */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
