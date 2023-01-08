import React from 'react';
import {View, StyleSheet, Text, ScrollView, KeyboardAvoidingView} from 'react-native';
import locations from './data/locations.json'

export function HomepageScreen (){

    return(
        <KeyboardAvoidingView style={StyleSheet.background}>
            <ScrollView>
                <Text style={StyleSheet.titleName}> Homepage</Text>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"white",
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})