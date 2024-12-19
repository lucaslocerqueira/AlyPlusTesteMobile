import { Dimensions, StyleSheet } from "react-native";
import {themas} from "../../global/themes";



export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'red',
        alignItems:'center',
        justifyContent:'flex-end',
        paddingVertical:40,
    },
    boxMid:{
         height:Dimensions.get('window').height/4,
         width:'100%',
        //backgroundColor:'green',
        paddingHorizontal:37,
    },
    boxBottom:{
         height:Dimensions.get('window').height/3,
         width:'100%',
        //backgroundColor:'blue',
        alignItems:'center',
        justifyContent:'space-between'
        //justifyContent:'center',

    },
    logo:{
        width:220,
        height:80,
    },
    text:{
        fontWeight:'bold',
        marginTop: 20,
        fontSize:18
    },
    titleInput:{
        marginLeft:5,
        color:themas.colors.gray,
        marginTop:20,
    },
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:12,
        backgroundColor:themas.colors.lightGray,
        borderColor:themas.colors.lightGray,
    },
    input:{
        height:'100%',
        width:'90%',
        marginHorizontal:3,
        borderRadius:40,
    },
    button:{
        width:200,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

elevation: 10,
    },
    textButton:{
        fontSize:16,
        color:'#FFFF',
        fontWeight:'bold',
    },
    textBottom:{
        fontSize:16,
        color:themas.colors.gray,
    },
        
})