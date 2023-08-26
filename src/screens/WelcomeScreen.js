import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView>
        <View className="container bg-yellow-200 items-center">
            <View>
                <Button 
                    title="Go to Home" 
                    onPress={() => navigation.navigate("Home")} 
                />
            </View>
        </View>
    </SafeAreaView>
  );
}
