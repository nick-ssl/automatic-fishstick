import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import UpdateScreen from "./screens/Updates";
const Stack=createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      
                               <Stack.Screen
                               name="IssLocation"component={IssLocation}
                               />
                               <Stack.Screen
                               name="Meteors"component={Meteors}
                               />
                               <Stack.Screen
                               name="HomeScreen"component={HomeScreen}
                               />
                               </Stack.Navigator>
    </NavigationContainer>
  );
}

