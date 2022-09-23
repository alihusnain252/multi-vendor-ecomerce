

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';

export const Welcome =({navigation})=>{


    return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center',}}>
            <Text style={{color:'black', fontSize:18}}>Welcome Component</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                <Text style={{color:'black', fontSize:18, padding:20, backgroundColor:'red', marginTop:20}} >Signin</Text>
            </TouchableOpacity>
        </View>
    )
}