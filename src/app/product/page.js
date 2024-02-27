'use client'

import React from 'react';
import Link from "next/link";
import {useRouter} from "next/navigation";

const Page = () => {
    let router = useRouter()
    const ProductDetails = () => {
        router.push('/product/three?Id=3&price=1000')
    }
    return (
        <div>
            <Link className='btn' replace href={{pathname: '/product/one', query: {Id: 1, price: '100'}}}>Product 1
                Details</Link><br/><br/>
            <Link className='btn' prefetch={false} replace
                  href={{pathname: '/product/two', query: {Id: 1, price: '100'}}}>Product 2 Details</Link><br/><br/>
            <button className='btn' onClick={ProductDetails}>Product 3 Details</button>
            <br/>
        </div>
    );
};

export default Page;