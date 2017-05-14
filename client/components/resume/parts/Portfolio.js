import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
      	<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
		    <div className="panel panel-default">
		        
		        <div className="panel-heading" role="tab" id="heading1">
		            <h4 className="panel-title">
		                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1">
		                    Turner Launchpad
		                </a>
		            </h4>
		        </div>
		        <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
		            <div className="panel-body">
		                <p>conteudcon</p>
		            </div>
		        </div>

		        <div className="panel-heading" role="tab" id="heading2">
		            <h4 className="panel-title">
		                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse1">
		                    Lecet
		                </a>
		            </h4>
		        </div>
		        <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
		            <div className="panel-body">
		                <p>conteudcon</p>
		            </div>
		        </div>

		        <div className="panel-heading" role="tab" id="heading3">
		            <h4 className="panel-title">
		                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
		                    Academy
		                </a>
		            </h4>
		        </div>
		        <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
		            <div className="panel-body">
		                <p>content</p>
		            </div>
		        </div>


	        </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
