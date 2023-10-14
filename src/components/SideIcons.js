import React, { useContext } from 'react'
// import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, Image, Pressable, StyleSheet, View } from 'react-native'
import {  } from 'react-native-paper'
import { HEIGHT } from '../constants/sizes'
import GameSvg  from '../../assets/icons/console.svg' 
import ShopSvg  from '../../assets/icons/shop.svg' 
import ChatSvg  from '../../assets/icons/chat.svg' 
import PeopleSvg  from '../../assets/icons/people.svg' 
import SearchSvg  from '../../assets/icons/search.svg' 
import GroupSvg  from '../../assets/icons/group.svg' 
import ThemeContext from '../theme/ThemeContext'


const SideIconsComp = () => {

    const handlePress = () => {
        console.log("press")
    }

    const theme = useContext(ThemeContext);
  let icon;
  let themeColorsLight = theme.theme == "dark" ? "white" : "black"
  let themeColorsDark = theme.theme == "dark" ? "silver" : "silver"
  const size = 30

  return (
    <View style={{ flexDirection: "row", position: "absolute",  }}>
        <View style={{ width:60, flex: 1, top: HEIGHT * 0.4 }}>
            <Pressable onPress={handlePress} style={ styles.container } >
                {/* <Image source={require("../../assets/icons/search.png")} size={20} /> */}
                <SearchSvg fill={"none"} width={size} stroke={themeColorsLight} height={size} />
                <Text style={ styles.text }>
                    Search
                </Text>
            </Pressable>
            <Pressable onPress={handlePress} style={ styles.container } >
                {/* <Image source={require("../../assets/icons/group.png")} size={20} /> */}
                <GroupSvg fill={"none"} width={size} stroke={themeColorsLight} height={size} />
                <Text style={ styles.text }>Book a private</Text>
            </Pressable>
            <Pressable onPress={handlePress} style={ styles.container } >
                <PeopleSvg fill={"none"} width={size} stroke={themeColorsLight} height={size} />
                {/* <Image source={require("../../assets/icons/run.png")}  /> */}
                <Text style={ styles.text }>
                    Challenge Match
                </Text>
            </Pressable>
        </View>
        <View style={{  width: 60, top: HEIGHT * 0.15 }}>
            <Pressable onPress={handlePress} style={ styles.container } >
                {/* <Image source={require("../../assets/icons/shop.png")} size={20} /> */}
                <ShopSvg fill={"none"} width={size} stroke={themeColorsLight} height={size} />
                <Text style={ styles.text }>
                    Shop
                </Text>
            </Pressable> 
            <Pressable onPress={handlePress} style={ styles.container } >
                {/* <Image source={require("../../assets/icons/chat.png")} size={20} /> */}
                <ChatSvg fill={"none"} width={size} stroke={themeColorsLight} height={size} />
                <Text style={ styles.text }>
                    Inbox
                </Text>
            </Pressable> 
            <Pressable onPress={handlePress} style={ styles.container } >
                {/* <Image source={require("../../assets/icons/console.png")} size={20} /> */}
                <GameSvg fill={"none"} width={size} stroke={themeColorsLight} height={size} />
                <Text style={ styles.text }>
                    Gaming
                </Text>
            </Pressable> 
        </View>
    </View>
  )
}

export default SideIconsComp;

const styles = StyleSheet.create({
    text: {
        fontSize: 12, 
        fontWeight: "bold",
        textAlign: "center",
    },
    container: {
        marginBottom: 30,  
        width: 60, 
        alignItems: "center",
    }
  });