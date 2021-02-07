import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { SignInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    };

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" id="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput name="password" type="password" id="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <div className="buttons">
                        <CustomButton type="submit">Submit Form</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
};