import { View ,Text,StyleSheet,Image, Pressable} from "react-native";


function MealItem({title,imageUrl,time,difficulty,price,moveToRecipe}){


    


return(
    <View>
    <Pressable onPress={moveToRecipe}  android_ripple={{color:"ccc"}}>

    
    <Image style={styles.img} source={{uri:imageUrl}}/>
    <Text style={styles.title}>
     {title}
    </Text>
    <View>
    <Text>
        {time} min
    </Text>
    <Text>
        {difficulty.toUpperCase()}
    </Text>
    <Text>
        {price.toUpperCase()}
    </Text>

    </View>
    </Pressable>
    </View>
);

}

export default MealItem;


const styles=StyleSheet.create({
    img:{
        width:"100%",
        height:50
    },
    title:{
        fontWeight:"bold",
        fontSize:20,
        
    }
})