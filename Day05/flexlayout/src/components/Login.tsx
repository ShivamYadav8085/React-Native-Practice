import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { User } from './Register';



type Props= NativeStackScreenProps<any,"Login">;

const Login = ({navigation,route}:Props) => (
    <View style={[styles.container]}>
        <View style={styles.cardHeader}>
            <Image source={{uri:"https://img.freepik.com/free-vector/creative-barbecue-logo-template_23-2149017951.jpg?size=626&ext=jpg&ga=GA1.1.1423566931.1687770777&semt=ais"}} height={300} width={250}/>
            <Text style={styles.brandText}>Brand</Text>
            <Text style={{color:'red'}}>Please Login {route.params?.username}</Text>
        </View>
        <View style={styles.innerContainer}>
            <View style={styles.box}>
                    <Text style={styles.titleText}>Login</Text>
                    <View>
                        <Image style={styles.icons} source={{uri:"https://cdn-icons-png.flaticon.com/128/15/15874.png"}} height={20} width={20}/>
                        <TextInput style={styles.textInput} placeholder='Mobile Number'/>
                    </View>      
                    <TouchableOpacity style={[styles.button,styles.nextButton]} >
                        <Text style={styles.textWhite}>Next</Text>
                    </TouchableOpacity>
            </View>
        <TouchableOpacity  onPress={()=>navigation.navigate("Register")}><Text style={{fontSize:15,fontWeight:"bold",color:"blue",marginTop:70}}>Register</Text></TouchableOpacity>
        </View>
    </View>
)

export default Login