import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import UserName from "@/Workspace/Zad5/UserName";
import UserSurname from "@/Workspace/Zad5/UserSurname";
import InvitationCard from "@/Workspace/Zad7/InvitationCard";

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
  return (
    <View style={styles.container}>
        <InvitationCard
            date={inviteData.date}
            time={inviteData.time}
            location={inviteData.location}
            dressCode={inviteData.dressCode}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
