import React from 'react'

export default function Leadparag(props) {
    return (
        <div className="main_parag">
            {props.desc.map(el => <p>{el}</p>)}
        </div>
    )
}
