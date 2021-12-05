import React from 'react';
import "./header.css";
import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

function Header() {
    return (
        <div className="gpt3__header section__padding" id="Home">
           <div className="gpt3__header-content">
               <h1 className="gradient__text">Let's build something amazing with GPT3 openAI</h1>
               <div className="gpt3__header-content__input">
                   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores beatae totam aliquid quisquam rerum accusantium similique mollitia repellat ut debitis, quasi iste porro optio, autem tempore doloremque ipsa, excepturi recusandae.</p>
                  <input type="email" placeholder="Your Email Address" />
                  <button type="button">Get Started</button>
               </div>

               <div className="gpt3__header-content__people">
                   <img src={people} alt="people"/>
                   <p>1600 people requested access. 8 visited in the las 24hr </p>
               </div>
           </div>
               <div className="gpt3__header-image">
                   <img src={ai} alt="ai"/>
               </div>
        </div>
    );
}

export default Header;
