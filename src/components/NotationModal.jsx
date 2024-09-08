import React from "react";
import { NOTATION_DETAILS } from "./Utils";

const NotationModal = (props) => {
    const {notation} = props;
    return (
        <div>
            <h2>{NOTATION_DETAILS[notation].title}</h2>
            <p>{NOTATION_DETAILS[notation].info}</p>
        </div>
    );
}

export default NotationModal;