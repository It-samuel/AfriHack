import React from "react";
import { createNativeStackNavigator,} from "@react-navigation/native-stack";


export default function Authen(){
    return(
        <Auth.Navigator initialRouteName="WelcomeScrn">
            <Auth.Screen 
            name ="Welcome"
            component={WelcomeScrn}
            options={{headerShown: false}}
            
            />
            <Auth.Screen 
            name ="Login"
            component={Login}
            options={{headerShown: false}}
            />
            <Auth.Screen 
            name ="DrawerNav"
            component={DrawerNav}
            options={{headerShown: false}}
            />
            
        </Auth.Navigator>
    )
}