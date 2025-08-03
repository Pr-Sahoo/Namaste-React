// const data = `{
//     "info": {
//         "id": "87320",
//         "name": "Biggies Burger",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/403b423b-c579-4b96-9a29-243b7f809c60_87320.jpg",
//         "locality": "Sahid Nagar",
//         "areaName": "Sahid Nagar",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//             "Burgers",
//             "Fast Food"
//         ],
//         "avgRating": 4.5,
//         "parentId": "45723",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "8.9K+",
//         "sla": {
//             "deliveryTime": 24,
//             "lastMileTravel": 3,
//             "serviceability": "SERVICEABLE",
//             "slaString": "20-25 mins",
//             "lastMileTravelString": "3.0 km",
//             "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//             "nextCloseTime": "2025-07-24 04:00:00",
//             "opened": true
//         },
//         "badges": {

//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//             "entityBadges": {
//                 "imageBased": {

//                 },
//                 "textBased": {

//                 },
//                 "textExtendedBadges": {

//                 }
//             }
//         },
//         "aggregatedDiscountInfoV3": {
//             "header": "30% OFF",
//             "subHeader": "UPTO ₹75"
//         },
//         "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//                 "lottie": {

//                 },
//                 "video": {

//                 }
//             }
//         },
//         "reviewsSummary": {

//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {

//         },
//         "externalRatings": {
//             "aggregatedRating": {
//                 "rating": "4.4",
//                 "ratingCount": "4.6K+"
//             },
//             "source": "GOOGLE",
//             "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//     },
//     "analytics": {
//         "context": "seo-data-a183661c-ac30-430b-bdd3-cf97694a5ba2"
//     },
//     "cta": {
//         "link": "https://www.swiggy.com/city/bhubaneswar/biggies-burger-sahid-nagar-rest87320",
//         "type": "WEBLINK"
//     }
// }`

import reslist from "./utils/mockData";
import { AccessKey } from "./utils/constant";
import { useEffect, useState } from "react";
// import { SecretKey } from "./utils/constant";

let parsedData = JSON.parse(reslist);
const ItemList = ["pizza", "burger", "biryani", "roll", "frenchfries", "coke", "cake", "shake", "chocolate", "chickencurry", "ricecurry", "pannercurry","icecream","sweets"];



const StyleCard = ({ resName }) => {
    const { name, cuisines, avgRating, sla } = resName
    const [imgUrl, setImgUrl] = useState("");
    useEffect(() => {
        const foodItem = ItemList[Math.floor(Math.random() * ItemList.length)];
        const url = `https://api.unsplash.com/search/photos?query=${foodItem}&client_id=${AccessKey}`;
        fetch(url).then((res)=> res.json()).then((data) => {if(data.results && data.results.length > 0) {setImgUrl(data.results[0].urls.small)}}).catch((err) => console.log("facing error in fetching ", err));
    },[])
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            {/* <img className="res-logo" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${cloudinaryImageId}`} alt="Food" /> */}
            {imgUrl && <img className="res-logo" alt="food" src={imgUrl} />}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

const Body = () => {
    // const handleTop = () => {
    //     const  topRated = parsedData.filter((data)=> {return parseFloat(data.info.avgRating) > 4.5});
    //     console.log(topRated);
    // }
    // const [filteredData, setFilteredData] = useState(parsedData);
    const arr = useState(parsedData);
    // const [filteredData, setFilteredData] = arr;
    const filteredData = arr[0];
    const setFilteredData = arr[1];
    
    return (
        <div className="body">
            <div className="filter">
                {/* <button className="filter-btn" onClick={handleTop}>Top Resturant</button> */}
                <button className="filter-btn" onClick={() => {
                    let topRated = parsedData.filter((res) => res.info.avgRating > 4.5);
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