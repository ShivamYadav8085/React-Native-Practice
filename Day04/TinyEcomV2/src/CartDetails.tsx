import {  Button, FlatList, Image, Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { IProduct, IProductDetailsInCart } from "./Home";


export interface ICart{
    productDetails:IProductDetailsInCart[],
    allProducts:IProduct[],
    onAddingProduct:Function,
    onRemovingProduct:Function,
    onResetCart:Function,
    total:number,
    modalVisible:boolean,
    onSetModalVisible:Function
}
const Cart = (props:ICart)=>{
    
    return <SafeAreaView>
        <Modal animationType="slide" visible={props.modalVisible} transparent={false} >
            <FlatList data={props.productDetails} renderItem={({item})=>{
            const productDetail = props.allProducts.find(produc=>produc.id===item.productId)

                return  <SafeAreaView><View style={{flex:0.5,flexDirection:'row', justifyContent:"space-between", borderWidth:2, padding:5,marginVertical:4,borderRadius:10}}>
                <View>
                <Text>Name: {productDetail?.name}</Text>
                <Text>Price: {' \u20B9'+productDetail?.price}</Text>
                <Text>Quantity: {item.quantity}</Text>
            <Image source={{uri:productDetail?.image}} height={100} width={80} alt="Problem occured while loading image"/>

                </View>
                    <View style={{flexDirection:"row"}}>
                        <Button title="+" onPress={()=>props.onAddingProduct(item.productId)}/>
                        <Button title="-" onPress={()=>props.onRemovingProduct(item.productId)}/>
                    </View>               
            </View>
            </SafeAreaView>
            }}
            ListEmptyComponent={()=><SafeAreaView><Text>Nothing in Cart</Text></SafeAreaView>}
            ListFooterComponent={()=><View>
                {props.productDetails.length>0?
                    <View>
                    <Text>Payable Amount: {' \u20B9'+props.total}</Text>
                    <Button title="Reset" onPress={()=>props.onResetCart()}/>
                </View>:<></>
                    }
                    <Button title="Close" onPress={()=>props.onSetModalVisible()}/>
                    </View>
            }
            />
        </Modal> 
    </SafeAreaView>
}

export default Cart;