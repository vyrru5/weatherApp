import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Hello = (props) => {
    return (
        <View>
            <Text>Component hello with text : {props.title}</Text>
        </View>
    )
}

export default Hello

const styles = StyleSheet.create({})
