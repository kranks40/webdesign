import React from 'react';
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

function Possibility() {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={possibilityImage}
                    alt="possibility"/>
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request early Access to get started</h4>
                <h1 className="gradient__text">The possibility are beyond your imagination</h1>
                <p>At least that is what they thought. They were more than a little annoyed when their two younger sisters decided to
                    turn the tree-house into a princess castle by painting the inside pink and putting glitter everywhere.</p>
                <h4>Request for early access</h4>
            </div>
        </div>
    );
}

export default Possibility;
