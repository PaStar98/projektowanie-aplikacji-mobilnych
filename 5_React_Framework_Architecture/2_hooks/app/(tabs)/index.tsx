import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import MapImage from "@/Workspace/MapImage";
import StyledPizzaText from "@/Workspace/StyledPizzaText";

export default function TabOneScreen() {
  return (
    <StyledPizzaText />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
