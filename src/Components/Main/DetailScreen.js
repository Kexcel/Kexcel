import React from "react";
import {View,Button,Text,TouchableOpacity,ScrollView,StyleSheet} from 'react-native'

// const Home = ({navigation}) => (
    
// )
const style = StyleSheet.create({
    contact:{
        backgroundColor:'#95b4f2',
        // position:"absolute",
        // bottom: "1%",
        alignItems:'center',
        padding:10,
        width:'96%',
        marginHorizontal:'2%',
        marginVertical:"1%",
        borderRadius:10
    },
    main_container:{
        height:'100%',
    },
    textinside:{
        alignItems:"center",
        padding:10,
    },
    textstyle:{
        color:'#FFF',
        fontSize:20,
        textAlign:"justify"
    }
})
class Detail extends React.Component{
    constructor(props){
        super(props)
        this.state = {...props}
        console.log(this.state)
        this.state.navigation.setOptions({title:props.route.params.title})
    }
    render(){
        console.log("Desctription",this.state)
        return(
            <View style={style.main_container}>
                <ScrollView style={{padding:5,marginHorizontal:'2%'}}>
                <View style={{alignItems:'center',flexWrap:'wrap',justifyContent:'center'}}>
                <Text style={{fontSize:15}}>
                    {this.state.route.params.Description}
                </Text>
                </View>
                </ScrollView>
                <TouchableOpacity style={style.contact}>
                    <View style={style.textinside}>
                        <Text style={style.textstyle}>
                            Contact Mentor
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Detail;