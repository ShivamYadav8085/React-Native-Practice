import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    container:{
        height:"100%",
        borderRadius:50,
        borderWidth:2,
    },
    cardHeader:{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    innerContainer:{
        flex:1,
        alignItems:"center",
        borderRadius:20,
    },
    box:{
        height:230,
        width:280,
        padding:20,
        borderRadius:20,
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"#D3D3D3",
    }
    ,
    textInput:{
        width:200,
        borderBottomWidth:1,
        paddingHorizontal:20,
        paddingVertical:10,
        borderBottomColor:"black"
    }
    ,
    brandText:{
        fontSize:40,
        fontWeight:"bold"
    },
    titleText:{
        fontSize:35,
        textAlign:"center"
    },
    button:{
        width:150,
        height:40,
        borderRadius:14,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black"
    },
    nextButton:{
        position:"absolute",
        top:"110%",
        left:"25%",
    }
    ,
    registerButton:{
        position:"absolute",
        top:"105%",
        left:"25%"
    }
    ,
    textWhite:{
        color:"white",
        fontWeight:"bold"
    },
    profilePicture:{
        height:80,
        width:80,
        borderRadius:100
    },
    /**Icon */
    iconHeightWidth:{
        height:20,
        width:20
    },
    icons:{
        position:'relative',
        top:"52%"
    },
    cameraIcon:{
        bottom:10,
        left:30
    }
});