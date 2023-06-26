import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/style'

const Register = () => {
  return (
    <View style={[styles.container]}>
    {/* <View style={styles.cardHeader}>
        <Image source={{uri:"https://img.freepik.com/free-vector/creative-barbecue-logo-template_23-2149017951.jpg?size=626&ext=jpg&ga=GA1.1.1423566931.1687770777&semt=ais"}} height={300} width={250}/>
        <Text style={styles.brandText}>Brand</Text>
    </View> */}
    <View style={[styles.innerContainer,{justifyContent:"center"}]}>
        <View style={[styles.box,{height:400}]}>
                <Text style={styles.titleText}>Register</Text>
                <View>
                    <Image source={{uri:"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"}}
                    style={styles.profilePicture}
                    />
                    <Image style={[styles.cameraIcon,styles.iconHeightWidth]} source={{uri:"https://cdn-icons-png.flaticon.com/128/45/45010.png"}}/>
                </View>
                <View>
                    <Image style={[styles.icons,styles.iconHeightWidth]} source={{uri:"https://cdn-icons-png.flaticon.com/128/1077/1077063.png"}}/>
                    <TextInput style={styles.textInput} placeholder='User Name'/>
                </View>      
                <View>
                    <Image style={[styles.icons,styles.iconHeightWidth]} source={{uri:"https://cdn-icons-png.flaticon.com/128/1295/1295181.png"}}/>
                    <TextInput style={styles.textInput} placeholder='Address'/>
                </View>      
                <View style={{marginBottom:50}}>
                    <Image style={[styles.icons,styles.iconHeightWidth]} source={{uri:"https://cdn-icons-png.flaticon.com/128/15/15874.png"}}/>
                    <TextInput style={styles.textInput} placeholder='Mobile Number'/>
                </View>      
                <TouchableOpacity style={[styles.button,styles.registerButton]}>
                    <Text style={styles.textWhite}>Register</Text>
                </TouchableOpacity>
        </View>
    </View>
</View>
  )
}

export default Register