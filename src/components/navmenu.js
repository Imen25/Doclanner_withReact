import React from 'react'

export default function Navmenu(props) {
    return (
        <div className="main-nav">
            {props.nav.map((el) => <li><a href={el.link}>{el.item} </a>{el.subitem ? <ul className="sub_menu">{
                el.subitem.map(el => <li><a href={el.link}>{el.item}</a></li>)}</ul> : null}</li>)}
        </div>
    )
}
