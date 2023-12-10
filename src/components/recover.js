import { View } from 'react-native'
import React from 'react'
import { Button, TextInput, Text } from 'react-native-paper'

export default function Recover({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#130e17',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text
                    style={{
                        borderBottomWidth: 3,
                        borderColor: '#d294eb',
                        padding: 10,
                        fontSize: 55,
                        textAlign: 'center',
                        color: '#d294eb',
                    }}
                >Account Recovery</Text>
            <TextInput 
                    mode='outlined'
                    placeholder='Email Address'
                    style={{
                        marginVertical: 15,
                        width: '95%',
                    }}
                    error={false}
                    theme={{ fonts: { regular: 'Apple Color Emoji' } }}
                />
            <Button 
                    mode="contained"
                    icon="send"
                    buttonColor='#d294eb'
                    textColor='#FEFAE0'
                    style={{
                        padding: 3,
                        marginVertical: 12,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.navigate("HomePage")}
                >
                    <Text style={{width: '60%', color: '#FEFAE0', fontSize: 18}}>Submit</Text>
                </Button>
            <Button 
                    mode="outlined"
                    icon="door"
                    textColor='#FEFAE0'
                    style={{
                        borderColor:'#d294eb',
                        padding: 3,
                        marginVertical: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.pop()}
                >
                    <Text style={{width: '60%', color: '#FEFAE0', fontSize: 18}}>Go Back</Text>
                </Button>
        </View>
    )
}