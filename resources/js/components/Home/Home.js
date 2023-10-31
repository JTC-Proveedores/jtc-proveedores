import React from "react";
import ReactDOM from "react-dom";
import PrincipalFrame from "./Section/PrincipalFrame";
import SecondFrame from "./Section/SecondFrame";
import ThirdFrame from "./Section/ThirdFrame";
import FourthFrame from "./Section/FourthFrame";
const Home = ({}) =>{

    let url = window.location;

    return(
        <>
            <PrincipalFrame />
            <SecondFrame />
            <ThirdFrame />
            <FourthFrame/>
        </>
    )
};

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}
