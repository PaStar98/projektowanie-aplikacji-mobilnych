import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import MapImage from "@/Workspace/MapImage";
import StyledPizzaText from "@/Workspace/StyledPizzaText";
import FlexLayoutExample from "@/Workspace/FlexLayoutEx";

export default function TabOneScreen() {
  return (
    <FlexLayoutExample />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
