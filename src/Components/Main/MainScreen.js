import React from "react";
import {View,Button,Text,Image,ScrollView,TouchableOpacity} from 'react-native'
import Data from '../../Constants/Streams'

class DefaultScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {...props,stage : 0}
        this.incrementLevel = this.incrementLevel.bind(this)
    }
    componentDidMount(){
        this.setState({stage : 0})
        this.state.navigation.setOptions({title:"10th "})
    }
    incrementLevel(field){
        this.setState({stage : 1})
        this.state.navigation.setOptions({title : `12th ${field}`})
    }
    render(){
        // console.log("Main Return",this.state)
        return (<ScrollView>
            <View style={{height:'100%',alignItems:"center"}}>
                
            {Data.map(datas => {if(datas.level == this.state.stage) return(<MainScreenCard records = {datas} navigation = {this.state.navigation} stage = {this.state.stage} increment = {this.incrementLevel}/>) })}
        </View>
        </ScrollView>)
    }
}


const MainScreenCard = (props) =>{
// console.log(props)
return (
<TouchableOpacity onLongPress={()=>props.navigation.navigate('Details',props.records)}>
<View style = {{width:'95%',alignItems:'center',margin:5,borderRadius:20,overflow:'hidden',justifyContent:'center'}}>
    <Image source={require('../../Images/MainCardBackground2.jpg')} style={{maxHeight:'100%',resizeMode:'contain'}}></Image>
    <View style = {{margin:2,alignItems:"center",flexDirection:'row',padding:10,width:'100%',justifyContent:'space-around',position:'absolute'}}>
    <View style={{width:'70%'}}>
        <Text style={{fontSize:25,padding:10,flexWrap:'wrap',textAlign:'center'}}>
            {props.records.title}
        </Text>
    </View>
    <View style = {{}}>
        <Button style = {{backgroundColor:'red'}} color='black' title = 'Seek' onPress={()=>{props.records.name == 'Science' ? props.increment(props.records.name):props.navigation.navigate('Field',{title : "Amit",stream : props.records.name})}}/>
    </View>
</View>
</View>
</TouchableOpacity>
)}

export default DefaultScreen;