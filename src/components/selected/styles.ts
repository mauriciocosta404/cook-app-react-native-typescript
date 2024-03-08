import { theme } from "@/theme";
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.black,
        padding:24,
        borderRadius: theme.borderRadius.lg,
        position: "absolute",
        bottom:24,
        width:"100%",
        alignItems:"center"
    },
    header:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignContent: "center",
        marginBottom:34
    },
    label:{

    }
});