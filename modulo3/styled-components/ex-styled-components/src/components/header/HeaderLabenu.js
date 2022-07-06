import React from "react";
import {HeaderStyles} from "./headerStyle";

function headerLabenu (props) {
    return (
        <HeaderStyles>
            <h1>{props.nomeLabenu}</h1> 
        </HeaderStyles>               
    )  
}

export default headerLabenu;