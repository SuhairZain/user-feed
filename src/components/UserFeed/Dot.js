import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Animated, StyleSheet, TouchableOpacity } from 'react-native'

import { DarkGray, Gray } from '../../colors'

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

export default class Dot extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      dotScale: new Animated.Value(this.getDotScale(props))
    }
  }

  static propTypes = {
    index: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.props.selected) {
      this.animate(nextProps)
    }
  }

  getDotScale = props => (props.selected ? 1.3 : 1)

  animate = props => {
    Animated.timing(this.state.dotScale, {
      duration: 100,
      toValue: this.getDotScale(props)
    }).start()
  }

  onPress = () => {
    this.props.onSelect(this.props.index)
  }

  render() {
    const { index } = this.props
    const { dotScale } = this.state

    const style = [
      styles.dot,
      {
        backgroundColor: dotScale.interpolate({
          inputRange: [1, 1.3],
          outputRange: [Gray, DarkGray]
        }),
        transform: [{ scale: dotScale }]
      }
    ]

    return (
      <AnimatedTouchableOpacity style={style} onPress={this.onPress}>
        <Animated.View />
      </AnimatedTouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  dot: {
    borderRadius: 6,
    height: 12,
    marginRight: 16,
    width: 12
  }
})
