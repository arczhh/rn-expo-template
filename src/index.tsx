import app from '@features/app';
import onboarding from '@features/onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
// import store from '@redux/store';
import React from 'react';
import { Provider as RNPaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';

export type RootStackParamList = {
  onboarding: undefined;
  app: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const navigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export default function App() {

  const [loaded] = useFonts({
    NotoSansThai: require('./assets/fonts/NotoSansThai-Regular.ttf'),
    NotoSansThaiSemiBold: require('./assets/fonts/NotoSansThai-SemiBold.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    // <Provider store={store}>
    <RNPaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={navigationOptions}>
          <Stack.Screen name={"onboarding"} component={onboarding.navigator} />
          <Stack.Screen name={"app"} component={app.navigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </RNPaperProvider>
    // </Provider>
  );
}
