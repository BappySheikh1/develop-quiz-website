import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div >
            <div className='main-blog'>
             
            <div className='blog-container'>
                <h4>Q-1:React Router কি কাজে লাগে এটা দিয়ে কি করে?</h4>
                 <p>Ans:-
                 Thanks to Rauter, SPAs - single-page applications looks like multiple pages to user. By cliking on link or entering a URL, SPA can render components like separate pages. React comes without routing. First we need to install library named react-router with: npm install react-router-dom or yarn add react-router-dom. Also we need to import BrouserRouter, Route, Switch and Link from ‘react-router-dom’; If we need routing in our entire       app, we must wrap our higher component with BrowserRouter, so we need to wrap App component. In index.js:
                 </p>
            </div>
              
            </div>

          <div className='main-blog'>
          <div className='blog-container'>
                <h4>Q-2: How Does Context API Works</h4>
                 <p>Ans:-The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                 Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. <br />
                 React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state
                 </p>
            </div>
          </div>

           <div className='main-blog'> 
           <div className='blog-container'>
              <h4>Q-3:useRef কী?</h4>
              <p>Ans:-useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full     lifetime of the component.A common use case is to access a child imperatively: <br />
                Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  ref={"myRef"} , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
           </div>
        </div>
    );
};

export default Blog;