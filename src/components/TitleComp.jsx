import React from 'react'

export default function TitleComp(props) {
    return (
        <div className=' border-l-4 border-violet-700 pl-3'>
            <h1 className=' font-bold text-zinc-800 text-4xl'>{props.text}</h1>
        </div>
    )
}
