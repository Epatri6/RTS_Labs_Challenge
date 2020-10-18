import React from 'react';
import Question from '../Question/Question';
import QuestionBar from '../Question_Bar/QuestionBar';
/**
 * Shows default page or current question
 */
export default class App extends React.Component {

    state = {
        question: {},
    };

    //Changes question presented
    changeQuestion = (question) => {
        this.setState({question});
    }

    render() {
        const {question} = this.state;
        return (
            <div className='wrapper flex-container'>
                <h1>RTS Labs Challenge Questions</h1>
                <QuestionBar changeQuestion={this.changeQuestion}/>
                {question.question && <Question key={question.question} question={question}/>}
            </div>
        );
    }
}