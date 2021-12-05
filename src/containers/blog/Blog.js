import React from 'react';
import {Article} from '../../components';
import {
    blog01,
    blog02,
    blog03,
    blog04,
    blog05
} from './imports';
import './blog.css';

import Moment from 'react-moment';
import moment from 'moment';

function Blog() {
    const currentDateTime = moment().format('MMMM Do YYYY, h:mm:ss a'); <Moment format='MMMM Do YYYY, h:mm:ss a'>
        {currentDateTime}</Moment>

return (
        <div className='gpt3__blog section__padding' id='blog'>
            <div className='gpt3__blog-content'>
                <div className='gpt3__blog-heading'>
                    <h1 className='gradient__text'>
                        A lot is happening. we are blogging about it
                    </h1>
                </div>

                <div className='gpt3__blog-container'>
                    <div className='gpt3__blog-container_groupA'>
                        <Article currentDateTime={currentDateTime}
                            imgUrl={blog01}
                            title='GPT3 and open all is the future. Let us explore how if is'></Article>
                        
                    
                    </div>

                    <div className='gpt3__blog-container_groupB'>
                        <Article currentDateTime={currentDateTime}
                            imgUrl={blog02}
                            title='GPT3 and open all is the future. Let us explore how if is'></Article>
                        <Article currentDateTime={currentDateTime}
                            imgUrl={blog03}
                            title='GPT3 and open all is the future. Let us explore how if is'/>

                        <Article imgUrl={blog04}
                            currentDateTime={currentDateTime}
                            title='GPT3 and open all is the future. Let us explore how if is'/>

                        <Article imgUrl={blog05}
                            currentDateTime={currentDateTime}
                            title='GPT3 and open all is the future. Let us explore how if is'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
