'use client'

import React from 'react';
import Link from "next/link";
import '../app/globals.css'
import {usePathname} from "next/navigation";

const Navbar = () => {
    let currentRoute = usePathname()
    return (
        <div>
            <Link className={currentRoute==='/'?'active-link':'pending-link'} href='/'>Home</Link><br/>
            <Link className={currentRoute==='/docs'?'active-link':'pending-link'} href='/docs'>Documentation</Link><br/>
            <Link className={currentRoute==='/docs/service'?'active-link':'pending-link'} href='/docs/service'>Service</Link><br/>
            <Link className={currentRoute==='/dress'?'active-link':'pending-link'} href='/dress'>Dress</Link><br/><br/>
        </div>
    );
};

export default Navbar;