import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InvitationCardProps {
    date: string;
    time: string;
    location: string;
    dressCode: string;
}

// Destrukturyzacja w liście parametrów:
const InvitationCard: React.FC<InvitationCardProps> = ({
                                                           date,
                                                           time,
                                                           location,
                                                           dressCode,
                                                       }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Zaproszenie na Urodziny</Text>

            <Text style={styles.item}>Data: {date}</Text>
            <Text style={styles.item}>Godzina: {time}</Text>
            <Text style={styles.item}>Miejsce: {location}</Text>
            <Text style={styles.item}>Dress code: {dressCode}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 12,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "#ccc",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
    },
    item: {
        fontSize: 16,
        marginVertical: 4,
    },
});

export default InvitationCard;
