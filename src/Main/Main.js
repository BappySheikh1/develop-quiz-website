import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header"

export const QuizDataContext=createContext([])
const Main = () => {
    const data=useLoaderData()
    // console.log(data)
    return (
        <div>
            <QuizDataContext.Provider value={data.data}>
            <Header />
            <Outlet />
            <Footer />
            </QuizDataContext.Provider>
        </div>
    );
};

export default Main;