import React from 'react';

const Blog = () => {
    const data =[
        {
            id: 1,
            title: "What is the perpuse of react router?",
            content: "ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route."
        },
        {
            id: 2,
            title: "How does context api works",
            content: "The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to 'prop drilling' or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux."
        },
        {
            id: 3,
            title: "How does useRef hook work?",
            content: "The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly."
        }
    ]
    return (
        <div className="container p-5">
            {data.map(blog=><div key={blog.title}><h2>{blog.title}</h2><p>{blog.content}</p></div>)}
        </div>
    );
};

export default Blog;