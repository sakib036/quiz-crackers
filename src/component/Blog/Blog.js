import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-3/4 mx-auto bg-sky-200 p-10'>
            <div className='border border-pink-500 p-10 mb-10'>
                <h1 className='text-3xl'>what is the purpose of react router?</h1>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                <p>React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                <p> Adding React Router Components: The main Components of React Router are:</p>

                <p><span className='text-xl font-bold'>BrowserRouter:</span> BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.</p>
                <p><span className='text-xl font-bold'>Routes:</span> It's a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over Switch are:
                    Relative s and s,
                    Routes are chosen based on the best match instead of being traversed in order.</p>
                <p><span className='text-xl font-bold'>Route:</span> Route is the conditionally shown component that renders some UI when its path matches the current URL.</p>
                <p><span className='text-xl font-bold'>Link:</span> Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.</p>
            </div>
            <div className='border border-pink-500 p-10 mb-10'>
                <h1 className='text-3xl'>How does Context API Work</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                <p>
                    The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.“Prop drilling (also called “threading”) refers to the process you have to go through to get data to parts of the React Component tree.”
                </p>
                <p><span className='text-xl font-bold'>Manipulating data within the Context API:</span>
                    Sometimes we want to change some data in the context, for example changing the theme of the app when a user changes their theme. To do this, we simply connect the data in the context Provider to the state of the parent element and then change this parent's state using functions in props, a better way is to have the function that will change the context value passed down in the context itself.</p>

            </div>
            <div className='border border-pink-500 p-10 mb-10'>
                <h1 className='text-3xl'>Details About useRef</h1>
                <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference. A reference is an object having a special property current.</p>
                <p><span className='text-xl font-bold'>implementing a stopwatch</span>You can store inside a reference infrastructure data of side effects. For example, you can store into reference pointers: timer ids, socket ids, etc. The component Stopwatch uses setInterval(callback, time) timer function to increase each second the counter of a stopwatch. The timer id is stored into a reference timerIdRef</p>
                <p><span className='text-xl font-bold'>Accessing DOM elements</span>Another useful application of the useRef() hook is to access DOM elements. This is performed in 3 steps:
                Define the reference to access the element const elementRef = useRef();
                Assign the reference to ref attribute of the element.
                After mounting, elementRef.current points to the DOM element.</p>
                <p><span className='text-xl font-bold'>focusing an input</span>You would need to access DOM elements, for example, to focus on the input field when the component mounts.</p>
            </div>
        </div >
    );
};

export default Blog;