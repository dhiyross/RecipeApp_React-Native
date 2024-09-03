import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native-web";
import RecipesData from "../contants/RecipesData.json";
import ItemRecipe from "../components/ItemRecipe";

const RecipeListScreen = () => {
    const navigation = useNavigation();
    // console.log(RecipesData);
    return (
        <View style={styles.Screen}>
            <FlatList 
            data = {RecipesData.recipes}  //harus array datanya
            keyExtractor = {(item) => item.id.toString()}
            renderItem={({item}) =>(<ItemRecipe item={item}/>)}
            />
            {/* <Text>Recipe List Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
                <Text>Scan Recipe</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
    }
});

export default RecipeListScreen;