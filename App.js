import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './Screens/Onboarding/Screen1';
import Screen2 from './Screens/Onboarding/Screen2';
import Screen3 from './Screens/Onboarding/Screen3';

export default function App() {
  return (
    <View style={styles.container}>
      < Screen3 />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
