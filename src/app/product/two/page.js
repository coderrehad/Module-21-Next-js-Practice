'use client'

import React from 'react';
import {useSearchParams} from "next/navigation";
import Link from "next/link";

const Page = () => {
    let params = useSearchParams()
    return (
        <div>
            <h1>Id: {params.get('Id')}</h1>
            <h1>Price: {params.get('price')}</h1>
            <Link className='btn' href='/product' replace>Product</Link>
        </div>
    );
};

export default Page;