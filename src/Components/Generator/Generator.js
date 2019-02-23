import React from 'react';
import './Generator.css';

const Generator = ({ requestNewButton, author, quote }) => {
    const url = `https://twitter.com/intent/tweet?text="${quote} - ${author}`;
    return(
        <div className="vh-100 dt w-100">
            <div className="dtc v-mid">
                <h1 className="mb underline f1-l white-80 fw4">Breaking Bad Quote Generator</h1>
                {/* eslint-disable-next-line */}
                <a href="https://github.com/ymoua17/quotegenerator" target="_blank" className="no-underline crystalblue">*Created by ymoua17*</a>
                <div className="pa4">
                    <button onClick={requestNewButton} className="pa2 bg-green grow pointer mh2 white-80">Get New Quote!</button>
                    {/* eslint-disable-next-line */}
                    <button className="pa2 bg-blue mh2 grow"><a href={url} target="_blank" className="no-underline white-80">Tweet Me</a></button>
                </div>    
                 <div className="f2-l"> 
                    <h2 className="crystalblue fw2">"{quote}"</h2>
                    <h3 className="i white-80 fw2">- {author}</h3>
                </div>
            </div>
        </div>
    )
}

export default Generator;