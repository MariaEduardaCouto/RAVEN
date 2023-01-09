import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, StatusBar, FlatList, View, Image, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');



const slides = [
    {
        id:'1',
        image: require('../assets/img/imgSlide1.svg'),
        title: 'Find interesting places',
        subtitle: 'Possibility of viewing a vast list of specific geographic points, as well as filtering them'
    },
    {
        id:'2',
        image: require('../assets/img/imgSlide2.svg'),
        title: 'Save your favorite locations',
        subtitle: 'You can save whatever location in order to provide prior planning at a distance'
    },
    {
        id:'3',
        image: require('../assets/img/imgSlide3.svg'),
        title: 'Reward system',
        subtitle: 'You can get rewards and higher your progress by simply discovering new places and having fun'
    },
    {
        id:'4',
        image: require('../assets/img/imgSlide4.svg'),
        title: '',
        subtitle: 'That’s it. Are you ready to start?'
    },
    
];



const Slide = ({item}) => {
    return (
        <View style={{alignItems:'center'}}>
            <Image source={item.image} style={{height:'75%', width, resizeMode:'contain'}}/>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    )
}

export function OnboardingScreen({navigation}) {
    const [currentSlideIndex, setCurrentSlideIndex ] = React.useState(0)
    const Footer = () =>{
        return (
            <View 
            style={{
                height: height * 0.25, 
                justifyContent:"space-between",
                paddingHorizontal:20
            }}>
                
                <View 
                style={{
                    flexDirection:'row', 
                    justifyContent:'center',
                    marginTop:20
                    }}>
                        {slides.map((_,index)=>(
                            <View key={index} style={[styles.indicator, currentSlideIndex == index &&{
                                backgroundColor:'#07CDF9',
                                
                            },
                        ]}
                        />
                        ))}
                    </View>
                    <View style = {{marginBottom:20}}>
                        <View style = {{flexDirection:'row'}}>
                            <TouchableOpacity style={styles.btnSkip}>
                                <Text>Skip</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        )
    }

    return (
    <SafeAreaView style={styles.backgroud}>
        <StatusBar backgroundColor='#FDFDFD'/>
        <FlatList
        data={slides} 
        contentContainerStyle={{height:height * 0.75}} 
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => <Slide item={item}/>}
        />
        <Footer/>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    backgroud:{
        flex:1,
        backgroundColor: '#FDFDFD'},
    title:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center',        
    },
    subtitle:{
        color:'#000',
        fontSize:13,
        marginTop:10,
        maxWidth:'70%',
        textAlign:'center',
        lineHeight:23,
    },
    indicator:{
        height:13,
        width:13,
        backgroundColor:'transparent',
        marginHorizontal:3,
        borderRadius:7,
        borderWidth:1,
        borderColor:'#07CDF9'
        // borderColor: (
        //     <LinearGradient
        //         colors={['#07CDF9','#5508D2']}
        //         start={[0,0]}
        //         end={[1,0]}
        //     >
        //     </LinearGradient>
        // )

    },
    btnSkip:{
        flex:1,
        color:'black'
    }
})
