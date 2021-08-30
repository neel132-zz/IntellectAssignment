import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';
import { Colors } from '../../constants/colors';

const WidgetTwo = () => {
    const [ scale, setScale ] = useState(0);
    const { width } = useWindowDimensions();
    const data = [
        {
            width: width*0.15,
        },
        {
            width: width*0.3,
        },
        {
            width: width*0.45,
        },
        {
            width: width*0.6,
        },
        {
            width: width*0.75,
        },
    ]
    const keyExtractor = (_, index) => String(index);
    const renderItem = ({ item, index }) => {
        const borderTopColor = scale >= index ? Colors.red : Colors.black
        return (
            <TouchableOpacity onPress={() => setScale(index)} style={styles.container}>
                <View style={[styles.itemContainer, { ...item, borderTopColor }]} />
            </TouchableOpacity>
        )
    };
    return (
        <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            extraData={scale}
            inverted
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: 70,
        overflow: 'hidden',
    },
    itemContainer: {
        borderRadius: 20,
        borderTopWidth: 70,
        borderLeftColor: "transparent",
        borderLeftWidth: 20,
        borderRightColor: "transparent",
        borderRightWidth: 20,
        borderBottomColor: "transparent",
        borderBottomWidth: 20,
    },
})

export default WidgetTwo;