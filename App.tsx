import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { SignIn } from './src/screens/SignIn';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={SignIn} />
        <Stack.Screen name="House" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

