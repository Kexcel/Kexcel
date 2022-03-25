import React from "react";
import {View,Button,Text,Image,ScrollView,TouchableOpacity} from 'react-native'
import Data from '../../Constants/Fields';
// const StreamPick = ({navigation}) => 
// {

//     return (
//         <ScrollView>
//             <View style={{height:'100%',alignItems:"center",justifyContent:'center',flexWrap:'wrap',flexDirection:'row'}}>
//             {data.map(datas => <StreamPickCard records = {datas}/>)}
//         </View>
//         </ScrollView>
        
//     )
// }
 

class StreamPick extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)
        this.state = {...props,data : Data,stage: 0,HistoryStack: [props.route.params.stream]}
        this.incrementStage= this.incrementStage.bind(this)
    }
    componentDidMount(){
        // console.log("Pick Screen" ,this.state.HistoryStack[this.state.stage],"soemthing",this.state,this.state.data,this.state.HistoryStack)
        // this.state.data.map(data=>console.log(data,data.parent))
        this.setState({data:Data.filter(item =>  item.level == this.state.stage && (item.field == this.state.HistoryStack[this.state.stage] || item.parent.includes(this.state.HistoryStack[this.state.stage])))})
        
    }
    incrementStage(addToStack){
        // console.log(addToStack)
        this.setState({stage:this.state.stage+1,HistoryStack:[...this.state.HistoryStack,addToStack]},()=>{this.componentDidMount()})        
    }

    render(){
        return (
            <View>
                <ScrollView contentContainerStyle={{flexDirection:'row',backgroundColor:'#95b4f2',margin:10,padding:10,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                    <Text>History:</Text>
                    {this.state.HistoryStack.map(data=>(<View><Text style={{padding:5,fontSize:15}}>{data+'>'}</Text></View>))}
                </ScrollView >
                <ScrollView>
            <View style={{height:'100%',alignItems:"center",justifyContent:'center',flexWrap:'wrap',flexDirection:'row'}}>
            {this.state.data.map(datas => <StreamPickCard records = {datas} navigation= {this.state.navigation} movetoField={this.incrementStage}/>)}
        </View>
        </ScrollView>

                </View>

        )
    }
}
const StreamPickCard = (props) =>{
// console.log(props)
return (
<TouchableOpacity onLongPress={()=>props.navigation.navigate('Details',props.records)} onPress={()=>props.records.isEnd?{}:props.movetoField(props.records.name)} style = {{width:'95%',alignItems:'center',backgroundColor:'#95b4f2',margin:5,borderRadius:20,overflow:'hidden',justifyContent:'center'}}>
    <View style = {{color:'black',margin:2,alignItems:"center",flexDirection:'row',padding:10,width:'100%',justifyContent:'space-around'}}>
    <View style={{width:'70%'}}>
        <Text style={{fontSize:25,padding:10,flexWrap:'wrap',textAlign:'center'}}>
            {props.records.title}
        </Text>
    </View>  
</View>
</TouchableOpacity>
)}

export default StreamPick;