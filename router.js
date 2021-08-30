import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseWidget from './src/screens';
import WidgetOne from './src/screens/widget/one';
import WidgetTwo from './src/screens/widget/two';

const Stack = createStackNavigator();

export const navigationKeys = {
    index: 'Home',
    widgetOne: 'Widget One',
    widgetTwo: 'Widget Two',
}

export default function MainScreens() {
    const { index, widgetOne, widgetTwo } = navigationKeys;
    return (
        <Stack.Navigator>
            <Stack.Screen name={index} component={ChooseWidget} />
            <Stack.Screen name={widgetOne} component={WidgetOne} />
            <Stack.Screen name={widgetTwo} component={WidgetTwo} />
        </Stack.Navigator>
    );
}