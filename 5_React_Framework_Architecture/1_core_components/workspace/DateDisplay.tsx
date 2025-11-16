import React from 'react';
import {Text} from "react-native";

const DateDisplay = () => {
    const date = new Date().toLocaleDateString();
    return <Text>{date}</Text>;
};

export default DateDisplay;