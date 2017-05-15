import React from 'react';

class QuestionComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form role="form">
        <div className="row setup-content" id="step-1">
          <div className="col-xs-12">
            <div className="col-md-12">
              <h3> Step {this.props.data.id}</h3>
              <div className="form-group">
                <label className="control-label">{this.props.data.question}</label>
                <input  maxLength="100" type="text" required="required" className="form-control" placeholder="Enter First Name"  />
              </div>
              <button onClick={() => this.props.onClick()} className="btn btn-primary nextBtn btn-lg pull-right" type="button" >Next</button>
            </div>
          </div>
        </div>
      </form>
    );
  }

}

export default QuestionComponent;
