import React from "react";
import { RandomNumberGenerator } from '../utils/RandomNumberGenerator';

class AddManagerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            manager: {
                name: '',
                designation: ''
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const manager = {
            id: RandomNumberGenerator(),
            name: this.state.manager.name,
            designation: this.state.manager.designation
        };
        this.props.handleSubmit(manager);
    };
    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const manager = { ...this.state.manager,
          [key]: value
        };
        this.setState({
            manager: manager
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3> Add Manager </h3>
                <label> Name:
                    <input type='text' name='name' id='name'
                    value={this.state.manager.name}
                    onChange={this.handleChange}/>
                </label>
                <label> Designation:
                    <input type='text' name='designation' id='designation'
                    value={this.state.manager.designation}
                    onChange={this.handleChange}/>
                </label>
                <input type='submit'
                name='submit' id='submit'/>
            </form>
        );
    }
}

export default AddManagerForm;
