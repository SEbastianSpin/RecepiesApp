import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

function CategoriesScreens({navigation}){
   
   


   function renderCategories(itemData){

    function MovetoMeal(){
        navigation.navigate("Meals",{mealId:itemData.item.id});
    }
    return  <CategoryGridTitle 
    title={itemData.item.title}
    color={itemData.item.color}
    MealClicked={MovetoMeal}
    ></CategoryGridTitle>
   
   }   
            
 return(
  <FlatList
   data={CATEGORIES}
   
    numColumns={2}
    keyExtractor={(i)=>i.id}
    renderItem={renderCategories}

    />
 );

}

 export default CategoriesScreens;