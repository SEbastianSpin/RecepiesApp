import { View ,Text,Image,StyleSheet} from "react-native";

import { MEALS } from "../data/dummy-data";

function Recipe({route}){

    const selectecMeal= MEALS.find(meal=>{
        return  route.params.mealid==meal.id
    })

    return (
        <View>
        <Image style={styles.img} source={{uri:selectecMeal.imageUrl}}/>
        
            <Text>
               {selectecMeal.title}
            </Text>
            <Text>Ingridients</Text>
                {selectecMeal.ingredients.map(meal=>
                    <Text key={meal}>
                    {meal}
                    </Text>
                )}
            <Text>Steps</Text>
                {selectecMeal.steps.map(
                    step=> <Text key={step}> {step}</Text>
                )}
        </View>
    );

}

 export  default Recipe;

 

const styles=StyleSheet.create({
    img:{
        width:"100%",
        height:250
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        
    }
})