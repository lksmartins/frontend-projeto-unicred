import React from 'react'
import Link from 'next/link'

export default function Header() {

    return (
        <div className="header">
            <div className="content">
                <Link href="/">
                    <a><img src="/logo/logo_esquadrao_unicred.webp"/></a>
                </Link>
            </div>
        </div>
    )
}