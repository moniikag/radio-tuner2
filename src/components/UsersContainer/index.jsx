import React, { Component } from 'react'
import { connect } from 'react-redux'

import MainArticle from '../shared/MainArticle'
import { fetchUsers } from 'actions/users'
import { getUsers, getUsersFetchStatus } from 'reducers'
import './styles.css'

class Users extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    const { users } = this.props
    return users.map(user =>
      <li key={user.login}>
        <span className="label">{user.login}:</span>
        <span>{user.repos_url}</span>
      </li>
    )
  }

  render() {
    return (
      <MainArticle>
        <section className="main-section">
          {this.props.fetching
            ? <div>Loading</div>
            : <ul id="users-list">
                {this.renderUsers()}
              </ul>
          }
        </section>
      </MainArticle>
    )
  }
}

Users.defaultProps = {
  users: [],
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  fetching: getUsersFetchStatus(state).fetching,
})

const mapDispatchToProps = {
  fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
