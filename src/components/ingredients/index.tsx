import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { Ingredient } from "../ingredient";
import { useState } from "react";
import { Selected } from "../selected";

export function Ingredients(){
    const [selected, setSelected] = useState<string[]>([]);  
    
    function handleToggleSelected(value : string){
        if(selected.includes(value)){
            return setSelected((state) =>  state.filter((item) => item !== value))
        }
        
        setSelected((state) => [...state, value]);
    }

    
    function handleClearSelected(){
        setSelected([]);
    }
    
    return(
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
                {
                    Array.from({ length: 99 }).map((item, index)=>(
                        <Ingredient 
                        key={index} 
                        name="maçã" 
                        image="" 
                        selected={selected.includes(String(index))}
                        onPress={()=>{handleToggleSelected(String(index))}}
                        />
                        ))
                    }
                <Selected quantity={selected.length} onClear={handleClearSelected} onSearch={() =>{}}/>
            </ScrollView>
            
    );
}