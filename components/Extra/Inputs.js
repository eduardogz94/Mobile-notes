import React from 'react'
import { View } from 'react-native'
import { FormInput, FormLabel } from 'react-native-elements'
import { inputs } from '../../assets/css/styles'

const Input = (props) => {
    return (
        <View>
            <FormLabel>{props.label}</FormLabel>
            <FormInput 
                style={inputs.login}
                onChangeText={props.onChangeText}
                placeholder = {props.placeholder}
                autoCapitalize={props.autoCapitalize}
                secureTextEntry={props.secureTextEntry}/>
        </View>        
    )
};

export default Input;