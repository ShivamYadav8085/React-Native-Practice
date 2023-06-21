import { Button, Text, View } from "react-native";
import { IProduct } from "./ContainerComponent";

interface IProductList{
    allProducts:IProduct[],
    onAddingProduct:Function,
    onRemovingProduct:Function,
}

const ProductList = (props:IProductList)=>{
    return <View>
        {props.allProducts.map((product,index)=>{
            return <View style={{flex:1,flexDirection:'row', justifyContent:"space-between", borderWidth:2, padding:5,marginVertical:4,borderRadius:10}}key={index}>
                <View>
                    <Text>Name: {product.name}</Text>
                    <Text>Price: { ' \u20B9'+product.price } </Text>
                    <Text>Left: {product.stock}</Text>
                </View>    

                <View style={{flexDirection:"row"}}>
                    <Button title="+" onPress={()=>props.onAddingProduct(product.id)}/>
                    <Button title="-" onPress={()=>props.onRemovingProduct(product.id)}/>
                </View>
               
            </View>
        })}
    </View>
}

export default ProductList;