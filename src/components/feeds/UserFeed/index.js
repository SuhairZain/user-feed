import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Dimensions, StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'

import Carousel from 'react-native-snap-carousel'

import { repeat } from '../../../utils/arrays'
import { fetchUserFeed } from '../reducer'
import { getUserFeed } from '../selector'

import Image from '../../common/Image'
import Dot from './Dot'

const sliderSize = Dimensions.get('screen').width

class UserFeed extends PureComponent {
  static propTypes = {
    feed: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  state = {
    currentIndex: 0
  }

  componentDidMount() {
    this.props.dispatch(fetchUserFeed())
  }

  onSnapToItem = index => {
    this.setState({ currentIndex: index })
  }

  onPressDot = index => {
    this.carouselRef.snapToItem(index)
  }

  renderItem = ({ item, index }) => <Image source={item} style={styles.image} />

  render() {
    const { feed } = this.props
    const { currentIndex } = this.state
    return (
      <View style={styles.container}>
        <Carousel
          data={this.props.feed}
          itemWidth={sliderSize - 32}
          sliderWidth={sliderSize}
          renderItem={this.renderItem}
          onSnapToItem={this.onSnapToItem}
          ref={ref => {
            this.carouselRef = ref
          }}
        />
        <View style={styles.feedIndicator}>
          {repeat(0, feed.length).map((_, i) => (
            <Dot key={i} index={i} selected={i === currentIndex} onSelect={this.onPressDot} />
          ))}
        </View>
      </View>
    )
  }
}

const imageSize = sliderSize - 32

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16
  },
  image: {
    height: imageSize,
    width: imageSize
  },
  feedIndicator: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 16
  }
})

const mapStateToProps = state => {
  return {
    feed: getUserFeed(state)
  }
}

export default connect(mapStateToProps)(UserFeed)
