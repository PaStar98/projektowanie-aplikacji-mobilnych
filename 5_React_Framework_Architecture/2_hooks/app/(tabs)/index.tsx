import { StyleSheet } from 'react-native';
import HooksExamples from '@/components/HooksExamples';
import { View } from '@/components/Themed';
import MapImage from "@/Workspace/MapImage";

export default function TabOneScreen() {
  return (
    <MapImage></MapImage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
