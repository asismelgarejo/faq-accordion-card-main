import React from 'react';
import './assets/styles/App.scss';
import FloatedCube from './assets/images/illustration-box-desktop.svg';
import Arrow from './assets/images/icon-arrow-down.svg';

class App extends React.Component{
  state = {
    questions: [
      {
        folded: false,
        question: "How many team members can I invite?",
        answer: "Donec vulputate consequat euismod. Vestibulum ligula orci, commodo eget mi in, maximus aliquam massa. Donec."
      },
      {
        folded: false,
        question: "What is the maximum file upload size?",
        answer: "Donec vulputate consequat euismod. Vestibulum ligula orci, commodo eget mi in, maximus aliquam massa. Donec."
      },
      {
        folded: false,
        question: "How do I reset my password?",
        answer: "Donec vulputate consequat euismod. Vestibulum ligula orci, commodo eget mi in, maximus aliquam massa. Donec."
      },
      {
        folded: false,
        question: "Can I cancel my subscription?",
        answer: "Donec vulputate consequat euismod. Vestibulum ligula orci, commodo eget mi in, maximus aliquam massa. Donec."
      },
      {
        folded: false,
        question: "Do you provide additional support?",
        answer: "Donec vulputate consequat euismod. Vestibulum ligula orci, commodo eget mi in, maximus aliquam massa. Donec."
      },
    ]
  }

  onFold = (i) =>()=>{
    const questions = [...this.state.questions].map((q, index)=>{
      if(index===i){
        q.folded = q.folded ? false: true;
        return q;
      }else{
        return q;
      }
    })
    this.setState({
      questions
    })
  }

  render(){
      return (
    <div id="container">
      <article className="card">
        <figure className="card__background"><img src={FloatedCube} alt="background"/></figure>
        <div className="card__questions">
          <h1>faq</h1>
          <dl>
            {
              this.state.questions.map(({question, answer, folded}, i)=>(
              <div key={i}>
                <dt onClick={this.onFold(i)} className={folded? "bold": ""}>{question}<img className={folded? "arrow-icon rotate": "arrow-icon"} src={Arrow} alt="arrow icon"/></dt>
                <dd className={folded? "folded": ""}>
                  <p>{answer}</p>
                </dd>
              </div>
              ))
            }
          </dl>
        </div>
      </article>
    </div>
  );
  }
}

export default App;
