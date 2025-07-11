import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import LoginScreen from '../screens/login/login.screen';

export type RootStackParamList = {
  LoginScreen: undefined;
};

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function OnboardingStackNavigator() {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
