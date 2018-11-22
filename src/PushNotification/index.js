import React, { Component, Fragment } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class PushNotification extends Component {
  state = {
    label: ''
  }

  handlePushNotif = async () => {
    const { label } = this.state
    await this.props.pushNotificationMutation({
      variables: {
        label
      }
    })
    this.setState({ label: '' });
  }

  render() {
    return (
      <Fragment>
        <input
          value={this.state.label}
          onChange={e => this.setState({ label: e.target.value })}
          type="text"
          placeholder="A label"
        />
        <button onClick={this.handlePushNotif}>Submit</button>
      </Fragment>
    )
  }

  _pushNotification = async () => {
    
  }
}

const POST_MUTATION = gql`
mutation PushNotificationMutation($label: String!){
  pushNotification(label: $label) {
    label
  }
}
`

export default graphql(POST_MUTATION, { name: 'pushNotificationMutation' })(PushNotification)