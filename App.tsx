import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './src/routes/root-navigation';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/routes/bottom-navigation';

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
