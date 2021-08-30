import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from '../constants/colors';

const CircularProgress = (props) => {
    return (
        <AnimatedCircularProgress
            size={200}
            width={5}
            fill={props.fill*10}
            tintColor={Colors.red}
            backgroundColor={Colors.black}
        >
            {
                (fill) => (
                <Text style={styles.fillText}>
                    { props.fill }
                </Text>
                )
            }
        </AnimatedCircularProgress>
    )
}

const styles = StyleSheet.create({
    fillText: {
        fontSize: 48,
        fontWeight: '400',
    },
})

export default CircularProgress;