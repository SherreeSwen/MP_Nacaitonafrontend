import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Image } from '@rneui/base';

export default function Main({ navigation }) {

    return (
        <View 
            style={{
                flex: 1, 
                backgroundColor: '#130e17',
                justifyContent: 'center',
                alignItems: 'center',   
                flexDirection: 'column',
            }}
        >
            <Image 
                    style={{
                        width: 280, 
                        height: 280,
                        marginBottom: 20,
                    }}
                    source={require('../images/image1.jpg')}
            />
            <Text style={{
                    marginBottom: 80,
                    color: '#d294eb',
                    fontSize: 30,
                    textAlign: 'center',

                }}
            >WATCH MOVIES{"\n"}ANYWHERE, ANYTIME.</Text>

            <TouchableOpacity 
                style={{    
                    borderColor: '#d294eb',
                    borderWidth: 1,
                    width: 250,
                    height: 50,
                }}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={{
                    backgroundColor:'#d294eb',
                    color: '#FEFAE0',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                }}>Click here to continue!</Text>
            </TouchableOpacity>
        </View>
    )
}