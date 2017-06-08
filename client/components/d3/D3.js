import React, { Component } from 'react';
import BarChart from './BarChart';

class D3 extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[1000, 400, 232, 200, 233, 120, 78, 100, 400, 232, 200, 233, 120, 78]
        }
    }

    render() {
        return (
            <div className="App">
                <BarChart data={this.state.data} />
            </div>
        );
    }
}

export default D3;