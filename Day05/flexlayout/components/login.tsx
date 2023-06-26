import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/style'

const Login = () => (
    <View style={[styles.container]}>
        <View style={styles.cardHeader}>
            <Image source={{uri:"https://img.freepik.com/free-vector/creative-barbecue-logo-template_23-2149017951.jpg?size=626&ext=jpg&ga=GA1.1.1423566931.1687770777&semt=ais"}} height={300} width={250}/>
            <Text style={styles.brandText}>Brand</Text>
        </View>
        <View style={styles.innerContainer}>
            <View style={styles.box}>
                    <Text style={styles.titleText}>Login</Text>
                    <View>
                        <Image style={styles.icons} source={{uri:"https://cdn-icons-png.flaticon.com/128/15/15874.png"}} height={20} width={20}/>
                        <TextInput style={styles.textInput} placeholder='Mobile Number'/>
                    </View>      
                    <TouchableOpacity style={[styles.button,styles.nextButton]}>
                        <Text style={styles.textWhite}>Next</Text>
                    </TouchableOpacity>
            </View>
        </View>
    </View>
)

export default Login