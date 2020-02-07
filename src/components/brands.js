import React from 'react'

export default function Brands(props) {
    return (
        <div className="brand_logo">
          {props.list_brand.map(el => <li><a href={el.link}><svg width='200' height="32" viewBox="0 0 200 32" ><path d={el.path}></path></svg></a></li>) }
        </div>
    )
}
