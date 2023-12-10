import { View, TouchableOpacity } from 'react-native'
import { TextInput, Text, Button } from 'react-native-paper';
import { isValidEmail, isValidObjField, updateError } from '../../utils/methods';
import { Image } from '@rneui/base';
import React from 'react'

export default function Login({ navigation }) {
    const [showPass, setShowPass] = React.useState(false);    
    const [userInfo, setUserInfo] = React.useState({
        email: '',
        password: '',
    });

    const [error, setError] = React.useState('');

    const { email, password } = userInfo

    const handleOnChangetext = (value, fieldName) => {
        setUserInfo({ ...userInfo, [fieldName]: value });
    }

    const isValidForm = () => {
        if (!isValidObjField(userInfo)) return updateError('Required all fields!', setError)

        if (!isValidEmail(email)) return updateError('Invalid Email!', setError)

        if (!password.trim() || password.length < 8) return updateError('Password is too short!', setError)

        return true;
    }

    const submitForm = async () => {
        if (isValidForm()) {
            try {
                const response = await fetch("http://192.168.8.166:8000/api/login", {
                    method: "POST",
                    headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      email: userInfo.email,
                      password: userInfo.password
                    }),
                })
            
                const result = await response.json();
                console.log("Success:", result);
                if(response.status === 200){
                    await navigation.navigate("HomePage");

                    userInfo.email = '',
                    userInfo.password = ''
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }

    return (
        <View
            style={{
                flex: 1,
                paddingVertical: 60,
                backgroundColor: '#5F6F52',
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    alignItems: 'flex-end',
                }}
            >
                  <Image 
                        style={{
                            width: 400, 
                            height: 850,
                            opacity: 0.4,
                        }}
                        source={require('../images/cover.gif')}
                />

            </View>
                <Text
                    style={{
                        padding: 20,
                        fontSize: 30,
                        textAlign: 'left',
                        color: '#d294eb',
                        
                    }}
                >Enjoy the world of entertainment.</Text>
                <Text
                    style={{
                        padding: 20,
                        fontSize: 20,
                        textAlign: 'left',
                        color: '#d294eb',
                    }}
                >Sign In</Text>
                
            
            <View
                style={{
                    paddingTop: 0,
                    paddingHorizontal: 15,
                    marginTop: 10,
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        width: 383.5,
                    }}
                >
                    {error ? <Text style={{ textAlign: 'center', color: 'red', fontSize: 18}}>{error}</Text> : null}
                </View>
                <TextInput 
                    mode='outlined'
                    autoCapitalize='none'
                    placeholder='Email'
                    value={email}
                    onChangeText={(value) => handleOnChangetext(value, 'email')}
                    style={{
                        marginVertical: 25,
                    }}
                    error={false}
                    
                />
                <TextInput
                    mode='outlined'
                    autoCapitalize='none'
                    placeholder='Password'
                    secureTextEntry={!showPass}
                    value={password}
                    onChangeText={(value) => handleOnChangetext(value, 'password')}
                    right={
                        <TextInput.Icon
                            icon={showPass ? "eye-off" : "eye"}
                            onPress={() => setShowPass(!showPass)}
                        />
                    }
                    style={{
                        marginVertical: 1,
                    }}
                />
            </View>
            <View
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexDirection: 'row',
                    marginRight: 35,
                }}
            >
               
            </View>
            <View
                style={{
                    paddingHorizontal: 80,
                    paddingVertical: 20,
                }}
            >
                <Button 
                    mode="contained"
                    icon="login"
                    buttonColor='#d294eb'
                    textColor='#FEFAE0'
                    style={{
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={submitForm}
                >
                    <Text style={{width: '60%', color: '#FEFAE0', fontSize: 18}}>Login</Text>
                </Button>
                <Button 
                    mode="outlined"
                    icon="door"
                    textColor='#d294eb'
                    style={{
                        borderColor:'#d294eb',
                        padding: 3,
                        marginVertical: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 10,
                    }}
                    labelStyle={{
                        fontSize: 30,
                    }}
                    onPress={() => navigation.pop()}
                >
                    <Text style={{width: '60%', color: '#FEFAE0', fontSize: 18}}>Exit</Text>
                </Button>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginTop: 15,
                }}
            >
                
                <TouchableOpacity
                    onPress={() => navigation.navigate("Recovery")}
                >
                    <View style={{flexDirection:"row"}}>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            marginHorizontal: 2,
                            fontSize: 16,
                        }}
                    >Forgot your</Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#d294eb',
                            marginHorizontal: 2,
                            fontSize: 16,
                        }}
                    >Password</Text>
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#d294eb',
                            marginHorizontal: 2,
                            fontSize: 15,
                        }}
                    >?</Text>


                    </View>

                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#FEFAE0',
                        marginHorizontal: 3,
                        fontSize: 15,
                    }}
                >New to Netflixxxxx?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: '#d294eb',
                            marginHorizontal: 3,
                            fontSize: 17,
                        }}
                    >Sign up now</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}