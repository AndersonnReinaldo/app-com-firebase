import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import  {Login}  from '../Screens/Login';
import  {DashBoard} from '../Screens/DashBoard';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen
       name="DashBoard"
        component={DashBoard} 
         options={{
          headerShown:false         
          
          }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

