import React, { Component, PropTypes } from 'react';


export default class NavigationComponent extends Component {

    static propTypes = {
      actions: PropTypes.object.isRequired,
      minitwitter: PropTypes.object.isRequired
    };

  render() {
    const { actions, minitwitter } = this.props;
    const logged = (this.props.minitwitter.user && this.props.minitwitter.user.trim().length > 0);

    return (
      <nav className="navbar navbar-default">
        {logged ?
          <span>Welcome, {minitwitter.user} !</span>
          :
          <div class="form-group">
            <label for="usr">Username:</label>
            <input
              type="text"
              class="form-control"
              id="usr"
              onKeyDown={e =>
                {if (e.keyCode === 13)
                     actions.login()
                  }
                }
              onChange={e =>
                actions.inputText(e.target.value)}
             />
          </div>
        }
        <button
          type="button"
          className="btn btn-default"
          style={{ margin: '0 10px' }}
          onClick={logged ? actions.logout : actions.login } >
          {logged ? 'logout' : 'login'}
        </button>
      </nav>
    );
  }
}
