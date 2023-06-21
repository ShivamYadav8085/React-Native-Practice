import { Button, Text, View } from "react-native";
import { IProduct, IProductDetailsInCart } from "./ContainerComponent";
export interface ICart{
    productDetails:IProductDetailsInCart[],
    allProducts:IProduct[],
    onAddingProduct:Function,
    onRemovingProduct:Function,
    total:number
}
const Cart = (props:ICart)=>{
    
    return <View style={{marginTop:10}}>
        {props.productDetails.length>0?props.productDetails.map((product:IProductDetailsInCart,index:number)=>{
            const productDetail = props.allProducts.find(produc=>produc.id===product.productId)
            return <View key={index} style={{flex:1,flexDirection:'row',justifyContent:"space-between"}}>
                <View>
                <Text>Name: {productDetail?.name}</Text>
                <Text>Price: {productDetail?.price}</Text>
                <Text>Quantity: {product.quantity}</Text>
                </View>
                    <View style={{flexDirection:"row"}}>
                        <Button title="+" onPress={()=>props.onAddingProduct(product.productId)}/>
                        <Button title="-" onPress={()=>props.onRemovingProduct(product.productId)}/>
                    </View>               
            </View>
        }):<View><Text>Nothing in Cart</Text></View>}
        <View>
            <Text>Payable Amount: {props.total}</Text>
        </View>
    </View>
}

export default Cart;