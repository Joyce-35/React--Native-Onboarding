import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import shopping from './assets/Online_shopping.png';

const OnlineShopping = () => {
    return (
       <View style={styles.ShoppingContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.headingText}>ONLINE SHOPPING</Text>
            <Text style={styles.paragraphText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={shopping} style={styles.image} />
        </View>
        <View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.options}>
                    
                    <View style={styles.swiperContainer}>
                        <TouchableOpacity style={[styles.swiper,styles.swiper1]}></TouchableOpacity>
                        <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                        <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                    </View>
                    <Text style={styles.skip}>Skip</Text>
            </View>
        </View>
       </View>
    );
}
const styles = StyleSheet.create({
    ShoppingContainer: {
        flex:1,
      justifyContent: 'space-around',
      marginHorizontal:30,
    },
    headingText:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        
    },
    paragraphText:{
        color: '#b1bab3',
    },
    image:{
        width:220,
        height:200,
        alignSelf:'center',
        marginVertical:30,
    },
    button: {
        width:150,
        height:50,
        borderRadius:30,
        alignSelf: 'center',
        backgroundColor: '#8470c4',
        justifyContent: 'center',
        alignItems:'center',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:20,
        color: '#fff'
    },
    options:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    swiper:{
        backgroundColor:'#b1bab3',
        height:10,
        width:10,
        marginHorizontal:1,
        borderRadius:100,
    },
    swiper1:{
        backgroundColor: '#8470c4',
        height:10,
        width:20,
        marginHorizontal:1,
        borderRadius:100,
    },
    swiperContainer:{
        flexDirection:'row',
        marginTop:90,
        marginRight:120,
    },
    skip:{
        marginTop:90,
        color: '#b1bab3'
    },
  });

export default OnlineShopping;
