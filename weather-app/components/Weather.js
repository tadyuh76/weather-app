import * as React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Haze',
    subtitle: "Just don't go outside",
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#B993D6', '#8CA6DB'],
    title: 'Thunderstorm',
    subtitle: 'Stay home with a warm blanket',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#7F7FD5', '#86A8E7', '#91EAE4'],
    title: 'Drizzle',
    subtitle: 'Is like rain, but gay 🏳️‍🌈',
  },
  Rain: {
    iconName: 'weather-pouring',
    gradient: ['#00416A', '#E4E5E6'],
    title: 'Raining',
    subtitle: 'Take your umbrella!',
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#b8d3fe', '#aecad6'],
    title: 'Snow',
    subtitle: 'Do you wanna build a snowman?',
  },
  Atmosphere: {
    title: 'Atmosphere',
    subtitle: 'Atmosphere',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#EECDA3', '#f05053'],
    title: 'Sunny',
    subtitle: 'It will be a lovely day!',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#616161', '#9bc5c3'],
    title: 'Clouds',
    subtitle: 'Are you on cloud nine today?',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#93a5cf', '#e4efe9'],
    title: 'Mist',
    subtitle: 'The situation is very unclear',
  },
};

export default function Weather({ temp, condition, location }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContainer}>
        <MaterialCommunityIcons size={20} name={'map-marker'} color="white" />
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.centerContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={100}
          color="white"
        />
        <Text style={{ fontSize: 42, color: 'white' }}>{temp}°</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  locationText: {
    color: "white",
    fontSize: 24
  },
  centerContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingLeft: 40
  },
  title: {
    fontSize: 32,
    fontWeight: '300',
    color: 'white',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
