'use client';
import './globals.css'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        {children}
        <Footer/>
        <ProgressBar
            height="2px"
            color="#000"
            options={{ showSpinner: true }}
            shallowRouting
        />
        </body>
        </html>
    );
}