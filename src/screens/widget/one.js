import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CircularProgress from '../../components/CirclularProgress';
import SliderComponent from '../../components/Slider';

const WidgetOne = () => {
    const [ value, setValue ] = useState(0);
    const onValueChange = (val) => {
        setValue(val);
    }
    return (
        <View style={styles.container}>
            <View style={[styles.innerContainer, styles.centerContainer]}>
                <CircularProgress fill={value} />
            </View>
            <View style={styles.innerContainer}>
                <SliderComponent onValueChange={onValueChange} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
    },
    innerContainer: {
        flex: 0.5,
    },
    centerContainer: {
        justifyContent: 'center',
    }
})

export default WidgetOne;