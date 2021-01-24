import React from 'react';
import {View, Stylesheet} from "react-native"
import LottieView from "lottie-react-native"


function ActivityIndicator({visible=false}) {
    
        if (!visible) return null

        return <LottieView
        autoPlay
        loops
        source={require("../assets/animations/loader.json")}
        />
    
}



export default ActivityIndicator;