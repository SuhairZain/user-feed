import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'

class UserInfo extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render() {
    const { name } = this.props
    return (
      <View>
        <Text>{name}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  name: state.user.name
})

export default connect(mapStateToProps)(UserInfo)
