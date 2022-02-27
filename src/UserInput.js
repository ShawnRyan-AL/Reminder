import React, {Component} from 'react';
import ListItem from './ListItem';
import './App.css';

class UserInput extends Component {
    state = {
        inputText: '',
    }
    
    update = (event) => {
        this.setState({inputText: event.target.value});
    }

    OnAddButtonClick = () => {
        const { inputText } = this.state;
        this.props.OnAddButtonClick(inputText);
        this.setState({inputText: ''})
    }
    
    render() {
        const { inputText } = this.state;
        console.log(this.props)
        console.log('event: ', inputText);
        return (
            <div>
                <button className="Button" type="button" onClick={this.OnAddButtonClick} disabled={!inputText}>
                    Add
                </button>
                <input className="UserInputField" type="text" onChange={this.update} value={inputText}/>
            </div>
        );
    }
}

export default UserInput;
