import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//dependências importadas para a parte de navegação do aplicativo 
import 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeCliente from './components/HomeCliente';
import HomeProfissional from './components/HomeProfissional';
import LoginScreen from './components/LoginScreen';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      {/* teste */}
      <Stack.Navigator>
      <Stack.Screen 
            name="Login"
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
          {/* Mudar o cliente para client em ingles*/}
          <Stack.Screen 
            name="cliente"  
            component={HomeCliente}
            options={{ title: 'Cliente' }}
          />
        <Stack.Screen 
            name="profissional"
            component={HomeProfissional}
            options={{ title: 'Profissional' }}
          />
      
      </Stack.Navigator>
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
