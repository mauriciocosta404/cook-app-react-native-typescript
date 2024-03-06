import Animated from "react-native-reanimated";
import { Props } from "./stypes";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons"

export function Selected({quantity, onClear, onSearch}:Props){
    return(
        <Animated.View>
            <View style={styles.header}>
                <Text style={styles.label}>
                    {quantity} Ingredientes selecionados
                    <MaterialIcons name="close" size={24} onPress={onClear}/>
                </Text>
            </View>
        </Animated.View>
    )
}