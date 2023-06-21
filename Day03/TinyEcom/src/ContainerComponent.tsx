import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ProductList from "./ProductListComponent";
import Cart from "./CartComponent";

export interface IProduct{
    id:number,
    name:string,
    price:number,
    stock:number
}

export interface IProductDetailsInCart{
    productId:number,
    quantity:number,
}

class Container extends Component {
    state:{productList:IProduct[],productDetailsInCart:IProductDetailsInCart[],total:number}={productList:[],productDetailsInCart:[],total:0};
    constructor(props:any){
        super(props);
        this.state.productList= [
            {
            id:1,
            name:"IPhone",
            price:1400000,
            stock:2
        },
            {
            id:2,
            name:"Mac",
            price:2400000,
            stock:5
        },
            {
            id:3,
            name:"Bottle",
            price:500,
            stock:1
        },
            {
            id:4,
            name:"Mug",
            price:670,
            stock:7
        },
            {
            id:5,
            name:"Ear Buds",
            price:50000,
            stock:0
        },
    ]

    }
    handleAdd=(itemId:number)=>{
        this.setState((prev:{productList:IProduct[],productDetailsInCart:IProductDetailsInCart[],total:number})=>{
            const productInCart = prev.productDetailsInCart.find(p=>p.productId===itemId);
            const productInProductList = prev.productList.find(p=>p.id===itemId)
            const quantityInCart = productInCart?productInCart.quantity:0;
            const quantityInProductList = productInProductList?productInProductList.stock:0;
            if(quantityInCart===quantityInProductList){
                return prev;
            }
            if(!productInCart){
                prev.productDetailsInCart.push({productId:itemId,quantity:1})
                prev.total+=productInProductList?productInProductList.price:0;
                return {...prev}
            }else{

                const updatedCart = prev.productDetailsInCart.map(product=>{
                    if(product.productId===itemId){
                        product.quantity+=1;
                        prev.total+=productInProductList?productInProductList.price:0;
                    }
                    return product
                })
                return {...prev, productDetailsInCart:updatedCart}
            }
        })
    }
    handleRemoveProduct=(itemId:number)=>{
        this.setState((prev:{productList:IProduct[],productDetailsInCart:IProductDetailsInCart[],total:number})=>{
            const productInCart = prev.productDetailsInCart.find(p=>p.productId===itemId);
            const productInProductList = prev.productList.find(p=>p.id===itemId);
        
            
            if(!productInCart||productInCart.quantity<=1){
                if(productInCart?.quantity===1){
                    prev.total-=productInProductList?productInProductList.price:0;
                    prev.productDetailsInCart = prev.productDetailsInCart.filter(p=>p.productId!==productInCart.productId)
                }
                return {...prev}
            }else{
                const updatedCart = prev.productDetailsInCart.map(product=>{
                    if(product.productId===itemId){
                        let quantity = product.quantity;
                        product.quantity = quantity>0?quantity-1:0;
                    }
                    return product
                })
                prev.total-=productInProductList?productInProductList.price:0
                return {...prev, productDetailsInCart:updatedCart}
            }
        })
    }
    render(){
        return <View style={styles.container}>
            <Text style={{marginBottom:20}}>Total Payable ammount {"->"+this.state.total}</Text>
            <ProductList allProducts={this.state.productList} onAddingProduct={this.handleAdd} onRemovingProduct={this.handleRemoveProduct}></ProductList>
            <Text>Cart</Text>
            <Cart productDetails={this.state.productDetailsInCart}  onAddingProduct={this.handleAdd} onRemovingProduct={this.handleRemoveProduct}></Cart>
        </View>
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        marginTop:80,
        borderRadius:10,
        marginHorizontal:24,
        paddingRight: 24,
        paddingBottom: 12,
    }
})
export default Container;