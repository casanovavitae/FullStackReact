import React  from 'react';
import Range  from './RangeComponent';
import Output from './OutputComponent';

class CalculatorComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      height:170,
      weight:65,
      bmi: 22.49,
      bmiClass: 'Normal'
    }
  }

  heightChange(height){
    this.setState({height:height},function(){
      console.log(this.state);
    });
  }

  render() {

    return (
      <div>
        <h1>BMI CALCULATOR</h1>
        <form>
          <div>
            <label>Height</label>
            <Range value={this.state.height} onChange={this.heightChange.bind(this)}/>
          </div>
          <div>
            <label>weight</label>
          </div>
        </form>
        <Output/>
      </div>

    );
  }
}

export default CalculatorComponent;

