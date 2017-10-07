import React, { PureComponent } from 'react'
import { Platform, StyleSheet, View } from 'react-native'

import { Provider } from 'react-redux'

import { setupStore } from './redux'

import UserInfo from './components/UserInfo'

export default class UserInfoApp extends PureComponent {
  render() {
    return (
      <Provider store={setupStore()}>
        <View style={styles.container}>
          <UserInfo />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.select({
      android: 0,
      ios: 20
    })
  }
})
