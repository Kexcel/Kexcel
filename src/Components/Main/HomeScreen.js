import React from "react";
import {View,Button,Text,TouchableOpacity} from 'react-native'

// const Home = ({navigation}) => (
    
// )

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {...props}
    }
    render(){
        return(
            <View style={{alignItems:'center',flexDirection:'column',justifyContent:'flex-end',height:'100%'}}>
        <View style = {{alignItems:'center',padding:15,backgroundColor:'grey',borderRadius:20,width:'100%',position:"absolute",bottom:-10}}>
        <Button  title="Getting Started" onPress={()=>this.state.navigation.navigate('Stream')}/>
        <TouchableOpacity style={{padding:10}} onPress={()=>{}}>
            <Text style={{color:'#ffffff'}}>
                I dont have an account
            </Text>
        </TouchableOpacity>
        </View>
    </View>
        )
    }
}

export default Home;