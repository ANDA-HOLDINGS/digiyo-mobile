import {
  Text,
  View,
  BackHandler,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Colors, Default, Fonts } from "../../constants/styles2";
import Ionicons from "react-native-vector-icons/Ionicons";
import FollowingAndFollowersCard from "../../components/followingAndFollowersCard";
import { useTranslation } from "react-i18next";
import MyStatusBar from "../../components/MyStatusBar";
import ThemeContext from "../../theme/ThemeContext";
import { FOLLOW } from "../../config/urls";
import axios from "axios";
import { useSelector } from "react-redux";

const FollowersScreen = ({ navigation, isHeader }) => {

  const theme = useContext(ThemeContext)

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`followersScreen:${key}`);
  }

  const backAction = () => {
    navigation.pop();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  const followersList = [
    {
      key: "1",
      image: require("../../../assets/images/rect.png"),
      name: "Wade Warren",
      followers: "3907",
      follow: true,
    },
    {
      key: "2",
      image: require("../../../assets/images/rect1.png"),
      name: "Esther Howard",
      followers: "3907",
      follow: true,
    },
    {
      key: "3",
      image: require("../../../assets/images/rect.png"),
      name: "Leslie Alexander",
      followers: "3907",
      follow: true,
    },
    {
      key: "4",
      image: require("../../../assets/images/rect2.png"),
      name: "Robert Fox",
      followers: "3907",
      follow: true,
    },
    {
      key: "5",
      image: require("../../../assets/images/rect.png"),
      name: "Albert Flores",
      followers: "3907",
      follow: false,
    },
    {
      key: "6",
      image: require("../../../assets/images/rect2.png"),
      name: "Floyd Miles",
      followers: "3907",
      follow: true,
    },
    {
      key: "7",
      image: require("../../../assets/images/rect.png"),
      name: "Courtney Henry",
      followers: "3907",
      follow: true,
    },
    {
      key: "8",
      image: require("../../../assets/images/rect.png"),
      name: "Arlene McCoy",
      followers: "3907",
      follow: true,
    },
    {
      key: "9",
      image: require("../../../assets/images/rect2.png"),
      name: "Kathryn Murphy",
      followers: "3907",
      follow: true,
    },
    {
      key: "10",
      image: require("../../../assets/images/rect1.png"),
      name: "Courtney Henry",
      followers: "3907",
      follow: true,
    },
    {
      key: "11",
      image: require("../../../assets/images/rect.png"),
      name: "Cameron Williamson",
      followers: "3907",
      follow: true,
    },
    {
      key: "12",
      image: require("../../../assets/images/rect.png"),
      name: "Guy Hawkins",
      followers: "3907",
      follow: true,
    },
    {
      key: "13",
      image: require("../../../assets/images/rect1.png"),
      name: "Jacob Jones",
      followers: "3907",
      follow: true,
    },
  ];

  const [followersData, setFollowersData] = useState([]);

  function extractAuthorization(cookieString) {
    const cookies = cookieString.split(';');
    let authorization = '';
  
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith('Authorization=')) {
        authorization = cookie.substring('Authorization='.length);
        break;
      }
    }
  
    return authorization;
  }
  
  const userToken = useSelector(state=>state.auth.userData.token)
  
  const auth = extractAuthorization(userToken)
  const userId = useSelector(state=>state.auth.userData.authenticated_user.user_id)

  // console.log(auth)

  const fetchFollowers = async () => {

    const config = {
      method: "get",
      url: FOLLOW+userId+"/followers",
      // data: formdata,
      headers: {
        'Authorization': auth,
        "Content-Type": "multipart/form-data", // This will set the correct 'Content-Type' header
      }
    };
    try {
      // setLoading(true)
      // let res = getUserPosts(auth,  userId)
      await axios(config).then(
        (response) => {
          setFollowersData(response.data)
          console.log(response.data)
        }
    ).catch((error) => {
      console.log("error 1111111111111",error)
    } )
    
    // console.log("---------",res)
    // setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchFollowers()
  }, [])


  const onSelectItem = (item) => {
    const newItem = followersData.map((val) => {
      if (val.key === item.key) {
        return { ...val, follow: !val.follow };
      } else {
        return val;
      }
    });
    setFollowersData(newItem);
  };

  const renderItem = ({ item }) => {
    return (
      <>
        <FollowingAndFollowersCard
          image={item.image}
          name={item.username}
          followers={item.followers}
          follow={item.follow}
          onClickHandler={() => onSelectItem(item)}
        />
      </>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: theme.backgroundColor }}>
      <MyStatusBar />
      {isHeader == true ? (
        <View
          style={{
            flexDirection: isRtl ? "row-reverse" : "row",
            alignItems: "center",
            paddingVertical: Default.fixPadding * 1.2,
            paddingHorizontal: Default.fixPadding * 2,
          }}
        >
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Ionicons
              name={isRtl ? "chevron-forward-outline" : "chevron-back-outline"}
              size={25}
              color={Colors.white}
            />
          </TouchableOpacity>
          <Text
            style={{
              ...Fonts.SemiBold18white,
              marginHorizontal: Default.fixPadding * 1.2,
            }}
          >
            {tr("followers")}
          </Text>
        </View>

      ) : (
        <></>
      )}

      <FlatList
        data={followersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Default.fixPadding * 1.3,
        }}
      />
    </View>
  );
};

export default FollowersScreen;
