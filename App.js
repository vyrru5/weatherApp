import React from 'react';
import { View , StyleSheet} from 'react-native';
import Hello from './components/Hello';

export default function App() {
  return (
    <View style={ styles.container}>
     <Hello title="world"/>
     <Hello title="YOU"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});