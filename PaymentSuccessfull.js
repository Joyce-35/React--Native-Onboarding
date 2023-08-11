import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Pay from './assets/Successful_purchase.png';

const PaymentSuccessfull = () => {
    return (
        <View style={styles.PaymentContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.headingText}>PAYMENT SUCCESSFUL</Text>
            <Text style={styles.paragraphText}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </Text>
        </View>
        <View style={styles.imageContainer}>
            <Image source={Pay} style={styles.image} />
        </View>
        <View>
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.options}>
            <Text style={styles.previous}>Previous</Text>
                    <View style={styles.swiperContainer}>
                        <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                        <TouchableOpacity style={styles.swiper}></TouchableOpacity>
                        <TouchableOpacity style={[styles.swiper,styles.swiper1]}></TouchableOpacity>
                    </View>
            </View>
        </View>
       </View>
    );
}
const styles = StyleSheet.create({
    PaymentContainer: {
        flex:1,
      justifyContent: 'space-around',
      marginHorizontal:30,
    },
    headingText:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:10,
        
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
        marginHorizontal:140,
    },
    skip:{
        marginTop:90,
        color: '#b1bab3'
    },
    previous:{
        marginTop:90,
        color: '#b1bab3'
    }
  });

export default PaymentSuccessfull;
