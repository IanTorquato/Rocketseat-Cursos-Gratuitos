import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Product from './pages/Product'

const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#da552f' },
        headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
        headerTintColor: '#fff',
        headerTitleAlign: 'center'
      }}>
        <AppStack.Screen name="Home" component={Home} options={{ headerTitle: 'JSHunt' }} />
        <AppStack.Screen name="Product" component={Product} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
