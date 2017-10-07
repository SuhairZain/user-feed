import React, { PureComponent } from 'react'
import { Platform, ScrollView, StyleSheet, View } from 'react-native'

import { Provider } from 'react-redux'

import { setupStore } from './redux'

import UserInfo from './components/UserInfo'
import UserFeed from './components/feeds/UserFeed'
import PopularPhotos from './components/feeds/PopularPhotos'

export default class UserInfoApp extends PureComponent {
  render() {
    return (
      <Provider store={setupStore()}>
        <ScrollView>
          <View style={styles.container}>
            <UserInfo />
            <UserFeed />
            <PopularPhotos />
          </View>
        </ScrollView>
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
