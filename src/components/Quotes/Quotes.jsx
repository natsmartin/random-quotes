import React from 'react'
import './Quotes.css'
import { useSelector } from 'react-redux'


function Quotes() {

    const state = useSelector((state) => state)
    // console.log(state.todo);
    const dataArr = state.todo.data;

    if (state.todo.isLoading) {
        return (
        <div key='text-container' className="text-container">
            <p className="quotes-text" >Loading . . .</p>
        </div>
        )
    }

    return (
        <div className="quotes-container">
            {
                dataArr?.map((data, index) => {
                    return (
                        <div key={'text-container'+index} className="text-container">
                            <p className="quotes-text" > {data.q.concat(' -', data.a)}</p>
                        </div>
                    )
                })

            }
        </div >
    )
}

export default Quotes