import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <Link className='btn' href='/dress/men'>Men</Link><br/><br/>
            <Link className='btn' href='/dress/women'>Women</Link><br/><br/>
        </div>
    );
};

export default Page;