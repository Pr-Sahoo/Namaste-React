// import React from "react";
// import ReactDOM from "react-dom/client";

// //React element 
// const heading = (
//     <h1 className="head" tabIndex={5}>Namaste js using the react 👍</h1>
// );
// const Head = () => (
//     <div>
//     <h1>this is a react element</h1>
//     <h2>this  is a second element</h2>
//     </div>
//     )

// //React functional component
// //this is a react composition component
// const HeadingComponent = () => {
//     return <div id="container">
//         <Head />
//         <h1>Homelander is a great man</h1>
//     </div>;
// };

// const HeadingComponent2 = () => <h1>This is also a heading now</h1>;
// const HeadingComponent3 = () => (<h2>this is inside the bracket</h2>);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<HeadingComponent2/>);
// // root.render(HeadingComponent2());
// root.render(<HeadingComponent/>);

// import React from "react";
// import ReactDOM from "react-dom/client";

// // const Title = () => (<h1>I am the only man in the sky</h1>)
// // const Title = function() {
// //     return(<h1>I am the only man in the sky</h1>)
// // }
// // function Title() {
// //     return(<h1>I am the only man in the sky</h1>)
// // }
// const title = (
//     <h1>I am the only man in the sky</h1>
// )
// //this is the component composition
// const Heading = () => {
//     return(
//         <div>
//             {/* <Title />        */}
//             {title}
//             {5035 + 35663}
//             <h1>{console.log("homelander is a great man")}</h1>
//             <h1 className="head">Soilder boy is the father of homelander</h1>
//         </div>
//     )
// }
// let obj = {name: "Walter", last: "white"};
// const child = (
//     <div>
//         {title}
//         {/* <Heading /> */} <Heading>Hey there</Heading>
//         <Heading />
//         {/* {Heading()} */}
//         <h1>I am stronger</h1>
//         {/* {String(454>456)} */}
//         {/* {`${535>534}`} */}
//         {53>35 ? "true" : "false"}
//         {JSON.stringify(obj)}
//         {obj.name}
//         {obj.last}
//     </div>
// )
// // const Title = () => {
// //     return <h1 className="head" tabIndex={5}>Hey this is the Homelander</h1>
// // }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Heading />);
// root.render(child);
import react from "react";
import ReactDom from "react-dom/client";
// Header
//   logo , nav items
// Body 
//search component
//card container (resturant card - img, name of res, star rating, cuisins, delery tie)
const names = ["kfc", "MacDonald", "Chandini Food Magic", "Sardar Resturant", "BurgerKing", "Barbique nation", "Mio Amore", "Morris", "Burger Point", "test of china", "momos king", "test of India", "test of america", "Italian sweets", "sarala sweets"];
//    const time = Math.floor(Math.random() * 15);
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=&txt_keyword=All" alt="food logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const data = `{
    "info": {
        "id": "87320",
        "name": "Biggies Burger",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/403b423b-c579-4b96-9a29-243b7f809c60_87320.jpg",
        "locality": "Sahid Nagar",
        "areaName": "Sahid Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Burgers",
            "Fast Food"
        ],
        "avgRating": 4.5,
        "parentId": "45723",
        "avgRatingString": "4.5",
        "totalRatingsString": "8.9K+",
        "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-07-24 04:00:00",
            "opened": true
        },
        "badges": {

        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {

                },
                "textBased": {

                },
                "textExtendedBadges": {

                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {

                },
                "video": {

                }
            }
        },
        "reviewsSummary": {

        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {

        },
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.4",
                "ratingCount": "4.6K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-a183661c-ac30-430b-bdd3-cf97694a5ba2"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/bhubaneswar/biggies-burger-sahid-nagar-rest87320",
        "type": "WEBLINK"
    }
}`
const parsedData = JSON.parse(data);
// const styleCard = {backgroundColor:"#f0f0f0"}
// const ResturantCard = ({ names, time, star }) => {
//     return (
//         <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
//             <img src="https://bonmasala.com/wp-content/uploads/2022/10/mutton-biriyani-recipe.jpeg" alt="resLogo" className="res-logo" />
//             {/* <h3>Meghna Foods</h3> */}
//             <h3>{names}</h3>
//             <h4>Biriyani, North Indian, Asian</h4>
//             <h4>{star} stars</h4>
//             <h4>{time} mins</h4>
//         </div>
//     )
// }
const StyleCard = ({resName}) => {
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = resName;
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            {/* <img className="res-logo" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/${cloudinaryImageId}`} alt="Food" /> */}
            <img className="res-logo" src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_400/`+parsedData.cloudinaryImageId} alt="Food" />
            {/* <img className="res-card" src={cloudinaryImgId} alt="food" /> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* {names.map((resName, idx) => (
                    <ResturantCard key={idx} names={resName} time={Math.floor(Math.random() * 40)} star={(Math.random() * (5 - 1) + 1).toFixed(1)} />
                ))} */}
                <StyleCard resName={parsedData.info}/>
            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            {/* <Header /> */}
            <div>{Header()}</div>
            <Body />
        </div>
    )
}

let root = ReactDom.createRoot(document.getElementById("root"));


root.render(<AppLayout />)