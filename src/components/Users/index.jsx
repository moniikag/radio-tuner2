import React, { Component } from 'react'

import MainArticle from '../shared/MainArticle'
import './styles.css'

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { login: 'Tom', repos_url: 'url1' },
        { login: 'Eric', repos_url: 'url2' },
        { login: 'Kate', repos_url: 'url3' },
      ],
    }
  }

  renderUsers() {
    const { users } = this.state
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
          <ul id="users-list">
            {this.renderUsers()}
          </ul>
        </section>
      </MainArticle>
    )
  }
}

export default Users
