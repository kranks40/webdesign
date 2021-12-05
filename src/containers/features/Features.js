import React from 'react'
import { Feature } from '../../components'
import "./features.css"

const featuresData = [
    {
        title: "Reality boy law country",
        text: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind."
    },
    {
        title: "Reality boy law country",
        text: "Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all."
    },
    {
        title: "Reality boy law country",
        text: "She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens."
    },
    {
        title: "Reality boy law country",
        text: "You could see it in the clothes she wore that color was an important part of her overall style. She took great pride that color flowed from her and that color was always all around her. "
    },
]

function Features() {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The future is now and you just need to realize it. Step into the future today & make it happen</h1>
                <p>Request early access</p>
            </div>

            <div className="gpt3__features-container">
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
