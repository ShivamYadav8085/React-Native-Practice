import { Button, Text, View } from "react-native";
import { IProductDetailsInCart } from "./ContainerComponent";
export interface ICart{
    productDetails:IProductDetailsInCart[],
    onAddingProduct:Function,
    onRemovingProduct:Function,
}
const Cart = (props:ICart)=>{
    return <View>
        {props.productDetails.length>0?props.productDetails.map((product:IProductDetailsInCart,index:number)=>{
            return <View key={index} style={{flex:1,justifyContent:"space-between"}}>
                <Text>{product.productId}</Text>
                <Text>{product.quantity}</Text>
                <View style={{flexDirection:"row"}}>
                <View style={{flexDirection:"row"}}>
                    <Button title="+" onPress={()=>props.onAddingProduct(product.productId)}/>
                    <Button title="-" onPress={()=>props.onRemovingProduct(product.productId)}/>
                </View>
                </View>
               
            </View>
        }):<View><Text>Nothing in Cart</Text></View>}
    </View>
}

export default Cart;