import { Link } from 'react-router-dom';
import dummyResList from '../dummyResList';
import {ResturantCard, ResturantCardWithLabel} from './ResturantCard';
import Shimmer from './Shimmmer';
import { useEffect, useState } from 'react';

const Body = () => {

    const [filterRes, setFilterRes] = useState(dummyResList);
    const [searchText, setSearchText] = useState('');

    const ResturantCardAddedLabel = ResturantCardWithLabel(ResturantCard);

    const handleTopRatedResturant =()=>{
        const topRatedRes = dummyResList.filter((data)=>{return data.stars>=4.3});
        setFilterRes(topRatedRes);
    }

    const handleSearchText = () => {
        const searchResults = dummyResList.filter((res)=>{return res.name.toLowerCase().includes(searchText.toLowerCase())})
        setFilterRes(searchResults)
    }

    useEffect(()=>{
        fetchData
    },[])

    const fetchData = async() => {
        const data = await fetch('http:');
        return await data.json();
    }

  return filterRes.length == 0?<Shimmer/> :(    
    <div className="body">
      <div className="search-bar">
        <input type='text' onChange={(e)=>{setSearchText(e.target.value);
        }}></input>
        <button type='submit' onClick={handleSearchText}>submit</button>
      </div>
      <div className="fav-res">
        <button onClick={handleTopRatedResturant}>Top Rated Resturants</button>
      </div>
      <div className="res-container">
          <div className="res-card">
        {filterRes.map((res)=><Link to={`/resturant/${res.id}`} key={res.id}>{res.label?<ResturantCardAddedLabel data={res}/>:<ResturantCard data={res}/>}</Link>)}
          </div>
      </div>r

    </div>
  )
}

export default Body;

// ()=><yuguyguy/>