

import ReactDom from "react-dom/client";
import Header from "../Componets/Header";
import Body from "../Componets/Body";
// Header
//   logo , nav items
// Body 
//search component
//card container (resturant card - img, name of res, star rating, cuisins, delery tie)
const names = ["kfc", "MacDonald", "Chandini Food Magic", "Sardar Resturant", "BurgerKing", "Barbique nation", "Mio Amore", "Morris", "Burger Point", "test of china", "momos king", "test of India", "test of america", "Italian sweets", "sarala sweets"];

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