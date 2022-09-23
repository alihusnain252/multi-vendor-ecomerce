

import {
    StyleSheet,
    Text,TouchableOpacity, 
    View,
  } from 'react-native';

export const SignIn =({navigation})=>{


    return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center',}}>
             <Text style={{color:'black', fontSize:18}}>Sign in Component</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('MyTabs')}>
                <Text style={{color:'black', fontSize:18, padding:20, backgroundColor:'red', marginTop:20}} >Go To Home</Text>
            </TouchableOpacity>
        </View>
    )
}