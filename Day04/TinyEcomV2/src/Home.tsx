import { Button, SafeAreaView, Text, View } from "react-native";
import ProductList from "./ProductList";
import { useEffect, useRef, useState } from "react";
import Cart from "./CartDetails";

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

const Home = ()=>{
    const [productDetailsInCart, setProductDetailsInCart] = useState<IProductDetailsInCart[]>([]);
    const [totalPayableAmt, setTotalPayableAmt] = useState<number>(0);
    const [modalVisible,setModalVisible] = useState<boolean>(false);
    const [products,setProducts] = useState<IProduct[]>([
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
    ])

    useEffect(()=>{
        console.log(productDetailsInCart)
        console.log(totalPayableAmt)
    },[products,productDetailsInCart])


    const handleAdd=(itemId:number)=>{
        setProductDetailsInCart((prev:IProductDetailsInCart[])=>{
            const productInCart = prev.find(p=>p.productId===itemId);
            const productInProductList = products.find(p=>p.id===itemId)
            const quantityInCart = productInCart?productInCart.quantity:0;
            const quantityInProductList = productInProductList?productInProductList.stock:0;
            if(quantityInCart===quantityInProductList){
                return prev;
            }
            if(!productInCart){
                prev.push({productId:itemId,quantity:1})
                setTotalPayableAmt(prevAmt=>{
                    prevAmt+=productInProductList?productInProductList.price:0
                    return prevAmt;
                })
                return prev
            }else{

                const updatedCart = prev.map(product=>{
                    if(product.productId===itemId){
                        product.quantity+=1;
                        setTotalPayableAmt(prevAmt=>{
                            prevAmt+=productInProductList?productInProductList.price:0
                            return prevAmt;
                        })
                    }
                    return product
                })
                return updatedCart
            }
        })
    }
    const handleRemoveProduct=(itemId:number)=>{
        setProductDetailsInCart((prev:IProductDetailsInCart[])=>{
            const productInCart = prev.find(p=>p.productId===itemId);
            const productInProductList = products.find(p=>p.id===itemId);
        
            
            if(!productInCart||productInCart.quantity<=1){
                if(productInCart?.quantity===1){
                    setTotalPayableAmt(prevAmt=>{
                        prevAmt-=productInProductList?productInProductList.price:0
                        return prevAmt;
                    })

                    prev= prev.filter(p=>p.productId!==productInCart.productId)
                }
                return prev
            }else{
                const updatedCart = prev.map(product=>{
                    if(product.productId===itemId){
                        let quantity = product.quantity;
                        product.quantity = quantity>0?quantity-1:0;
                    }
                    return product
                })
                setTotalPayableAmt(prevAmt=>{
                    prevAmt-=productInProductList?productInProductList.price:0
                    return prevAmt;
                })
                return updatedCart
            }
        })
    }
    const handleCartReset=()=>{
        setProductDetailsInCart((prev:IProductDetailsInCart[])=>{
            prev=[]
            setTotalPayableAmt(0);
            return prev;
        })
    }
    const handleSetModalVisible=()=>{
        setModalVisible(prev=>!prev)
    }
   

    return <View>
        <Text style={{marginBottom:25,fontSize:25,fontWeight:"bold"}}> Product List</Text>
        <View>
        <ProductList allProducts={products} onRemovingProduct={handleRemoveProduct} onAddingProduct={handleAdd}/>
        <View>
            <Button title={"Cart"} onPress={()=>handleSetModalVisible()}/>
        </View>
        </View>
        <Cart allProducts={products}
         total={totalPayableAmt} productDetails={productDetailsInCart} onRemovingProduct={handleRemoveProduct} onAddingProduct={handleAdd} 
         modalVisible={modalVisible} onSetModalVisible={handleSetModalVisible} onResetCart={handleCartReset} ></Cart>
    </View>
}

export default Home;