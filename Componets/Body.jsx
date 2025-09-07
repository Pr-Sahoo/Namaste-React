
import reslist from "./utils/mockData";
import { AccessKey } from "./utils/constant";
import { useEffect, useState } from "react";
// import { SecretKey } from "./utils/constant";

let parsedData = JSON.parse(reslist);
const ItemList = ["pizza", "burger", "biryani", "roll", "frenchfries", "coke", "cake", "shake", "chocolate", "chickencurry", "ricecurry", "pannercurry","icecream","sweets"];



const StyleCard = ({ resName }) => {
    const { name, cuisines, avgRating, sla } = resName;
    const [imgUrl, setImgUrl] = useState("");
    useEffect(() => {
        const foodItem = ItemList[Math.floor(Math.random() * ItemList.length)];
        const url = `https://api.unsplash.com/search/photos?query=${foodItem}&client_id=${AccessKey}`;
        fetch(url).then((res)=> res.json()).then((data) => {if(data.results && data.results.length > 0) {setImgUrl(data.results[0].urls.small)}}).catch((err) => console.log("facing error in fetching ", err));
    },[])
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {imgUrl && <img className="res-logo" alt="food" src={imgUrl} />}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

const Body = () => {
    // const arr = useState(parsedData);
    // const [filteredData, setFilteredData] = arr;
    // const filteredData = arr[0];
    // const setFilteredData = arr[1];

    // const [filteredData, setFilteredData] = useState(parsedData);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3639142&lng=85.7974141&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const res = await data.json();
        console.log(res);
        const resturants = res?.data?.cards?.map(card => card.card?.card.info)?.filter(info => info !== undefined);
        // setFilteredData(json.data.cards?data.cards)
        setFilteredData(resturants);
    }
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    let topRated = parsedData.filter((res) => res?.info?.avgRating > 4.5);
                    console.log(topRated);
                    setFilteredData(topRated)
                }}>Top Resturant</button>
            </div>
            <div className="res-container">
                {/* {parsedData.map((res, idx) => (<StyleCard key={idx} resName={res.info} />))} */}
                {filteredData.map((res, idx) => (<StyleCard key={idx} resName={res.info} />))}
            </div>
        </div>
    )
};

export default Body;