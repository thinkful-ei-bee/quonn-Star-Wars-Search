import React, {Component} from "react";
import "./InputBox.css";
import ValidationError from "../ValidationError/ValidationError";

class InputBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            props: this.props,
            inputBox: this.nameInput,
            searchValid: false,
            formValid: false,
            validationMessages: {
                searchBox: ''
            },
            searchTerm: ''
        }
        this.validateName = this
            .validateName
            .bind(this);
    }

    formValid() {
        this.setState({formValid: this.state.nameValid});
    }

    validateName(e, fieldValue) {
        this
            .state
            .props
            .onClick(e);
        const fieldErrors = {
            ...this.state.validationMessages
        };
        let hasError = false;

        fieldValue = fieldValue.trim();

        if (fieldValue.length === 0) {
            fieldErrors.searchBox = 'Input is required';
            hasError = true;
        } else {
            fieldErrors.searchBox = '';
            hasError = false;
        }

        this.setState({
            validationMessages: fieldErrors,
            searchValid: !hasError
        }, this.formValid);

    }

    render() {
        const loading = this.props.loading
        return <div>
            <input
                type="text"
                onChange={this.props.onChange}
                placeholder="Enter Search Term"
                ref={this.props.ref}
                value={this.props.value}/>
            <button
                type="submit"
                onClick={(e) => this.validateName(e, this.props.value)}
                disabled={loading}>SUBMIT</button>
            <ValidationError
                hasError={!this.state.nameValid}
                message={this.state.validationMessages.searchBox}/>
        </div>
    }
}

export default InputBox;