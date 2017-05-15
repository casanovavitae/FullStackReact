import React from 'react';
import About from './parts/About';
import Resume from './parts/Resume';
import Portfolio from './parts/Portfolio';
import Testimonials from './parts/Testimonials';
import Contact from './parts/Contact';
import Footer from './parts/Footer';

class ResumeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="jumbotron">
              <About/>
  		        <Resume/>
  		        <Portfolio/>
  		        <Testimonials/>
  		        <Contact/>
  		        <Footer/>
            </div>
        );
    }

}

export default ResumeComponent;
