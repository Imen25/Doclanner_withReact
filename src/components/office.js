import React from 'react'

export default function Office(props) {
    return (
        <div className="offices__slider">
            {props.offic_arr.map(el => <div className="office"><a href={el.link}><img src={el.image} alt="" /><div>
                {el.titre}
                <span className="btn btn--small">See openings</span>
            </div></a></div>)}
        </div>
    )
}
