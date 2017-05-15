import React from 'react';
import ProgressComponent from './ProgressComponent';
import QuestionComponent from './QuestionComponent';


class ResumeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      id:   '',
      name: '',
      count: 0,
      answers:  [
        {answer:'',active:true, question:'First Name',id:0},
        {answer:'',active:false,question:'City where you born',id:1},
        {answer:'',active:false,question:'Company Name',id:2},
        {answer:'',active:false,question:'Common Framework use',id:3}
      ],
      submitted: false
    }
  }
  handleClick(){

    var increment = this.state.count + 1;

    var answers = this.state.answers.map(function(response){
      var answer = {answer:null,active:null, question:null,id:null};
      answer.answer = response.answer;
      answer.question = response.question;
      answer.id = response.id;

      if(answer.id === increment){
        answer.active = true;
      }else{
        answer.active = false;
      }
      return answer;
    })

    var state ={
      count: increment,
      answers: answers
    }

    this.setState(state);

  }

  render() {

    return (
      <div className="container">
        <ProgressComponent
        data={this.state.answers}
        />
        <QuestionComponent
          onClick={() => this.handleClick()}
          data={this.state.answers[this.state.count]}
        />
      </div>
    );
  }

}

export default ResumeComponent;
