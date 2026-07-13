import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dummyResList from '../dummyResList';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/slices/cartSlice';

const ResturantDetail = () => {

    const [isOpenIndex, setIsOpenIndex] = useState(0);
    const {resId} = useParams();
    
    const [resDetail, setResDetail] = useState([]);

    const dispatch = useDispatch();

    const fetchResturantDetails = () => {
        const data = dummyResList.filter((data)=> data.id == resId);
            setResDetail(data[0]);
    }


    useEffect(()=>{
        fetchResturantDetails()
    },[]);

    const handleCartItems = (list) => {
        dispatch(addItem(list))
    }

    return (
        <div>
            <h3>Resturant Detail page</h3>
            <ul>
                <li><h1>{resDetail.name}</h1></li>
                <li>{resDetail.cuisines}</li>
                <li><h3>Menu:</h3></li>
                {resDetail.menu?.map((item,index)=>{return <div key={index}>
                    <li onClick={()=>{isOpenIndex === index ?setIsOpenIndex(null):setIsOpenIndex(index)}}>{item.categoryName}({item.items.length})</li>
                    {isOpenIndex === index?item.items.map((list,index)=><div key={index}>{<div><span>{list}</span><button onClick={()=>{handleCartItems(list)}}>Add</button></div>}</div>):''}
                    </div>})}
            </ul>
        </div>
    )
}

export default ResturantDetail