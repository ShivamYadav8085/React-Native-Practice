import { Button, FlatList, Image, Text, TextInput, View } from "react-native";
import { IProduct } from "./Home";
import { useEffect, useState } from "react";

interface IProductList{
    allProducts:IProduct[],
    onAddingProduct:Function,
    onRemovingProduct:Function,
}

const ProductList = (props:IProductList)=>{
    const [products,setProducts] = useState(props.allProducts)
    const [search, setSearch] = useState("");
    const handleAscButton = ()=>{
        setProducts(prev=>{
            const newList = [...prev].sort((p1,p2)=>p1.price-p2.price)
            return newList;
            
        })
    }
    const handleDescButton =  ()=>{
        setProducts(prev=>{
            const newList = [...prev].sort((p1,p2)=>p2.price-p1.price)
            return newList;
            
        })
    }
    const handleSearch=(text:string)=>{
        setSearch(text)
        setProducts(prev=>{
            const searchedList = [...prev].filter(product=>{
                return product.name.toLowerCase().includes(search.toLowerCase());;
            })
            return searchedList;
        })
    }
    return <View>

        <FlatList data={products} 
        ListHeaderComponent={()=><View style={{ padding: 8 }}>
            <TextInput onChangeText={(text)=>handleSearch(text)} value={search}></TextInput>
            <Button title="Asc" onPress={()=>handleAscButton()}/><Button title="Desc" onPress={()=>handleDescButton()}/>

        </View>}
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