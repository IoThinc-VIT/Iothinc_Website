import React, { useState, useEffect } from 'react';
import clipart from '../Images/Connect Vector.png';
import send from '../Images/Group 975.png';

const Query = () => {
    return (
    <div className="queries">
        <div className="queriesHeadLine">
            Query
        </div>
        <div className="queriesSubLine">
            Ask your queries here, dont hold back!
        </div>
        
        <div className="queriesForm">
        <div className='formLeft'>
            <img src={clipart} alt="" srcset="" />
        </div>
        <div className='formRight'>
            <form>
                <div className="form-group">
                    <input type={'text'} className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
                    <input type={'text'} className="form-control" id="exampleFormControlInput1" placeholder="Email-ID"/>
                    <div className="textAreaContainer" >
                    <textarea className="form-control queryTextArea" id="exampleFormControlInput1" placeholder="Ask your query here..."></textarea>
                    <button type="submit" className="btn btn-primary"><img src={send}></img></button>
                    </div>
                    
                </div>
            </form>
        </div>
        </div>
        
    </div>    
    );
}

export default Query;
