import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Accelerometer} from 'expo-sensors'
import * as ScreenOrientation from 'expo-screen-orientation';

export default App = () => {
  const [data, setData] = useState({x: 0, y: 0, z: 0});

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    const sub = Accelerometer.addListener(setData);
    return () => sub.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Level</Text>
      <View style={styles.levelContainer}>
        <View
          style={[
            styles.bubble,
            {transform: [{translateX: -data.x * 100}, {translateY: data.y * 100}]}
          ]}
        />
      </View>
      <Text style={styles.datax}> X = {(data.x).toFixed(2)} </Text>
      <Text style={styles.datay}> Y = {(data.y).toFixed(2)} </Text>
      <Text style={styles.dataz}> Z = {(data.z).toFixed(2)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    marginBottom: 20, 
  },
  levelContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#a2bbfc',
    borderRadius: 100,
    borderColor: '#877cf7',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubble: {
    width: 40,
    height: 40,
    backgroundColor: '#feb5ff',
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
  },
  datax: {
    marginTop: 20,
    fontSize: 18,
    color: '#f54275',
    borderColor: '#f54275',
    borderWidth: 1,
    borderRadius: 10,
  },
  datay: {
    marginTop: 20,
    fontSize: 18,
    color: '#ff8d6e',
    borderColor: '#ff8d6e',
    borderWidth: 1,
    borderRadius: 10,
  },
  dataz: {
    marginTop: 20,
    fontSize: 18,
    color: '#62c48c',
    borderColor: '#62c48c',
    borderWidth: 1,
    borderRadius: 10,
  },
});