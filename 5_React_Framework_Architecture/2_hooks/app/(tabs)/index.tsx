import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import UserName from "@/Workspace/Zad5/UserName";
import UserSurname from "@/Workspace/Zad5/UserSurname";
import InvitationCard from "@/Workspace/Zad7/InvitationCard";
import DataTimer from "@/Workspace/Zad8/DataTimer";

export interface InviteData {
    date: string;
    time: string;
    location: string;
    dressCode: string;
}

const inviteData: InviteData = {
    date: "12 czerwca 2025",
    time: "18:00",
    location: "Warszawa, ul. Kwiatowa 15",
    dressCode: "Elegancki / Smart Casual",
};

export default function TabOneScreen() {
    const initialDateTime = new Date().toLocaleString();

  return (
    <View style={styles.container}>
        <DataTimer currentTime={initialDateTime} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
