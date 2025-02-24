import { SafeAreaView, StyleSheet, View, Button } from "react-native";
import FormTextField from '../../components/FormTextField';
import { useState } from "react";



export default function (){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(){
        
        console.log("email : ",email,"password : ",password);

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <FormTextField label='Email :' value={email} onChangeText={alert('ok')} />
                <FormTextField label='Password :' secureTextEntry={false} value={password} onChangeText={(text)=>setPassword(text)}/>
                    <Button title='Se connecter' onPress={handleLogin}/>
            </View>
        </SafeAreaView>
    );


}

const styles = StyleSheet.create({
    wrapper:{padding:20, rowGap:16},
    container:{ backgroundColor:'#fff',flex:1}
})


