import React, { Component } from 'react';
import { Text } from 'react-native';

interface UserSurnameProps {
    surname: string;
}

class UserSurname extends Component<UserSurnameProps> {
    render() {
        return <Text style={{ fontSize: 20 }}>Nazwisko: {this.props.surname}</Text>;
    }
}

export default UserSurname;
