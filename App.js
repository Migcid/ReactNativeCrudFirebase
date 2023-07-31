import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// para que createNativeStackNavigator funcione debo crear una const

const Stack = createNativeStackNavigator()


// para tener mas orden en la app crear una funcion aparte llamada myStack para que contenga las multiples pantallas del NavigationContainer


function myStack(){
  return (

  )

}
export default function App() {
  return (
    <NavigationContainer>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
