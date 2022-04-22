import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'
import { StyleSheet } from 'react-native'
import { Theme } from '../../contexts/contextTypes'

export const buttonSyle = (theme: Theme) => {
    return StyleSheet.create({
        btn : {
            color : '#fff',
            backgroundColor : theme.colors.primaryColor, //'#007bff'
            display : "flex",
            textAlign : 'center',
            textAlignVertical: 'center',
        },
        btnLg : {
            paddingHorizontal: wp("3.5%"),
            paddingVertical: hp("1.5%"),
            fontSize : wp("2%"),
            borderRadius : 10,
        },
        btnBlock : {
            width : wp("100%"),
            paddingHorizontal: wp("3.5%"),
            paddingVertical: hp("1.5%"),
            fontSize : wp("2%"),
            borderRadius : 10,
        },
        text : {
            color : 'red',
            fontSize : wp("3.5%"),
            fontWeight : 'bold',
        }
    
    })
}
