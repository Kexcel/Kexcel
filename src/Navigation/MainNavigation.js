import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {View,Text,Image,StyleSheet} from 'react-native'
import Home from '../Components/Main/HomeScreen'
import About from '../Components/Main/AboutScreen'
import Setting from '../Components/Main/SettingScreen'
import DefaultScreen from '../Components/Main/MainScreen'
import StreamPick from '../Components/Main/StreamPickScreen'
import Detail from '../Components/Main/DetailScreen'
import LoginScreen from '../Components/Login/Login';


const NativeStack = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

const style = StyleSheet.create({
    HeaderStyle:{backgroundColor:'#95b4f2'},
    headertextStyle:{color:'#FFF'}
})

const HomeStack = () =>(
    <NativeStack.Navigator>
        <NativeStack.Screen name = "Main" component={Home}  options={{headerStyle:style.HeaderStyle,headerTitleStyle:style.headertextStyle}}></NativeStack.Screen>
        <NativeStack.Screen name = "About" component={About} options={{headerStyle:style.HeaderStyle,headerTitleStyle:style.headertextStyle}}></NativeStack.Screen>
        <NativeStack.Screen name = "Stream"  component={DefaultScreen} options={{headerStyle:style.HeaderStyle,headerTitleStyle:style.headertextStyle}}></NativeStack.Screen>
        <NativeStack.Screen name = "Field" component={StreamPick} options={{headerStyle:style.HeaderStyle,headerTitleStyle:style.headertextStyle}}></NativeStack.Screen>
        <NativeStack.Screen name = "Details" component={Detail} options={{headerStyle:style.HeaderStyle,headerTitleStyle:style.headertextStyle}}></NativeStack.Screen>
    </NativeStack.Navigator>
)

const Login = () =>(
    <NativeStack.Navigator>
        <NativeStack.Screen name = "Login" component={LoginScreen} options={{headerStyle:style.HeaderStyle,headerTitleStyle:style.headertextStyle}}></NativeStack.Screen>
        <NativeStack.Screen name = "About" component={Main}></NativeStack.Screen>
    </NativeStack.Navigator>
)

const Main = () =>(
    <BottomTabNavigator.Navigator 
    screenOptions={({ route }) => ({
        headerShown:false,
        tabBarShowLabel:true,
        tabBarLabelPosition:'beside-icon',
        tabBarIconStyle:{display:'none'},
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })} >
        <BottomTabNavigator.Screen name = "Home" component = {HomeStack}></BottomTabNavigator.Screen>
        <BottomTabNavigator.Screen name = "Settings" component = {Setting}></BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
)

export default HomeStack; 
