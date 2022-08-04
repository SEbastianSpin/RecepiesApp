import { View ,Text,StyleSheet,FlatList} from "react-native";
import { MEALS,CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem"
import { useEffect } from "react";

function MealOverview({route,navigation}){
 const mealId=route.params.mealId;

 const DisplayedMeals=MEALS.filter(
    (meal)=>{
    return meal.categoryIds.indexOf(mealId)>=0;
 }
 );

 useEffect(()=>{
    let categoryTitle=CATEGORIES.find(cat=>{
      return  cat.id===mealId
    }).title

    navigation.setOptions({
        title:categoryTitle
    })
  },[mealId,navigation]);



return (
    <View style={styles.container}>
       

        <FlatList
        data={DisplayedMeals}
        keyExtractor={(item)=>item.id}
        renderItem={
            (itemData)=>{
                return <MealItem
                 title={itemData.item.title}
                  imageUrl={itemData.item.imageUrl}
                  time={itemData.item.duration}
                  difficulty={itemData.item.complexity}
                  price={itemData.item.affordability}
                  moveToRecipe={
                    ()=>navigation.navigate("Recipe",{mealid:itemData.item.id})
                  }
                  />


            }
        }  
          />

    </View>
);
}

 export default MealOverview;

 const styles= StyleSheet.create({
    container:{
        flex:1,
        padding:16,

    }
 })