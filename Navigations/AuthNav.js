import React from "react";
import { createNativeStackNavigator,} from "@react-navigation/native-stack";
import SplashScrn from "../Screens/SplashScrn";
import Login from "../Screens/Login";
import OnboardingScrn from "../Screens/Onboarding/OnboardingScrn";
import SignUp from "../Screens/SignUp";
import BottomTabs from "./BottomTabs";

const Auth = createNativeStackNavigator();
export default function Authen(){
    return(
        <Auth.Navigator initialRouteName="WelcomeScrn">
            {/* <Auth.Screen 
            name ="SplashScrn"
            component={SplashScrn}
            options={{headerShown: false}}
            
            /> */}
            <Auth.Screen 
            name ="Onboardingscrn"
            component={OnboardingScrn}
            options={{headerShown: false}}
            />
            <Auth.Screen 
            name ="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Auth.Screen 
            name ="SignUp"
            component={SignUp}
            options={{headerShown: false}}
            />
            <Auth.Screen 
            name ="BottomTabs"
            component={BottomTabs}
            options={{headerShown: false}}
            />
            
            
        </Auth.Navigator>
    )
}