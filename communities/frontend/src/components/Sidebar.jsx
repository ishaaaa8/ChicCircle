import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img1 from "../assets/isha-profile.png";
import img2 from "../assets/gany-profile.png";
import img3 from "../assets/vany-profile.png";
const Sidebar = ({ loggedInUser }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFriends, setFilteredFriends] = useState([]);
    const [users, setUsers] = useState([]);
    
    // const BASE_URL = process.env.PUBLIC_URL;

    const fetchAllUsers = async () => {
        try {
            console.log('Fetching all users...');
            const response = await fetch('/api/Users');
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            console.log('Fetched users:', data);
            setUsers(data);
        } catch (err) {
            console.error('Error fetching users:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchSubmit = () => {
        <Link to="/searchuser"></Link>
    };
  
    // console.log(users);

    // useEffect(() => {
    //     const fetchFriends = async () => {
    //         try {
    //             console.log('Fetching friends for:', loggedInUser.username);
    //             const response = await fetch(`/api/Users/${loggedInUser.username}/friends`);
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch friends');
    //             }
    //             const data = await response.json();
    //             console.log('Fetched friends:', data);
    //             setFriends(data);
    //             setFilteredFriends(data); 
    //         } catch (err) {
    //             console.error('Error fetching friends:', err);
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     // fetchFriends();
    // }, [loggedInUser.username]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        const filtered = users.filter(user =>
            user.username.toLowerCase().includes(e.target.value.toLowerCase())
        );
        // setFilteredFriends(filtered);
    };

    return (
        <div className="sidebar">
            <div className='search-container'>
             <input
                    type="text"
                    placeholder="Search friends..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="search-input"
                />
                {/* <button onClick={handleSearchSubmit} className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                </button> */}
                {/* <link to='/searchuser'>
                <FontAwesomeIcon icon={faSearch} />
                </link> */}
                <Link to='/searchuser' className='search-button'>
                    Search
                </Link>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="friends-list">
                    {/* {filteredFriends.map(friend => (
                        <div key={friend._id} className="friend-item">
                            <Link to={`/ootd/${friend.username}`}>
                                <img
                                    src={img1}
                                    alt={friend.username}
                                    className="friend-profile-pic"
                                />
                                <p>{friend.username}</p>
                            </Link>
                        </div>
                    ))} */}
                 
                    <div className="friend-item">
                    <div className='heading-friends'>My Friends</div>
                            <div className='friend-info'>
                            <Link to={`/FrPage` 
                            } className='friend-info'>
                                <img
                                    src={img2}
                                    alt="gany"
                                    className="friend-profile-pic"
                                />
                                <p className='sidebar-username'>Gany</p>
                            
                            </Link>
                            </div>
                            <Link to={`/FriendPage2`} className='friend-info'>
                                <img
                                    src={img3}
                                    alt="vany"
                                    className="friend-profile-pic"
                                />
                                <p className='sidebar-username'>Vany</p>
                            </Link>
                        </div>
                </div>
            )}
            <div className="profile-section">
                <Link to={`/profile`}>
                    <img src={img1} alt={loggedInUser.username} className="profile-pic" />
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
