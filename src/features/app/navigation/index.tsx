import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import ExploreScreen from '../screens/explore';
import HomeScreen from '../screens/home';

export type RootStackParamList = {
  ExploreScreen: undefined;
  HomeScreen: undefined;
};

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={navigationOptions}>
      <Stack.Screen name="ExploreScreen" component={ExploreScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}
