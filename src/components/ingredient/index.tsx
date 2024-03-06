import { Pressable, Text, Image, PressableProps } from "react-native";
import { styles } from "./styles";
import { IngredientProps } from "./stypes";

export function Ingredient({name, image, selected = false, ...rest}: IngredientProps & PressableProps){
    return(
        <Pressable style={styles.container} {...rest}>
            <Image source={require("@/assets/apple.png")} style={styles.image} />
            <Text style={styles.title}>Maçã</Text>
        </Pressable>
    );
}