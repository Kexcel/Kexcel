import React from "react";
import {View,Button,Text,TouchableOpacity,ScrollView,TextInput,StyleSheet} from 'react-native'

// const Home = ({navigation}) => (
    
// )
const style = StyleSheet.create({
    textInput:{
        backgroundColor:"white",
        shadowColor:"gray",
        elevation:5,
        borderRadius:10,
        margin:10,
        width:'90%',
        paddingHorizontal:"5%",
        color:'black'
    },
    container:{
        alignItems:'center',
        
        paddingTop: 300,
        backgroundColor:'gray',
        margin: 10,
        width:'90%',
        borderRadius:10
    },
    main_container:{
        flexDirection:'column',
        alignItems:'center',
        height:'100%'
    },
    login:{
        backgroundColor:"white",
        shadowColor:"gray",
        elevation:5,
        borderRadius:10,
        margin:10,
        width:'90%',
        paddingHorizontal:"5%",
        color:'black',
        padding:15,
        alignItems:'center'
    },
    login_text:{
        fontSize:15,
    }
})

class LoginScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {...props}
    }
    render(){
        console.log("Desctription",this.state)
        return(
            <View style={style.main_container}>
                <View style={style.container}>
                   <TextInput
                //    autoFocus={true}
                   style={style.textInput}
                   onChangeText={(data)=>console.log("input",data)}
                   placeholder="Username"
                   />
                   <TextInput
                   style={style.textInput}
                   onChangeText={(data)=>console.log("inputs",data)}
                   placeholder="Password"
                   />
                <TouchableOpacity onPress={()=>console.log(this.state)} style={style.login}>
                <View >
                        <Text style={style.login_text}>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LoginScreen;