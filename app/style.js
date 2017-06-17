'use strict';

const React = require('react-native');
const {StyleSheet} = React;

module.exports = StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#044',
        color: 'white',
        padding: 7,
        marginBottom: 7
    },
    sectonText: {
        padding: 15,
        lineHeight: 25,
        textAlign: 'center'
    },
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 130,
        height: 130,
    },
    scrollView: {
        height: 500
    }
});