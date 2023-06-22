import { Button, FlatList, Image, Text, View } from "react-native";
import { IProduct } from "./Home";

interface IProductList{
    allProducts:IProduct[],
    onAddingProduct:Function,
    onRemovingProduct:Function,
}

const ProductList = (props:IProductList)=>{
    return <View>
        <FlatList data={props.allProducts} 
        renderItem={({item})=>{
            return <View style={{flex:1,flexDirection:'row', justifyContent:"space-between", borderWidth:2, padding:5,marginVertical:4,borderRadius:10}}>
            <View>
                <Text>Name: {item.name}</Text>
                <Text>Price: { ' \u20B9'+item.price } </Text>
                <Text>Left: {item.stock}</Text>
            </View>   
            <Image source={{uri:item.image}} height={100} width={80} alt="Problem occured while loading image"/>
            <View style={{flexDirection:"row"}}>
                    <Button title="+" onPress={()=>props.onAddingProduct(item.id)}/>
                    <Button title="-" onPress={()=>props.onRemovingProduct(item.id)}/>
            </View>
            </View>
        }} 
        />

    </View>
}

export default ProductList;