import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { Container } from './styled/app.styled';

export default function App() {
  return (
    <Container> 
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}