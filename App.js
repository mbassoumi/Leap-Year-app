/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, StatusBar, Text, TextInput, Button, Alert} from 'react-native';
import {Container, Header, Content, Card, CardItem, Body, Text as NativeBaseText} from "native-base";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            inputYear: undefined,
            isLeapYear: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize: 25}}>فحص السنة الكبيسة</Text>
                </View>
                <View style={styles.body}>
                    <Card>
                        <CardItem>
                            <Card style={styles.questionInput}>
                                <CardItem>
                                    <TextInput
                                        onChangeText={this.onChangeYear}
                                        keyboardType="number-pad"
                                        style={styles.yearInput}
                                        placeholder="ادخل السنة"
                                    />
                                </CardItem>
                            </Card>
                        </CardItem>
                        <CardItem>
                            <View style={styles.outputView}>
                                {this.getOutput()}
                            </View>
                        </CardItem>
                    </Card>
                </View>
                <View style={styles.footer}>
                    <FontAwesomeIcon name="copyright" size={13}/>
                    <Text>Majd Basem Bassoumi </Text>
                </View>
            </View>

        );
    }

    onChangeYear = (year) => {
        this.setState({
            inputYear: parseInt(year),
            isLeapYear: !this.state.isLeapYear
        });
    };

    getOutput = () => {
        if (this.state.inputYear === undefined || isNaN(this.state.inputYear)) {
            return null;
        }
        let outputText = "ليست سنة كبيسة";
        let color = "red";
        const year = this.state.inputYear;
        if ((year % 4 === 0)
            && (
                (year % 100 !== 0)
                || (
                    year % 100 === 0
                    && year % 400 === 0
                )
            )
        ) {
            outputText = "سنة كبيسة";
            color = "green";
        }

        return (
            <Text style={
                [
                    styles.outputText,
                    {color: color}
                ]
            }> {outputText} </Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    header: {
        // color: "white",
        flex: 4,
        justifyContent: 'center',
        fontSize: 25,

        // borderWidth: 1,
        // borderColor: "blue",
        // borderColor: "green",
    },

    body: {
        flex: 15,
        width: "90%",
        // justifyContent: 'center',
        justifyContent: 'flex-start',
        flexDirection: "column",
        // alignItems: 'center',
        // borderWidth: 1,
        // borderColor: "red",
    },


    footer: {
        flex: 1,
        // height: "30%",
        width: "100%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 0,
        borderTopWidth: 1,
        borderColor: "gray",
    },


    questionInputCardItem: {
        flex: 1,
        width: "90%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 10,
    },

    checkButtonCardItem: {
        alignItems: 'center',
        // borderColor: "blue",
        // borderWidth: 1,
        // margin: 10,
    },

    questionText: {
        fontSize: 20,
        alignItems: "center",
        alignSelf: "center",
        // borderColor: "blue",
        // borderWidth: 1,
    },

    questionInput: {
        flex: 1,
        alignItems: "center",
        alignSelf: "center",
        // padding: 10
    },

    yearInput: {
        // height: 50,
        fontSize: 20,
        margin: 15,
        padding: 15,
        alignItems: "center",
        alignSelf: "center",
        // borderColor: "orange",
        // borderWidth: 1,
    },

    checkButtonView: {
        // borderColor: "orange",
        // borderWidth: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
    },

    outputView: {
        alignItems: 'center',
        width: "100%",
    },

    outputText: {
        // color: "red",
        fontSize: 25,
    },

});
