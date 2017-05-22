import React from 'react';

class RangeComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      value:160
    }
  }

  /*static defaultProps = {
    min: 0,
    max: 245,
    step: 1
  }*/

  onChange(event){
    console.log(event.target.value);
    var state = {
        value: event.target.value
    }
    this.props.onChange(this.state.value);
    this.setState(state);

  }

  render() {

    return (
      <div className="range">
        <input
          type="range"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.onChange.bind(this)}
          />
      </div>

    );
  }
}

export default RangeComponent;

