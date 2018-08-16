import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common'
import Constans from './Constants'
import LoginForm from './components/LoginForm'

class App extends Component {

    state = {loggedIn: null};

    static onLogOutButtonClicked() {
        firebase.auth().signOut();
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: Constans.apiKey,
            authDomain: Constans.authDomain,
            databaseURL: Constans.databaseURL,
            projectId: Constans.projectId,
            storageBucket: Constans.storageBucket,
            messagingSenderId: Constans.messagingSenderId
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: {
                return (
                    <Button
                        whenClicked={App.onLogOutButtonClicked.bind(this)}>
                        Log Out
                    </Button>
                );
            }
            case false: {
                return <LoginForm/>;
            }
            default: {
                return (
                    <View style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                        <Spinner spinnerSize={"large"}/>
                    </View>
                );
            }
        }
    }

    render() {
        return (
            <View style={{height: 100}}>
                <Header headerText={'Firebase Authentication'}/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;