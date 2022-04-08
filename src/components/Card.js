import React from 'react'
import star from '../img/Star.png'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.image} alt="logo" className='card-image'/>
            <div className='Card-stats'>
                <img src={star} alt=""  className='card-star'/>
                <span> {props.rating}</span>
                <span className='gray'> ({props.reviewCount}) • </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}