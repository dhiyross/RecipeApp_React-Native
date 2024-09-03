import React from "react";
import { View, Text, StyleSheet } from "react-native-web";

const SavedListScreen = () => {
    return (
        <View style={styles.Screen}>
            <Text>Saved List Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SavedListScreen;