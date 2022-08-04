import { Pressable, View ,Text,StyleSheet} from "react-native";

function CategoryGridTitle({title,color,MealClicked}){

return (
    <View style={[styles.gridItem ,{backgroundColor:color}]}>
        <Pressable android_ripple={{color:"ccc"}} style={styles.button} onPress={MealClicked}>
            <View style={styles.innerContainer}>
                <Text>
                 {title}
                </Text>
            </View>
        </Pressable>
    </View>
);
}

export default  CategoryGridTitle;


const styles =  StyleSheet.create({
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:12,
        elevation:4,
        overflow:"hidden"
    },
    button:{
        flex:1
    },
    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:"center",
        alignItems:"center",
    }
})