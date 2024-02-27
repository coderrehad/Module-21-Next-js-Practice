import React from 'react';
import Link from "next/link";

const Page = ({searchParams}) => {
    return (
        <div>
            <h1>Id: {searchParams.Id}</h1>
            <h1>Price: {searchParams.price}</h1>
            <Link className='btn' href='/product' replace>Product</Link>
        </div>
    );
};

export default Page;