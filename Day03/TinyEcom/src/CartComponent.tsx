import { Button, Text, TouchableOpacity, View } from "react-native";
import { IProduct, IProductDetailsInCart } from "./ContainerComponent";


export interface ICart{
    productDetails:IProductDetailsInCart[],
    allProducts:IProduct[],
    onAddingProduct:Function,
    onRemovingProduct:Function,
    onResetCart:Function,
    total:number
}
const Cart = (props:ICart)=>{
    
    return <View style={{marginTop:10}}>
        {props.productDetails.length>0?props.productDetails.map((product:IProductDetailsInCart,index:number)=>{
            const productDetail = props.allProducts.find(produc=>produc.id===product.productId)
            return <View key={index} style={{flex:1,flexDirection:'row', justifyContent:"space-between", borderWidth:2, padding:5,marginVertical:4,borderRadius:10}}>
                <View>
                <Text>Name: {productDetail?.name}</Text>
                <Text>Price: {' \u20B9'+productDetail?.price}</Text>
                <Text>Quantity: {product.quantity}</Text>
                </View>
                    <View style={{flexDirection:"row"}}>
                        <Button title="+" onPress={()=>props.onAddingProduct(product.productId)}/>
                        <Button title="-" onPress={()=>props.onRemovingProduct(product.productId)}/>
                    </View>               
            </View>
        }):<View><Text>Nothing in Cart</Text></View>}
        {props.productDetails.length>0?
        <View>
        <Text>Payable Amount: {' \u20B9'+props.total}</Text>
        <Button title="Reset" onPress={()=>props.onResetCart()}/>
    </View>:<></>
        }
        
    </View>
}

export default Cart;