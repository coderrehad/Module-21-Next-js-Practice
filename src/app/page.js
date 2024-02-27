'use client'
import React, {useEffect, useState} from 'react';
import './css/home.css'
import Link from "next/link";

const Page = () =>{
    // Client Side Rendering
    const [data, setData] = useState()

    useEffect(() => {
        (async ()=>{
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            let json = await response.json()
            setData(await json)
        })()
    }, []);

    console.log(data)

    // Server Side Rendering
    async function getResult(){
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let json = await response.json()
        console.log(json)
    }


    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={getResult}>Get Result</button><br/>
            <Link className='btn' replace href='/product'>Product</Link>
        </div>
    );
};

export default Page;