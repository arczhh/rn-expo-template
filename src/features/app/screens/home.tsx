import { Image } from 'expo-image';
import { Button, Platform, StyleSheet, View } from 'react-native';

import { HelloWave } from '@components/HelloWave';
import ParallaxScrollView from '@components/ParallaxScrollView';
import { ThemedText } from '@core/components/ThemedText';
import { ThemedView } from '@components/ThemedView';
import { ENVIRONMENT_NAME } from '@env';
import NavigationHeader from '@core/components/NavigationHeader';

export default function HomeScreen({ navigation }: any) {
  return (
    <View>
      <NavigationHeader 
        title='Home Screen'
        showBackBtn={true}
        rightBtnText="Save"
      />
      <ThemedText>Home Screen</ThemedText>
      <Button title="Navigate to onboarding" onPress={() => {
        navigation.navigate("onboarding", {
          screen: "LoginScreen"
        })
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
