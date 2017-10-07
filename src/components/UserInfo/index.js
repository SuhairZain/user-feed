import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'

import { connect } from 'react-redux'

import { getUserDetails } from './reducer'

import { DIVIDER } from '../../colors'
import Image from '../common/Image'
import Text from '../common/Text'

class UserInfo extends PureComponent {
  static propTypes = {
    bio: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(getUserDetails())
  }

  render() {
    const { bio, image, name } = this.props
    return (
      <View style={styles.container}>
        <Image resizeMode="cover" source={{ uri: image }} style={styles.thumbnail} />
        <View style={styles.texts}>
          <Text style={styles.name}>{name}</Text>
          <Text numberOfLines={3} style={styles.bio}>
            {bio}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderBottomColor: DIVIDER,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  thumbnail: {
    borderRadius: 50,
    height: 100,
    marginRight: 24,
    width: 100
  },
  texts: {
    flex: 1
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    width: 160
  },
  bio: {
    fontSize: 16
  }
})

const mapStateToProps = state => {
  const { bio, name, profileThumbnail } = state.user.data
  return {
    bio,
    image: profileThumbnail,
    name
  }
}

export default connect(mapStateToProps)(UserInfo)
