import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { CalendarDaysIcon, MagnifyingGlassIcon, MapPinIcon } from "react-native-heroicons/outline";


const HomeScreen = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [location, setLocation] = useState([1, 2, 3]);
    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    }, []);

    return (
        <View className="flex-1 relative">
            <Image blurRadius={50} className="absolute h-full w-full" source={require("../assets/images/background.jpg")}/>
            <SafeAreaView className="flex flex-1 relative">
                <View style={{height:"7%"}} className="mx-4 z-30 relative mt-12">
                    <View className="relative flex-row justify-end items-center rounded-full" style={{backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent"}}>
                        {showSearch ? <TextInput 
                            className="pl-6 flex-1 text-base h-10 text-white" 
                            placeholder="Search Place" 
                            placeholderTextColor={"lightgray"}
                        /> : null}

                        <TouchableOpacity onPress={() => setShowSearch(!showSearch)} style={{backgroundColor: theme.bgWhite(0.3)}} className="p-3 m-1 rounded-full">
                            <MagnifyingGlassIcon size={25} color="white"/>
                        </TouchableOpacity>

                        {
                            location.length > 0 && showSearch ? (
                                <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                                    {
                                        location.map((item, index) => {
                                            let borderShow = index + 1 != location.length;
                                            let border = borderShow ? " border-b-2 border-b-gray-400" : "";

                                            return (
                                                <TouchableOpacity key={index} className={"flex-row items-center border-0 p-3 px-4 shadow-md" + border}>
                                                    <MapPinIcon size={23} color="black" />
                                                    <Text className="ml-3 text-lg text-black">Narail, Dhaka, Bangladesh</Text>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </View>
                            ) : null
                        }
                    </View>
                </View>

                <View className="mx-4 flex flex-1 justify-around mb-2">
                    <Text className="text-center text-white font-bold text-xl">
                        Narail, Dhaka,
                        <Text className="text-center text-gray-300 font-semibold text-lg"> Bangladesh</Text>
                    </Text>

                    <View className="flex-row justify-center">
                        <Image source={require("../assets/images/weather.png")} className="w-52 h-52" />
                    </View>

                    <View className="space-y-2">
                        <Text className="text-white text-7xl text-center font-semibold ml-5">23&#176;</Text>
                        <Text className="text-white text-xl text-center tracking-widest">Partly Cloudy</Text>
                    </View>

                    <View className="flex-row justify-between mx-4">
                        
                        <View className="flex-row space-x-2 items-center">
                            <Image source={require("../assets/images/wind.png")} className="h-6 w-6"/>
                            <Text className="text-white font-semibold text-base">33km</Text>
                        </View>

                        <View className="flex-row space-x-2 items-center">
                            <Image source={require("../assets/images/drop.png")} className="h-6 w-6"/>
                            <Text className="text-white font-semibold text-base">33%</Text>
                        </View>

                        <View className="flex-row space-x-2 items-center">
                            <Image source={require("../assets/images/sun.png")} className="h-6 w-6"/>
                            <Text className="text-white font-semibold text-base">6:10 AM</Text>
                        </View>

                    </View>

                    <View className="mb-2 space-y-3">
                        <View className="flex-row mx-5 items-center space-x-2">
                            <CalendarDaysIcon size={25} color="white"/>
                            <Text className="text-white font-normal text-base">Daily forecast</Text>
                        </View>

                        <ScrollView horizontal contentContainerStyle={{paddingHorizontal:15}} showsHorizontalScrollIndicator={false}>

                            <View className={`flex justify-center items-center rounded-3xl py-4 space-y-1 mr-4 w-24`} style={{backgroundColor: theme.bgWhite(0.2)}}>
                                <Image source={require("../assets/images/havyrain.png")} className="w-11 h-11" />
                                <Text className="text-white">Monday</Text>
                                <Text className="text-white text-md text-center font-semibold">23&#176;</Text>
                            </View>

                            <View className={`flex justify-center items-center rounded-3xl py-4 space-y-1 mr-4 w-24`} style={{backgroundColor: theme.bgWhite(0.2)}}>
                                <Image source={require("../assets/images/havyrain.png")} className="w-11 h-11" />
                                <Text className="text-white">Monday</Text>
                                <Text className="text-white text-md text-center font-semibold">23&#176;</Text>
                            </View>

                            <View className={`flex justify-center items-center rounded-3xl py-4 space-y-1 mr-4 w-24`} style={{backgroundColor: theme.bgWhite(0.2)}}>
                                <Image source={require("../assets/images/havyrain.png")} className="w-11 h-11" />
                                <Text className="text-white">Monday</Text>
                                <Text className="text-white text-md text-center font-semibold">23&#176;</Text>
                            </View>

                            <View className={`flex justify-center items-center rounded-3xl py-4 space-y-1 mr-4 w-24`} style={{backgroundColor: theme.bgWhite(0.2)}}>
                                <Image source={require("../assets/images/havyrain.png")} className="w-11 h-11" />
                                <Text className="text-white">Monday</Text>
                                <Text className="text-white text-md text-center font-semibold">23&#176;</Text>
                            </View>

                            <View className={`flex justify-center items-center rounded-3xl py-4 space-y-1 w-24`} style={{backgroundColor: theme.bgWhite(0.2)}}>
                                <Image source={require("../assets/images/havyrain.png")} className="w-11 h-11" />
                                <Text className="text-white">Monday</Text>
                                <Text className="text-white text-md text-center font-semibold">23&#176;</Text>
                            </View>
                            
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen;
