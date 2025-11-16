import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ColorBlockProps {
    color: string;
    size: number;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ color, size }) => {
    return (
        <View
            style={[
                styles.block,
                { backgroundColor: color, width: size, height: size }
            ]}
        />
    );
};

const styles = StyleSheet.create({
    block: {
        margin: 10,
    },
});

export default ColorBlock;
