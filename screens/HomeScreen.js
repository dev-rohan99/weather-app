import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme/theme';
import { MagnifyingGlassIcon, MapPinIcon } from "react-native-heroicons/outline";


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
            <Image blurRadius={10} className="absolute h-full w-full" source={require("../assets/images/background.jpg")}/>
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
            </SafeAreaView>
        </View>
    )
}

export default HomeScreen;
