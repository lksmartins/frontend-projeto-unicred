import React from 'react'
import Link from 'next/link'

export default function Button(props){

    const text = props.text || props.children || 'Saber Mais'

    if( props.url == undefined ){
        return (
            <button className={`button ${props.color!=undefined ? props.color : '' }`} {...props}>
                {text}
            </button>
        )
    }
    else{

        return( 
            <Link href={props.url}>
                <a className={`button ${props.color!=undefined ? props.color : '' }`} >
                    {text}
                </a>
            </Link>
        )
    }
}