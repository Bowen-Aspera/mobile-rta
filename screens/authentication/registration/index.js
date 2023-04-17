import { useState } from "react"
import { StyleSheet, Button, TextInput, Text, View, Alert } from "react-native"
import axios from '../../../plugins/axios';
import InputField from "../../../components/InputField"
const Registration = () =>{
    const [data, onChangeData] = useState(
    {
        "email": "",
        "username": "",
        "password": "",
        "first_name": "",
        "last_name": "",
    }
    )
      return (
        <>
        
            <View style={style.container}>
                <InputField label ="Email" placeholder="Your Email" value={data.email} onChangeText={(email) =>{
                    onChangeData ({
                        ...data,
                        'email' : email
                    })
                }} />
                <InputField label ="Username" placeholder="Your Username" value={data.username} onChangeText={(username) =>{
                    onChangeData ({
                        ...data,
                        'username' : username
                    })
                }} />
                <InputField label ="Password" placeholder="Your Password" value={data.password} onChangeText={(password) =>{
                    onChangeData ({
                        ...data,
                        'password' : password
                    })
                }} />
                <InputField label ="First Name" placeholder="Your Last Name" value={data.first_name} onChangeText={(firstname) =>{
                    onChangeData ({
                        ...data,
                        'first_name' : firstname
                    })
                }} />
                <InputField label ="Last Name" placeholder="Your Last Name" value={data.last_name} onChangeText={(lastname) =>{
                    onChangeData ({
                        ...data,
                        'last_name' : lastname
                    })
                }} />
            </View>
            <View style={{paddingTop: 20}}>
                <Button title="submit" onPress={()=>{
                    axios.post('accounts/users/',data).then(response=>{
                        console.log(response.data)
                        Alert.alert("SUCCESSFULLY REGISTERED!")
                    }).catch(error=>{
                        console.log(error.response.data)
                    })
                }}/>
            </View>
        </>
      )
}
export default Registration;

const style = StyleSheet.create({
    inputFields: {
         borderColor: 'black',
         borderWidth: 1,
         padding: 2,

    },
    container:{
        paddingHorizontal: 20,
        paddingVertical: 30
    }
})
