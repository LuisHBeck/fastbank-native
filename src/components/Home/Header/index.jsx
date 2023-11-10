import React, { useEffect, useState } from "react";
import { Container, Logo, UserPhotoContainer, UserPhotoImage } from "./styled";
import * as api from "../../../services/api"

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  const [userPhotoUrl, setUserPhotoUrl] = useState("");
  const { jwt, registerNumber } = api.useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userPhoto = await api.getUser(jwt, registerNumber);
        setUserPhotoUrl(userPhoto.photoUrl)
        console.log(userPhotoUrl)
      }catch(err) {
        console.log("FETCH USER DATA err", err)
      }
    }
    fetchUserData()
  })

  return(
    <Container>
      <MaterialCommunityIcons name="dots-vertical" size={40} color="#e53d41"/>
      <Logo source={require("../../../../assets/becks-logo.png")}/>
      <UserPhotoContainer>
        {/* <UserPhotoImage source={require("../../../../assets/becks-logo.png")}/> */}
        <UserPhotoImage source={{ uri: userPhotoUrl }}/>
      </UserPhotoContainer>
    </Container>
  )
}

export default Header;