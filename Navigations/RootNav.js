import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Text, View } from 'react-native'

import Authen from "./AuthNav";

export default function RootNav() {
  return (
    <NavigationContainer>
        <Authen />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})