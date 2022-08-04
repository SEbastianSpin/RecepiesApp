import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreens from './screens/CategoriesScreens';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverview from './screens/MealOverview';
import Recipe from './screens/Recipe';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <>
        <StatusBar></StatusBar>
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={CategoriesScreens} />
        <Stack.Screen name="Meals" component={MealOverview} />
        <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
        </NavigationContainer>
        
      </>
      
   
  );
}


