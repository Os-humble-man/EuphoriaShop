import React from 'react'

export default function FooterTitle(props) {
    return (
        
            <div>
                <h1 className='text-2xl font-bold'>{props.title}</h1>
                <ul className=''>
                    <li className=''>{props.text}</li>
                </ul>
            </div>
    )
}
