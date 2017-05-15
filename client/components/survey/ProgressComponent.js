import React from 'react';

class ProgressComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.data);
  }

  render() {
    return (
      <div className="stepwizard">
        <div className="stepwizard-row setup-panel">
          {this.props.data.map((response) => (

            <div key={response.id} className="stepwizard-step">
              <a href="#step-1"
              type="button"
              className={response.active === true ? 'btn btn-circle btn-primary':'btn btn-circle btn-default' }
              disabled={response.active === true ? '':'disable'}>{response.id}</a>
              <p>Step {response.id}</p>
            </div>

          ))}

        </div>
      </div>
    );
  }

}

export default ProgressComponent;
