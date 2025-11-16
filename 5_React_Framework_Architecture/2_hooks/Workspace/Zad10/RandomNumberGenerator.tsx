import React from 'react';
import { Button, View } from 'react-native';

interface RandomNumberGeneratorProps {
    setNumber: (num: number) => void;
}

const RandomNumberGenerator: React.FC<RandomNumberGeneratorProps> = ({ setNumber }) => {
    const handlePress = () => {
        const random = Math.floor(Math.random() * 10) + 1;
        setNumber(random);
    };

    return (
        <View>
            <Button title="Generuj losową liczbę" onPress={handlePress} />
        </View>
    );
};

export default RandomNumberGenerator;
