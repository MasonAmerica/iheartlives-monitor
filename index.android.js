/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  StatusBar,
  List,
  FlatList
} from 'react-native'
import RNANAndroidSettingsLibrary from 'react-native-android-settings-library'
import VersionNumber from 'react-native-version-number'

export default class iHeartLivesMonitor extends Component {

  constructor(props) {
    super(props)
    this.state = {
      heartrate: 70,
      patient: {
        name: 'John Doe',
        dob: '7/3/1952',
        sex: 'M'
      },
      appVersion: VersionNumber.appVersion,
      buildVersion: VersionNumber.buildVersion
    }
  }

  componentDidMount() {
    const min = 68
    const max = 73
    setInterval(() => {
      this.setState({heartrate: Math.floor(Math.random() * (max - min)) + min})
    }, 1000)

  }

  openSettings() {
    RNANAndroidSettingsLibrary.main()
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
         backgroundColor="#C2185B"
         barStyle="light-content"
       />
        <ToolbarAndroid title="Monitor"
          style={styles.toolbar}
          titleColor='#F5FCFF'
          actions={[{title: 'Settings', icon: require('./img/settings.png'), show: 'always'}]}
          onActionSelected={this.openSettings}
        />
        <View style={styles.patientContainer}>
          <View style={styles.patientLabels}>
              <Text style={{fontWeight: 'bold'}}>Patient Name</Text>
              <Text style={{fontWeight: 'bold'}}>Date of Birth</Text>
              <Text style={{fontWeight: 'bold'}}>Sex</Text>
          </View>
          <View style={styles.patientValues}>
            <Text>John Doe</Text>
            <Text>07/03/1952</Text>
            <Text>M</Text>
          </View>
        </View>
        <View style={styles.liveinfo}>
          <Text style={styles.welcome}>
            {this.state.heartrate}
          </Text>
          <Text style={styles.bpmlabel}>
            Beats Per Minute
          </Text>
          <Text style={styles.average}>
            (Average: 70 bpm)
          </Text>
        </View>
        <View style={styles.footer}>
          <Text>Version: {this.state.buildVersion} ({this.state.appVersion})</Text>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  patientLabels: {
    alignSelf: 'flex-start',
    padding: 5
  },
  patientValues: {
    padding: 5
  },
  patientContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    // backgroundColor: 'blue'
  },
  liveinfo: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  welcome: {
    fontSize: 120,
    textAlign: 'center',
    margin: 0,
  },
  bpmlabel: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  average: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 20,
    fontSize: 20,
    fontStyle: 'italic'
  },
  toolbar: {
    backgroundColor: '#E91E63',
    height: 56,
    alignSelf: 'stretch'
  },
  footer: {
    alignSelf: 'flex-end',
    margin: 5
  }
})

AppRegistry.registerComponent('iHeartLivesMonitor', () => iHeartLivesMonitor)
