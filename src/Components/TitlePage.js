import React from 'react';
import './CSS/TitlePage.css';

/**Importing components */
import TitleBar from './TitleBar';
import BackGround from './TitleBackGround';

const TitlePage = () => {
    return (
        <div className = "TitlePage">
            <TitleBar/>
            <BackGround/>
            <div className = "Description_Box">
                <h1 id="Hi_Text">Hello,</h1>
                <h3 id="About_Text">This is my personal site.</h3>
                <h3 id="About_Text">Feel free to check it out!</h3>
            </div>
        </div>
    )
};

export default TitlePage;