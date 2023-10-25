import React from 'react'

export default function ShopBtn(props) {
    return (
        <button className={`w-fit px-10 p-3 ${props.property} rounded-md `}>
            Shop Now
        </button>
    )
}
