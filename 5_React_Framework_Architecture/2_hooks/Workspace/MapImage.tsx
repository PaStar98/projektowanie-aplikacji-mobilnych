import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const MapImage = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Wojewodztwa.svg/960px-Wojewodztwa.svg.png'
                }}
                style={styles.image}
                accessible={true}
                accessibilityLabel="Mapa Polski"
                resizeMode="cover"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 4,
        backgroundColor: '#eee',
    },
});

export default MapImage;
