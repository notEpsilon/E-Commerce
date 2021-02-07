import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, CreateUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords Don't Match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await CreateUserProfileDocument(user, { displayName });
            this.setState({displayName: '', email: '', password: '', confirmPassword: ''});
        }
        catch (err) {
            alert('Error Signing Up', err.message);
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">Don't Have an Account ?</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" handleChange={this.handleChange} value={this.state.displayName} label="Display Name" required />
                    <FormInput type="email" name="email" handleChange={this.handleChange} value={this.state.email} label="Email" required />
                    <FormInput type="password" name="password" handleChange={this.handleChange} value={this.state.password} label="Password" required />
                    <FormInput type="password" name="confirmPassword" handleChange={this.handleChange} value={this.state.confirmPassword} label="Confirm Password" required />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
};