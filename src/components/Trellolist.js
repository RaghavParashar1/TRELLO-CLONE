import React from "react";
import Trellocard from "./Trellocard";

const Trellolist = ({ title }) => {
    return (
    <div style = {style.container}>
        <h4>{title}</h4>
        <Trellocard/>
    </div>
    );
}

const style = {
    container: {
        backgroundColor: "#ccc",
        borderRadius: 20,
        width: 300,
        padding: 8
    },
};
export default Trellolist;