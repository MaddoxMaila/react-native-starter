import React, {useContext, useState} from "react";
import { View, StyleSheet } from 'react-native'
import { Center, AppButton, Card, Media, Input, Texter, Space } from '../base'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import {AuthContext} from '../../contexts/Authentication'

interface LoginBuilderProps {}




const LoginBuilder : React.FC<LoginBuilderProps> = () => {

    const {authUser, Account} = useContext(AuthContext)
    const [email, setEmail] = useState<any>("")

    return (
        <View style={styles.view}>
            <Media 
                Left={<Texter text="Brackr" font="text-max"/>}
                Body={null}
                Right={
                    <AppButton 
                        title="Create Account"
                        loading={false}
                        block={false}

                    />
                }
            />
            <Space size="10%" />

            <Texter text="Login Into Your Brackr Account" font="text-max" />

            <Space size="2%" />
            <Media 
                Right={false}
                Body={
                    <View>
                        <Texter text="Email or Username" font="text-grey-sm" />
                        <Space size="0.7%" />
                        <Input hint="Email or username" type="email-address" ontype={text => setEmail(text)}/>

                        <Space size="2%" />

                        <Texter text="Password" font="text-grey-sm" />
                        <Space size="0.7%" />
                        <Input hint="Password" type="visible-password" secure={true} />

                        <Space size="2%" />

                        <Media 
                            Left={
                                <AppButton press={() => {

                                    // authUser({username : email});
                                    // if(Account) alert('Hello World')
                                    alert("login pressed")

                                }} 
                                title="Login"
                                loading={false}
                                block={true} 
                             />
                            }

                            Body={
                                <Texter text={Account?.username} />
                            }

                            Right={
                                <Texter text={email} 
                                />
                            }
                        />

                    </View>
                }
            />

        </View>
    )
}

export default LoginBuilder

const styles = StyleSheet.create({
    view : {
        padding: wp("3%")
    }
})