import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom';
import Navbar from './global/NavbarComponent';
import Home from './home/home';
import Main from './main/main';
import LikeComponent from './like/LikeComponent';
import ResumeComponent from './resume/ResumeComponent';
import SurveyComponent from './survey/SurveyComponent';
import CalculatorComponent from './calculator/CalculatorComponent';
import TextComponent from './text/TextComponent';
import Contacts from './contacts/Contacts';



const tilesData = [
    {
        id: 1,
        img: 'https://dl.dropboxusercontent.com/s/ngctr4ps3370kml/twiiter-like.png',
        title: 'Like',
        author: 'jill111',
        path: 'Like',
    },
    {
        id: 2,
        img: 'images/grid-list/burger-827309_640.jpg',
        title: 'Survey',
        author: 'pashminu',
        path: 'Survey',
    },
    {
        id: 3,
        img: 'images/grid-list/camera-813814_640.jpg',
        title: 'Calculator',
        author: 'Danson67',
        path: 'Calculator',
    },
    {
        id: 4,
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Morning',
        author: 'fancycrave1',
        path: 'Like',
    },
    {
        id: 5,
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Text',
        author: 'fancycrave1',
        path: 'Text',
    },
    {
        id: 6,
        img: 'images/grid-list/morning-819362_640.jpg',
        title: 'Contacts',
        author: 'fancycrave1',
        path: 'Contacts',
    }

];

class ClientComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <Router>
                    <div>
                    <Navbar dataList={tilesData}/>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/main" component={Main}/>
                        <Route path="/Like" component={LikeComponent}/>
                        <Route path="/Resume" component={ResumeComponent}/>
                        <Route path="/Survey" component={SurveyComponent}/>
                        <Route path="/Calculator" component={CalculatorComponent}/>
                        <Route path="/Text" component={TextComponent}/>
                        <Route path="/Contacts" component={Contacts}/>
                    </div>
                </Router>
            </div>

        );
    }

}

export default ClientComponent;
