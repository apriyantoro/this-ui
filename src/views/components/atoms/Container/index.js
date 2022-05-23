import React from "react";
import { ThisContainer } from "./styles";

export default function Container(props) {

    return(
        <>
            <ThisContainer>
                {props.children}
            </ThisContainer>
        </>
    )
};