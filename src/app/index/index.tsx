import { View, Text } from "react-native";
import { styles } from "./styles";
import { Ingredients } from "@/components/ingredients";

export default function Index(){    
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os productos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos productos que você escolheu.
            </Text>

            <Ingredients />
        </View>
    )
}