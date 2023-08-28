import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-mycolor">

      <View className="space-y-2">
        <Text style={{fontSize: wp(10)}} className="text-center font-bold text-grey-700">DAII</Text>
        <Text style={{fontSize: wp(4)}} className="text-center tracking-wider text-grey-600 font-semibold">The AI Assistant</Text>
      </View>

      <View className="flex-row justify-center">
        <Image source={require('../../assets/images/yello-bot-smiling-transformed.png')} style={{width: wp(75), height: wp(75), transform: [{ scale: 1.5 }] }}/>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')} 
        className="items-center"
      >
        <View style={{backgroundColor: '#fcc51a', width: wp(45)}} className="bg-buttoncolor mx-5 p-4 rounded-full flex flex-row items-center">
          <Text style={{width: wp(35), fontSize: wp(6)}} className="p-0 m-0 text-center font-bold text-white">Go</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}
