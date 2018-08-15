import React, {Component} from 'react';
import {Button, CardSection, Card, Input} from "./common";

class LoginForm extends Component {

    state = {email: '', password: ''};

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
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm