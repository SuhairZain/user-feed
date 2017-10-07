import React, { PureComponent } from 'react'
import { StyleSheet, Text, TextProperties, View } from 'react-native'

import { repeat } from '../../utils/arrays'
import { FETCHING_DATA, PLACEHOLDER_TEXT } from '../../utils/constants'

import { Black, PLACEHOLDER } from '../../colors'

export default class AppText extends PureComponent {
  static propTypes = {
    ...TextProperties
  }

  static defaultProps = {
    numberOfLines: 1
  }

  render() {
    const { children, numberOfLines, style, ...props } = this.props

    const showPlaceholder = children === FETCHING_DATA
    const ownStyle = showPlaceholder ? styles.fetchingPlaceholder : styles.defaultStyle

    return showPlaceholder ? (
      <View style={styles.placeholderContainer}>
        {repeat(PLACEHOLDER_TEXT, numberOfLines).map((text, i) => (
          <Text key={i} style={[ownStyle, style]} {...props}>
            {text}
          </Text>
        ))}
      </View>
    ) : (
      <Text style={[ownStyle, style]} numberOfLines={numberOfLines} {...props}>
        {children}
      </Text>
    )
  }
}

const commonStyle = {
  margin: 0,
  padding: 0
}

const styles = StyleSheet.create({
  defaultStyle: {
    ...commonStyle,
    color: Black
  },
  fetchingPlaceholder: {
    ...commonStyle,
    backgroundColor: PLACEHOLDER,
    color: PLACEHOLDER,
    marginBottom: 4
  },
  placeholderContainer: {}
})
