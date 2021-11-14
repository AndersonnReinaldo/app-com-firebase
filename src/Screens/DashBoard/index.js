import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { useNavigation, StackActions } from '@react-navigation/native'

export const DashBoard = () => {

  const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}> BEM VINDO</Text>
            <TouchableOpacity style={styles.areaBtn} onPress={() => navigation.dispatch(StackActions.popToTop)}>
                <Text style={styles.textBtn}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

        container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:'#121212'
        },
        text:{
            fontSize:40,
            color:'#FFF',
            fontWeight:'bold'
        },
        areaBtn:{
            marginTop:20,
            justifyContent: 'center',
            alignItems: 'center',
            padding:15,
            backgroundColor:'#00fff0',
            borderRadius:10
        },
        textBtn:{
            fontSize:17,
            color:'#FFF',
        }

})
