import React, {useState, useEffect} from 'react';
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
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid } from 'react-native';


export function NearbyScreen() {

    const [pos, setPos] = useState({
        latitude: 41.366732,
        longitude: -8.738992,
        gps: false,
    });

    useEffect(() => {
        async function requestLocationPermission() {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'Location Permission',
                message: 'Your app needs access to your location',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              Geolocation.getCurrentPosition(
                (position) => {
                  setPos({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    gps: true,
                  });

                  console.log(position);
                },
                (error) => console.log(error),
                { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
              );
            } else {
              console.log('Location permission denied');
              setPos({ error: 'Location permission denied' });
            }
          } catch (err) {
            console.warn(err);
            setPos({ error: err });
          }
        }
        requestLocationPermission();
      }, []);

      useEffect(() => {
        console.log('You can access the location. Latitude: '+pos.latitude+' longitude: '+pos.longitude);
      }, [pos])

    if (pos.gps) {
      return (
        <MapView
          style={{width: '100%', height: '100%'}}
          region={{
            latitude: pos.latitude,
            longitude: pos.longitude,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0421,
          }}
        >

          <Marker
            coordinate={{
              latitude: pos.latitude,
              longitude: pos.longitude, 
            }}
            title="You are here!"
            description="Your current location."
            pinColor={"#fdfdfd"}
          />

          <Marker
            coordinate={{
              latitude: 41.145907,
              longitude: -8.613536 
            }}
            title="Torre dos Clérigos"
            description="Tower, Museum and Church"
            pinColor={"#5508D2"}
          />

          <Marker
            coordinate={{
              latitude: 41.140080,
              longitude: -8.609460
            }}
            title="Ponte Luis I"
            description="One of the most famous touristic spots of Porto"
            pinColor={"#07CDF9"}
          />

          <Marker
            coordinate={{
              latitude: 41.146790,
              longitude: -8.614900
            }}
            title="Livraria Lello"
            description="Most famous library of Porto"
            pinColor={"#07CDF9"}
          />
        </MapView>
      )
    }

    if (!pos.gps) {
      <MapView
          style={{width: '100%', height: '100%'}}
          region={{
            latitude: 41.366732,
            longitude: -8.738992,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0421,
          }}
        >

          <Marker
            coordinate={{
              latitude: 41.145907,
              longitude: -8.613536 
            }}
            title="ESMAD"
            description="Default location in: Vila do Conde"
            pinColor="#ffffff"
          />

          <Marker
            coordinate={{
              latitude: 41.145907,
              longitude: -8.613536 
            }}
            title="Torre dos Clérigos"
            description="Torre, Museu e Igreja"
            pinColor="#5508D2"
          />
        </MapView>
    }

        // <MapView
        //     style={{width: '100%', height: '100%'}}
        //     region={pos}
        //     showsUserLocation
        //     onRegionChange={setPos}
        //     >
        //     <Marker coordinate={pos} />
        // </MapView>

        // <MapView
        //     style={{width: '100%', height: '100%'}}
        //     initialRegion={{
        //         latitude: 41.1465543,
        //         longitude: -8.6142466,
        //         latitudeDelta: 0.0,
        //         longitudeDelta: 0.0421,
        //     }}
        //     minZoomLevel={2}
        //     maxZoomLevel={15}
        // />
}