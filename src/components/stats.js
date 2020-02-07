import React from 'react'

export default function Stats(props) {
    return (
        <div className="stat_items">
            {props.stat_item.map(el => <div> <img src={el.image_logo} alt=""/><h3>{el.titre}</h3><p>{el.desc}</p></div>)}
        </div>
    )
}
