import { Component } from "react";


class Form extends Component {
    initialState = {
        name: "",
        job: ""
    }

    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: [value] });
    }
    submitForm = () => {
        let character = this.state;
        this.props.handleSubmit(character)
        this.setState(this.initialState);
    }
    render() {
        return (
            <form>
                <label htmlFor="name">NAME</label>
                <input type="text" name="name" id="name" value={this.state.name} placeholder="enter your name" onChange={this.handleChange} />
                <label htmlFor="job">JOB</label><br />
                <input type="text" name="job" id="job" value={this.state.job} placeholder="enter your job" onChange={this.handleChange} />
                <input type="button" id="btn" value="submit" onClick={this.submitForm} />
            </form>
        )
    }
}
export default Form;