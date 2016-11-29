import React, { Component, PropTypes } from 'react';
import Twitt from './TwittComponent/TwittComponent';
import Navigation from './Navigation/Navigation';


export default class MiniTwitter extends Component {

   static propTypes = {
    actions: PropTypes.object.isRequired,
    minitwitter: PropTypes.object.isRequired
  };

  render () {
    const { actions, minitwitter } = this.props;
    const logged = (this.props.minitwitter.user && this.props.minitwitter.user.trim().length > 0);

    return (
      <section className="minitwitter">
        <header>
          <Navigation minitwitter={this.props.minitwitter} actions={this.props.actions} />
        </header>
        <main>
        {logged ?
          <div>
            <input
              value={minitwitter.inputText}
              placeholder={logged ? 'new twitt' : 'username'}
              onKeyDown={e =>
                {if (e.keyCode === 13)
                     actions.twitt()
                  }
                }
              onChange={e => actions.inputText(e.target.value)}
            />
            <button
              type="button" className="btn btn-default"
              style={{ margin: '0 10px' }}
              onClick={actions.twitt} >
              Tweet
            </button>
              {minitwitter.twitts && minitwitter.twitts.map(twitt =>
                <Twitt key={twitt.id} twitt={twitt} actions={actions} />)}
          </div>
          :
          <div>
            Please login
          </div>}
        </main>
      </section>
    );
  }
}
