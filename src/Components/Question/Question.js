import React from 'react';
/**
 * Renders a challenge question to the screen
 */
export default class Question extends React.Component {
    
    
    static defaultProps = {
        question: {},
    };

    state = {
        inputs: [],
        answer: this.props.question.answer
    }

    //Stores input in state
    setInput = (input, idx) => {
        const inputs = [...this.state.inputs];
        inputs[idx] = input;
        this.setState({
            inputs: inputs,
        })
    }

    //Loads a preset answer for a question
    usePreset = (e, preset) => {
        e.preventDefault();
        this.setState({
            inputs: preset.inputs,
        });
    }

    //Runs the answer function for a question and stores the answer
    callFunction = (e) => {
        e.preventDefault();
        this.setState({
            answer: this.props.question.callback(...this.state.inputs),
        });
    }

    //Renders question inputs
    renderInputField = (field, idx) => {
        return (
            <div key={idx} className='row'>
                <label className='cell' htmlFor={`${field}-input`}>{`${field}:`}</label>
                <input className='cell' id={`${field}-input`} 
                onChange={(e) => this.setInput(e.currentTarget.value, idx)} 
                defaultValue={this.state.inputs[idx]}
                required/>
            </div>
        );
    }

    //Renders buttons to load preset tests
    renderPresetButton = (preset, idx) => {
        const {name} = preset;
        return (
            <button key={idx} onClick={(e) => this.usePreset(e, preset)}>{name}</button>
        );
    }

    //Renders input form
    renderInputForm = (fields) => {
        return (
            <form className='flex-container' onSubmit={(e) => this.callFunction(e)}>
                <div className='table-container'>
                    {fields.map((field, idx) => this.renderInputField(field, idx))}
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }

    render() {
        const {question, fields, presets} = this.props.question;
        const {answer} = this.state;
        return (
            <div className='flex-container'>
                {/** Question Box*/}
                <div className='text-box'>
                    <h2>Question</h2>
                    {question}
                </div>
                {/** Input Form */}
                {fields && this.renderInputForm(fields)}
                {/** Answer Box */}
                <div className='text-box'>
                    <h2>Answer</h2>
                    {answer}
                </div>
                {/** Preset Test Buttons */}
                {presets && presets.map((preset, idx) => this.renderPresetButton(preset, idx))}
            </div>
        );
    }
}