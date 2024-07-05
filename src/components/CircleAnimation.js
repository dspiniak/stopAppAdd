import React, { useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

const CircleAnimation = () => {
  const [timer, setTimer] = useState(10);
  const circleScale = useRef(new Animated.Value(1)).current; // Initial scale value

  useEffect(() => {
    animateCircle();
  }, []);

  const animateCircle = () => {
    Animated.sequence([
      Animated.timing(circleScale, {
        toValue: 3.33, // Scale up to match the size ratio
        duration: 6000,
        useNativeDriver: false,
      }),
      Animated.timing(circleScale, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            styles.circle,
            { transform: [{ scale: circleScale }] },
          ]}
        />
        <Text style={styles.timer}>{timer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    position: 'relative', // Ensures the text is centered relative to the circle
    justifyContent: 'center',
    alignItems: 'center',
    top: 100
  },
  circle: {
    width: 60, // Base width
    height: 60, // Base height
    borderRadius: 30, // Half of the width and height for a perfect circle
    backgroundColor: '#FFFFFF',
    position: 'absolute',
  },
  timer: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default CircleAnimation;
