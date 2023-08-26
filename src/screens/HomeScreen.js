import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View className="bg-red-200">
        <View className="container bg-yellow-200 items-center">
            <View>
                <Button 
                    title="Go to Welcome" 
                    onPress={() => navigation.navigate("Welcome")} 
                />
            </View>
        </View>
    </View>
  );
}
