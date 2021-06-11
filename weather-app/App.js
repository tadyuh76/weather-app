import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';

import Loading from './components/Loading';
import Weather from './components/Weather';

import * as Location from 'expo-location';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (lon, lat) => {
    const {data: {main: {temp}, weather, name}} = await axios.get(
      ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d388e24bd40205bb4bc7e2b2fa67ffc4&units=metric`
    );
    this.setState({isLoading: false, temp, condition: weather[0].main, location: name})
  };

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      
      const {coords: {longitude, latitude}} = await Location.getLastKnownPositionAsync({});
      console.log(longitude, latitude);
      this.getWeather(longitude, latitude);
    }
    catch(err) {
      console.log(err)
      Alert.alert(err);
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, location } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} location={location}/>;
  }
}
