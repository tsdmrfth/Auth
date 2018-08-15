import React, {Component} from 'react';
import {Alert} from 'react-native';
import firebase from 'firebase';
import {Button, Card, CardSection, Input, Spinner} from "./common";

class LoginForm extends Component {

    state = {email: '', password: '', isLoading: false};

    onLoginButtonClicked() {
        this.setState({isLoading: true});

        const {email, password} = this.state;

        let auth = firebase.auth();

        auth.signInWithEmailAndPassword(email.trim(), password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                auth.createUserWithEmailAndPassword(email.trim(), password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch((error) => {
                        this.showDialog('Authentication Failed!', error.toString().replace('Error:', ' '))
                    });
            });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            isLoading: false
        });
    }

    showDialog(title, message) {
        this.setState({isLoading: false});
        Alert.alert(title, message)
    }

    renderButton() {
        if (this.state.isLoading) {
            return <Spinner spinnerSize={'small'}/>;
        }

        return (
            <Button
                whenClicked={this.onLoginButtonClicked.bind(this)}>
                Log in
            </Button>
        );

    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={'Email'}
                        placeholder={'user@mail.com'}
                        value={this.state.email}
                        whenTextChanged={email => this.setState({email})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label={'Password'}
                        placeholder={'Password'}
                        value={this.state.password}
                        whenTextChanged={password => this.setState({password})}
                        isPassword
                    />
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm