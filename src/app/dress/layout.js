import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            {children}
            <button className='btn mt-3'>Subscribe Now</button>
        </div>
    );
};

export default Layout;