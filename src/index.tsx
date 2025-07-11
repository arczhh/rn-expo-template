import app from '@features/app';
import onboarding from '@features/onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import store from '@redux/store';
import React from 'react';
import { Provider as RNPaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

export type RootStackParamList = {
  onboarding: undefined;
  app: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // <Provider store={store}>
      <RNPaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={"onboarding"} component={onboarding.navigator} />
            <Stack.Screen name={"app"} component={app.navigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </RNPaperProvider>
    // </Provider>
  );
}
