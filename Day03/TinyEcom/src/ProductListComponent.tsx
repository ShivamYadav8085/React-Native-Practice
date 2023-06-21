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
            return <View key={index}>
                <View>
                    <Text>Name: {product.name}</Text>
                </View>    
                <View>
                    <Text>Price: {product.price} rupees</Text>
                </View>    
                <View>
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