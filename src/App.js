import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common'
import Constans from './Constants'

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
                <Text>
                    Application
                </Text>
            </View>
        );
    }
}

export default App;