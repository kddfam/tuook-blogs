import { Component } from "react";
import { Helmet } from "react-helmet";
import './css/contact.css';

class Contact extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formValue: {
                emailId: "",
                message: ""
            },
            formErrorMessage: {
                emailId: "",
                message: ""
            },
            formValid: {
                emailId: false,
                message: false,
                buttonActive: false
            },
            successMessage: "",
            errorMessage: ""
        }
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const { formValue } = this.state;
        this.setState({formValue: {...formValue, [name]: value}})
        this.validateField(name, value);
    }

    validateField = (fieldName, fieldValue) => {
        let formErrorMessage = this.state.formErrorMessage;
        let formValid = this.state.formValid;
        switch(fieldName) {
            case "emailId":
                const emailRegex = /^([A-z0-9+]+)(@)([A-z0-9]+)(.com)$/
                if(fieldValue === "") {
                    formErrorMessage.emailId = "Field Required";
                    formValid.emailId = false;
                }
                else if(!fieldValue.match(emailRegex)) {
                    formErrorMessage.emailId = "Invalid Email Format";
                    formValid.emailId = false;
                }
                else {
                    formErrorMessage.emailId = "";
                    formValid.emailId = true;
                }
                break;
            case "message":
                if(fieldValue === "") {
                    formErrorMessage.message = "Field Required";
                    formValid.message = false;
                }
                else if(fieldValue.length < 5 || fieldValue.length > 500) {
                    formErrorMessage.message = "Message Should be between 5 to 500 characters";
                    formValid.message = false;
                }
                else {
                    formErrorMessage.message = "";
                    formValid.message = true;
                }
                break;
            default: 
            break;    
        }
        formValid.buttonActive = formValid.emailId && formValid.message;
        this.setState({formErrorMessage: formErrorMessage, formValid: formValid, successMessage: ""})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.submitEnquiry();
    }

    submitEnquiry = () => {
        console.log(this.state.formValue.emailId+" "+this.state.formValue.message);
        this.props.history.push("/home");
    }

    render() {
        return(
            <div className="contact-form">
                <Helmet>
                    <title>Contact Us</title>
                </Helmet>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="emailId">Email ID</label><br />
                        <input
                            id="emailId"
                            type="email"
                            name="emailId"
                            placeholder="Enter Email ID"
                            value={this.state.formValue.emailId}
                            onChange={this.handleChange}
                        />
                        <span name="emailIdError">{this.state.formErrorMessage.emailId}</span>
                    </div>
                    <div className="field">
                        <label htmlFor="emailId">Message</label><br/>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your message"
                            value={this.state.formValue.message}
                            onChange={this.handleChange}
                        />
                        <span name="messageError">{this.state.formErrorMessage.message}</span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={!this.state.formValid.buttonActive}
                        >Submit</button>
                    </div>
                </form>
            </div>
        );
    }

}
export default Contact;