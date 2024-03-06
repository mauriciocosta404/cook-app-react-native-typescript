import { Pressable, Text, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "../ingredient";
import { useState } from "react";

export function Ingredients(){
    const [selected, setSelected] = useState<string[]>([]);  
    
    function handleToggleSelected(value : string){
        if(selected.includes(value)){
            return setSelected((state) =>  state.filter((item) => item !== value))
        }

        setSelected((state) => [...state, value]);
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            {
                Array.from({ length: 99 }).map((item, index)=>(
                    <Ingredient 
                        key={index} 
                        name="maçã" 
                        image="" 
                        selected 
                        onPress={()=>{handleToggleSelected(String(index))}}
                    />
                ))
            }
        </ScrollView>
    );
}