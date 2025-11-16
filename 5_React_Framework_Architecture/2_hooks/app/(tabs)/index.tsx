import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import UserName from "@/Workspace/Zad5/UserName";
import UserSurname from "@/Workspace/Zad5/UserSurname";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <UserName name="Patryk" />
        <UserSurname surname="Startek" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
