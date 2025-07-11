import { Button, Text, View } from "react-native";


const LoginScreen = ({ navigation }: any) => {
    return (
        <View>
            <Text>Hello World</Text>
            <Button title="Navigate to app" onPress={() => { navigation.navigate("app") }} />
            <Button title="Navigate to HomeScreen" onPress={() => {
                navigation.navigate("app", {
                    screen: "HomeScreen"
                })
            }} />
            <Button title="Navigate to ExploreScreen" onPress={() => {
                navigation.navigate("app", {
                    screen: "ExploreScreen"
                })
            }} />
        </View>
    )
}

export default LoginScreen;