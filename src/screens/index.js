import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { navigationKeys } from '../../router';
const ChooseWidget = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Widget One" onPress={() => navigation.navigate(navigationKeys.widgetOne)} />
            <Button title="Widget Two" onPress={() => navigation.navigate(navigationKeys.widgetTwo)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ChooseWidget;