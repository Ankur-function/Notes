import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
import { useEffect, useState } from "react";
import { searchSuggestions } from "../utils/slices/searchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const [suggestions,setSuggestions] = useState();
    const [query,setQuery] = useState();
    const cachedSearched = useSelector((res)=>(res.search?.searchResults));

    

    useEffect(()=>{

        const fetchYoutubeSuggestions = async () => {
          const youtubeSuggestions = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`)
          const results = await youtubeSuggestions.json();
          setSuggestions(results[1]);
          dispatch(searchSuggestions({query:query,result:results[1]}));
        }
        let timer;
        if(query && query.trim() !== '' && (!cachedSearched?.hasOwnProperty(query))){
             timer = setTimeout(()=>{fetchYoutubeSuggestions()},200);
        }

        if(cachedSearched.hasOwnProperty(query)){
          setSuggestions(cachedSearched[query])
        }

      return () => { // to clear the timer after every re-render of the component
          clearTimeout(timer)
      }


      
    },[query])

  return (
    <div className="yt-header">
      {/* Left section: Logos */}
      <div className="header-left">
        <img 
          className="menu-icon" 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3VRkBWY1ZRjJSK3rrAP9edXzBj_hx5twPA5IkjB34fQ&s' 
          alt='hamburger-logo'
          onClick={()=>{dispatch(toggleMenu())}}
        />
        <img 
          className="yt-logo" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hbbrG7rx5w70l42Vus43atnJklF76lnkEli5UQghcg&s=10" 
          alt="youtube-logo"
        />
      </div>

      {/* Middle section: Search Bar */}
{/* Middle section: Search Bar */}
<div className="header-middle">
  <div className="search-container"> {/* 1. Added absolute anchoring wrapper */}
    <div className="search-box-row">
      <input 
        className="search-input" 
        type="text" 
        placeholder="Search" 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button className="search-btn">Search</button>
    </div>

    {/* 2. Formatted search suggestion list container */}
    {suggestions?.length > 0 && (
      <ul className="suggestions-dropdown">
        {suggestions.map((item, index) => (
          <li key={index} className="suggestion-item">
            <span className="search-icon">🔍</span>
            <span className="suggestion-text">{item}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
</div>


      {/* Right section: Profile icon */}
      <div className="header-right">
        <img 
          className="profile-icon" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJxZDBwUti2z0HTfBWcH0BWXwx39sxJum8ilY7Lfb7Q&s=10" 
          alt="profile-logo"
        />
      </div>
    </div>
  );
};

export default Header;
