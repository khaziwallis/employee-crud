import React from "react";
import { RandomNumberGenerator } from '../utils/RandomNumberGenerator';

class AddEmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {
                name: '',
                designation: ''
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const employee = {
            id: RandomNumberGenerator(),
            name: this.state.employee.name,
            designation: this.state.employee.designation
        };
        this.props.handleSubmit(employee);
    };
    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        const employee = { ...this.state.employee,
          [key]: value
        };
        this.setState({
          employee: employee
        });
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3> Add Employee </h3>
                <label> Name:
                    <input type='text' name='name' id='name'
                    value={this.state.employee.name}
                    onChange={this.handleChange}/>
                </label>
                <label> Designation:
                    <input type='text' name='designation' id='designation'
                    value={this.state.employee.designation}
                    onChange={this.handleChange}/>
                </label>
                <input type='submit'
                name='submit' id='submit'/>
            </form>
        );
    }
}

export default AddEmployeeForm;
