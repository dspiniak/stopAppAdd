import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Text, View, StyleSheet, Animated } from 'react-native';

const CircleAnimation = () => {
  const [timer, setTimer] = useState(1);
  const [round, setRound] = useState(1);
  const circleScale = useRef(new Animated.Value(3)).current; // Initial scale value

  useFocusEffect(
    useCallback(() => {
      animateCircle();
    }, [])
  );

  const animateCircle = () => {
    Animated.sequence([
      Animated.timing(circleScale, {
        toValue: 6, // Scale up to match the size ratio
        duration: 5000,
        useNativeDriver: false,
      }),
      Animated.timing(circleScale, {
        toValue: 3,
        duration: 5000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  useFocusEffect(
    useCallback(() => {
      setRound(1);
      setTimer(1);
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer == 5) {
            setRound(2);
          } 
          if (prevTimer < 10) {
            return prevTimer + 1;
          }
          if (prevTimer == 10) {
            clearInterval(interval);
            return 10;
          }
        });
      }, 1000);

      return () => clearInterval(interval);
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            styles.circle,
            { transform: [{ scale: circleScale }] },
          ]}
        />
        <Text style={styles.timer}>{round === 1 ? 'inhale' : 'exhale'}{"\n"}{timer}</Text>
        <Text style={styles.timer}></Text>
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
    top: 0
  },
  circle: {
    width: 60, // Base width
    height: 60, // Base height
    borderRadius: 30, // Half of the width and height for a perfect circle
    backgroundColor: '#FFFFFF',
    position: 'absolute',
  },
  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: -14,
    textAlign: 'center'
  }
});

export default CircleAnimation;
