import React from 'react';
import Slider from '@react-native-community/slider';
import { Colors } from '../constants/colors';

const SliderComponent = (props) => (
    <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={10}
        value={0}
        step={1}
        onValueChange={props.onValueChange}
        minimumTrackTintColor={Colors.red}
        maximumTrackTintColor={Colors.black}
    />
)

export default SliderComponent;