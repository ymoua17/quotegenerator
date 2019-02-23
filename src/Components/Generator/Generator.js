import React from 'react';
import './Generator.css';

const Generator = ({ requestNewButton, author, quote }) => {
    const url = `https://twitter.com/intent/tweet?text="${quote} - ${author}`;
    return(
        <div>
            <h1>Breaking Bad Quote Generator</h1>
            {/* eslint-disable-next-line */}
            <a href="https://github.com/ymoua17/quotegenerator" target="_blank" className="no-underline">*Created by ymoua17*</a>
            <div className="pt3">
                <button onClick={requestNewButton}>Click Here!</button>
                {/* eslint-disable-next-line */}
                <button><a href={url} target="_blank" className="no-underline">Tweet Me</a></button>
            </div>
            <div className="quotebox"> 
                <h1>"{quote}"</h1>
                <h2 className="i">- {author}</h2>
            </div>
            
            
        </div>
    )
}

export default Generator;