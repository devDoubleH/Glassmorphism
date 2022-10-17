import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import tw from "twrnc";
import { Video } from "expo-av";
import Icon from "react-native-vector-icons/Ionicons";
import BackgroundVideo from "./assets/BackgroundVideo.mp4";

const App = () => {
  const [status, setStatus] = useState({});

  const blur = tw`absolute top-[20%] left-[5%] right-[5%] bottom-[10%] 
  flex justify-start items-center
  overflow-hidden rounded-2xl border-white border`;

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      {/* <Video
        source={BackgroundVideo}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={tw`absolute top-0 left-0 right-0 bottom-0`}
        onPlaybackStatusUpdate={setStatus}
      /> */}
      <View style={tw`w-full h-full`}>
        <View
          style={tw` absolute top-[20%] z-10 flex w-full justify-center items-center`}
        >
          {/* <LinearGradient
            colors={["#CCD5AE", "#E9EDC9", "#FEFAE0", "#FAEDCD", "#D4A373"]}
            style={tw`absolute w-40 h-40 rounded-full -mt-20`}
          >
          </LinearGradient> */}
          <Icon
            name="md-checkmark-circle"  
            size={100}
            color="green"
            // style={tw`absolute top-1/2 left-1/2 -mt-4 -ml-4`}
          />
        </View>
        {/* <BlurView tint="light" intensity={30} style={blur}></BlurView> */}
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default App;
