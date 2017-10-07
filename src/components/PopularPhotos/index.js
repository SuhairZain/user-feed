import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'

import { getPopularFeed } from './reducer'

import Image from '../common/Image'

class PopularPhotos extends PureComponent {
  static propTypes = {
    feed: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(getPopularFeed())
  }

  keyExtractor = (item, index) => index

  renderItem = ({ item, index }) => (
    <Image style={[styles.image, index % 3 === 1 ? styles.middleImage : {}]} source={item} />
  )

  renderSeparator = () => <View style={styles.separator} />

  render() {
    const { feed } = this.props
    return (
      <View style={styles.container}>
        <FlatList
          numColumns={3}
          data={feed}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const imageSize = (Dimensions.get('screen').width - 8) / 3

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  },
  image: {
    height: imageSize,
    width: imageSize
  },
  middleImage: {
    marginHorizontal: 4
  },
  separator: {
    alignSelf: 'stretch',
    height: 4
  }
})

const mapStateToProps = state => {
  const { data } = state.popularphotos
  return {
    feed: data
  }
}

export default connect(mapStateToProps)(PopularPhotos)
