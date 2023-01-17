import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';
import MapView from 'react-native-maps';

export function RouteDetailsScreen() {
    return (
        <MapView
            style={{width: '100%', height: '100%'}}
            initialRegion={{
                latitude: 41.1465543,
                longitude: -8.6142466,
                latitudeDelta: 16.16,
                longitudeDelta: 0.0421,
            }}
        />
    )
}