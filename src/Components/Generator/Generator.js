import React from 'react';

const Generator = ({ requestNewButton, author, quote }) => {
    const url = `https://twitter.com/intent/tweet?text="${quote} - ${author}`;
    return(
        <div>
            <h1>{quote}</h1>
            <h1>By: {author}</h1>
            <button onClick={requestNewButton}>Press me</button>
            {/* eslint-disable-next-line */}
            <a href={url}>Tweet Me</a>
        </div>
    )
}

export default Generator;