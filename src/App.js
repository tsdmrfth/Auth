import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common'
import Constans from './Constants'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: Constans.apiKey,
            authDomain: Constans.authDomain,
            databaseURL: Constans.databaseURL,
            projectId: Constans.projectId,
            storageBucket: Constans.storageBucket,
            messagingSenderId: Constans.messagingSenderId
        });
    }

    render() {
        return (
            <View>
                <Header headerText={'Firebase Authentication'}/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;