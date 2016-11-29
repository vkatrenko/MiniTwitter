import React, { PropTypes } from 'react';

class TwittComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reply: '' };
  }
  render() {
    const { actions, twitt } = this.props;
    return (
      <section className="twitt" style={{ display: 'flex', alignItems: 'flex-start', margin: '10px 20px', border: '1px solid #ccc' , borderradius: '3px' }}>
        <img src="http://avatarbox.net/avatars/img19/blue_mosaic_avatar_picture_71487.gif" />
        <div style={{flexGrow: '2'}}>
          <header>
            <h3>{twitt.user}</h3>
          </header>
          <main>
            <section>{twitt.twitt}</section>
            {twitt.replies.map(reply =>
               <TwittComponent
                key={reply.id}
                twitt={reply}
                actions={actions}
                />)
            }
          </main>
          <footer style={{ display: 'flex', margin: '10px 0' }}>
            <div>
              <input
                type="text"
                class="form-control"

                placeholder="reply"
                value={this.state.reply}
                onKeyDown={e => {if (e.keyCode === 13) {
                  actions.reply({ id: twitt.id, reply: this.state.reply});
                  this.setState({ reply: '' })
                }}}
                onChange={e => this.setState({ reply: e.target.value })}
              />
              <button type="button" className="btn btn-success" style={{ margin: '0 10px' }}
                onClick={() => {
                  actions.reply({ id: twitt.id, reply: this.state.reply});
                  this.setState({ reply: '' })
                }}>
                comment
              </button>
            </div>
            <div style={{ margin: '0 10px', padding: '0px' }}>
              {twitt.likes}
              <button
                type="button"
                className="btn btn-default"
                style={{ margin: '0 10px' }}
                onClick={() => actions.like(twitt.id)}>
                like
              </button>
            </div>
          </footer>
        </div>
      </section>
    );
  }
}

TwittComponent.displayName = 'TwittComponent';

TwittComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  twitt: PropTypes.object.isRequired
};

export default TwittComponent;
