import { StyleSheet, View, Pressable, Text } from "react-native";
//Nome probs é opcional poderia ser ButtonProbs
type Probs = {
    label: string;
};

export default function Button({label}:Probs){
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert("Você clicou")}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:320,
        height:68,
        marginHorizontal:20,
        alignItems:"center",
        justifyContent:"center",
        padding: 3,
    },
    button:{
        borderRadius:10,
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
    },
    buttonLabel:{
        color: "#FFF",
        fontSize:16,
    },
});
