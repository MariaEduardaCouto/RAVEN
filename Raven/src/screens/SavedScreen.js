import React from "react";
import {
    Dimensions,
    ScrollView,
    TextInput,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
// import Search from '../src/assets/img/searchIcon.svg'
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import LivrariaLello from '../assets/img/livrariaLello.svg'
import PortugalFlag from '../assets/img/portugalFlag.svg'

const {width, height} = Dimensions.get('window');

const SavedScreen = ({navigation}) => {
    return(
        <> 
        <LinearGradient
            start={{x: 0, y: 0}} end={{x: 0, y: 1}}
            colors={['#07CDF9','#5508D2']}
            style={{height: height*0.55, width: width, padding: 15, paddingTop: 50,
                    alignItems: 'center'}}>

            <View style={Object.assign({}, styles.W100, styles.aic,
                    {paddingLeft: 40, paddingRight: 40,})}>

                <Text style={{fontWeight: 'bold', fontSize: 25, color:'white'}}>Your saved locations</Text>

            </View>


        </LinearGradient>

        <View
            style={Object.assign({}, styles.bgWhite,
                {position: 'absolute', top: height*0.35,
                width: width, height: height*0.60,
                borderRadius: 30, padding: 30})}>

            <View style={Object.assign({}, styles.fColumn,)}>
            <TouchableOpacity   activeOpacity={1}
                    style={Object.assign({}, styles.fRow,
                    {marginTop: 30},{justifyContent: 'space-between', alignItems: 'center'})}>
            
                <View>
                        <LivrariaLello/>
                </View>  

                <View style={styles.fColumn}>
                    <Text style={Object.assign({},{marginRight: 60},
                    {display: 'flex', color:'black', fontWeight: 'bold', marginBottom:13,fontSize:19})}>
                    Livraria Lello
                    </Text> 
                <View style={{flexDirection:'row', marginBottom:10}}>    
                    <PortugalFlag style={{marginTop:11,}}/>
                    <Text style={Object.assign({},{marginRight: 60},
                    {display: 'flex', color:'#818181', marginTop:8})}>  Porto, Portugal
                    </Text>
                </View>
                    <Text style={Object.assign({},{marginRight: 60},
                    {display: 'flex', color:'black', fontWeight: 'bold'})}>
                    2 weeks ago
                    </Text>
                </View>

                
                    
            
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{flex: 1, height: 1, backgroundColor: '#cdcdcd'}} />
            </View>


            </View>   
        </View>

    </>
    
    )
}

const styles = StyleSheet.create({
    WH100: {
        width: width,
        height: height,
    },
    aic: {
        alignItems: 'center'
    },
    bgWhite: {
        backgroundColor: '#fdfdfd'
    },
    fColumn: {
        flexDirection: 'column',
    },
    fRow: {
        flexDirection: 'row',
        marginBottom:10
    },
})

export default SavedScreen
