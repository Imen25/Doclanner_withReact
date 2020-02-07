import React from 'react'

export default function Serviceitem(props) {
    return (
        <div className="flow_service">
            {props.serv.map(el => <div className='box'>
                <h2>{el.titre}</h2>
                <h1>{el.desc}</h1>
                {el.countries ? <div className="services_sub_item"><select>
                    <option>Choose country</option>{el.countries.map(el =>
                        <option value={el.link}>{el.country}</option>)}</select><img src={el.image} alt="" /></div> : <img src={el.image} class="conf_img" alt="" />}
            </div>
            )}
        </div>
    )
}
