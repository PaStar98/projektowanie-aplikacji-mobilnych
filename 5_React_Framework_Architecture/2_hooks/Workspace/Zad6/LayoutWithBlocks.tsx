import React from 'react';
import { View, StyleSheet } from 'react-native';
import ColorBlock from './ColorBlock';

const LayoutWithBlocks = () => {
    return (
        <View style={styles.container}>
            <ColorBlock color="red" size={80} />
            <ColorBlock color="green" size={80} />
            <ColorBlock color="blue" size={80} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
    },
});

export default LayoutWithBlocks;
