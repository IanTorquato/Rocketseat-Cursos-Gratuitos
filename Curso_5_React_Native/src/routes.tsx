import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Details from './pages/Details'

const AppStack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
                headerStyle: { backgroundColor: '#d9040f' },
                headerTitleStyle: { fontWeight: 'bold', fontSize: 24 }
            }}>
                <AppStack.Screen name="Home" component={Home}
                    options={{
                        headerTintColor: '#fff',
                        headerTitle: 'JSHunt',
                        headerTitleAlign: 'center'
                    }} />
                <AppStack.Screen name="Details" component={Details} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes