import React, { PureComponent } from 'react'
import { StyleSheet, Image, ImageProperties, View } from 'react-native'

import { FETCHING_DATA } from '../../constants'

import { PLACEHOLDER } from '../../colors'

export default class AppImage extends PureComponent {
  static propTypes = {
    ...ImageProperties
  }

  static defaultProps = {}

  render() {
    const { source, style, ...props } = this.props

    const showPlaceholder = this.props.source && this.props.source.uri === FETCHING_DATA
    const ownStyle = showPlaceholder ? styles.fetchingPlaceholder : styles.defaultStyle

    return showPlaceholder ? (
      <View style={[ownStyle, style]} {...props} />
    ) : (
      <Image style={[ownStyle, style]} source={source} {...props} />
    )
  }
}

const commonStyle = {}

const styles = StyleSheet.create({
  defaultStyle: {
    ...commonStyle
  },
  fetchingPlaceholder: {
    ...commonStyle,
    backgroundColor: PLACEHOLDER
  }
})
