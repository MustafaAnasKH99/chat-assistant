import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">

      <View className="space-y-2">
        <Text style={{fontSize: wp(10)}} className="text-center font-bold text-grey-700">Daii</Text>
        <Text style={{fontSize: wp(4)}} className="text-center tracking-wider text-grey-600 font-semibold">The AI Assistant</Text>
      </View>

      <View className="flex-row justify-center">
        <Image source={require('../../assets/images/bot.png')} style={{width: wp(75), height: wp(75)}}/>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} 
        className="bg-emerald-600 mx-5 p-4 rounded-2xl"
      >
        <Text style={{fontSize: wp(6)}} className="text-center font-bold text-white">Get Started</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
