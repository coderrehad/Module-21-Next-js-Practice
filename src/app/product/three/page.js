'use client'

import React from 'react';
import Link from "next/link";
import {useSearchParams} from "next/navigation";

const Page = () => {
    const params = useSearchParams()
    return (
        <div>
            <h1>Id: {params.get('Id')}</h1>
            <h1>Price: {params.get('price')}</h1>
            <Link className='btn' href='/product' replace>Product</Link>
        </div>
    );
};

export default Page;