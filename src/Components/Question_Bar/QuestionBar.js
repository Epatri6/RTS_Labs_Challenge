import React from 'react';
import questions from '../../Utils/utils';
/**
 * Displays a row of buttons for question navigation
 */
export default class QuestionBar extends React.Component {

    static defaultProps = {
        changeQuestion: () => {},
    };

    renderQuestionButtons = (question, idx) => {
        return (
            <button key={idx} onClick={() => this.props.changeQuestion(question)}>{`Question ${idx + 1}`}</button>
        );
    }

    render() {
        return (
            <div className='flex-container-row'>
                {questions.map((question, idx) => this.renderQuestionButtons(question, idx))}
            </div>
        );
    }
}