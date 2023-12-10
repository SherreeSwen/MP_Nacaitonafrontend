import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import globalstyles from './src/config/Styles';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/components/main';
import Login from './src/components/login';
import Register from './src/components/register';
import Recover from './src/components/recover';
import Homepage from './src/components/homepage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen options={{headerShown: false}} name='Home' component={Main} />
            <Stack.Screen options={{headerShown: false}} name='Login' component={Login} />
            <Stack.Screen options={{headerShown: false}} name='Register' component={Register} />
            <Stack.Screen options={{headerShown: false}} name='Recovery' component={Recover} />
            <Stack.Screen options={{headerShown: false}} name='HomePage' component={Homepage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create(globalstyles);