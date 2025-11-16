import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import UserName from "@/Workspace/Zad4/UserName";
import UserSurname from "@/Workspace/Zad4/UserSurname";
import LayoutWithBlocks from "@/Workspace/Zad6/LayoutWithBlocks";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
        <LayoutWithBlocks />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
