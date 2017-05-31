import React  from 'react';
import axios  from 'axios';
import Output from './Output';
import Select from '../Global/Select';
import Text from '../Global/Text';

class TextComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            paras: 4,
            html: true,
            text:''
        }
    }

    componentWillMount(){
        this.getText();
    }

    getText(){
        axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
            .then((response) => {
                this.setState({text: response.data.text}, function(){
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    changeParas(number){
        this.setState({paras: number}, this.getText);
    }

    showHtml(x){
        this.setState({html:x}, this.getText);
    }

    render(){
        return (
            <div className="container">
                <h1>DummyText Generator</h1>
                <Output value={this.state.text} />
                <h3>Real Time Options</h3>
                <form>
                    <div>
                        <label>Paragraphs: </label>
                        <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
                    </div>
                    <div>
                        <label>Include HTML: </label>
                        <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default TextComponent;
