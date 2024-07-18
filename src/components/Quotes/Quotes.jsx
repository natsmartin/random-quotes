import React from 'react'
import './Quotes.css'
import { useSelector } from 'react-redux'


function Quotes() {

    const state = useSelector((state) => state)
    console.log(state)

    const quotesArr = state.todo.data
    const dataLength = state.todo.data !== null ? state.todo.data.length - 1 : 0

    let randomQuote = ""

    if (dataLength > 0) {
        randomQuote = quotesArr[Math.floor(Math.random() * dataLength)].text
            .concat(" -", quotesArr[Math.floor(Math.random() * dataLength)].author)
            .replace(", type.fit", "")
    }

    return (
        <div className="quotes-container">
            <div className="text-container">
                {
                    state.todo.isLoading ?
                        <p className="loading-text">Loading ...</p> :
                        <p className="quotes-text">{randomQuote}</p>
                }
            </div>
        </div>
    )
}

export default Quotes