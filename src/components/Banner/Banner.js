import React from 'react';
import logo from "../../image/pexels-pixabay-301920.jpg"

const Banner = () => {
    return (
        <div>
            <div>
              <header id='headerContainer'>
                 <img src={logo} alt="" />
                 <div className='header-item'>
                 <h5>Welcome To You LearnPLUS Quiz</h5>
                 <p>
                  Practice React JavaScript Git CSS special quiz on our website!</p>
                </div>
              </header>
            </div>
        </div>
    );
};

export default Banner;