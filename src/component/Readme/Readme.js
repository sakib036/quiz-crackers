import React from 'react';

const Readme = () => {
    return (
        <div className='md:w-2/3 mx-auto text-2xl'>
            <h1>Live Side Link is "https://cute-stardust-98036c.netlify.app/"</h1>
            <div>
                <ul>
                    <li> Use React Router and createBrowserRouter.</li>
                    <li>Router path, element are created and Children all the Router to the Main Section. </li>
                    <li>Header Section is cerated with NavLink which is Highlight when Click it .</li>
                    <li>Use Loader to load the Url api with arrow function. </li>
                    <li>Use Loader Data to receive the Url API and Destructuring the data.</li>
                    <li>Use Navigate to Send params to the dynamic loader data shown.</li>
                </ul>
            </div>
        </div>
    );
};

export default Readme;