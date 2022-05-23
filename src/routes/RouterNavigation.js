import React from "react";
import { Route, Routes } from "react-router-dom";
import { DataNavigation } from "../utils/data";

export default function RouterNavigation() {

    return(
        <>
            <Routes>
                {DataNavigation.map(( item, idx ) => (
                    <Route
                        key={`${idx+1}`}
                        path={item.path}
                        element={item.element}
                    />
                ))}
            </Routes>
        </>
    )
}