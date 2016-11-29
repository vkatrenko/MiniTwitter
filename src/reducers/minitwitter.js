import {
  LOGIN_TWITTER,
  LOGOUT_TWITTER,
  TWITT_TWITTER,
  SET_INPUT_TWITTER,
  LIKE_TWITTER,
  COMMENT_TWITTER
} from '../actions/const';

const initialState = {
  user: '',
  inputText: '',
  id: 0
};

const addReply = (twitts, id, reply) => {
  for (let i = 0, l = twitts.length; i < l; i++) {
    if (twitts[i].id === id) {
      twitts[i].replies.push(reply);
      return;
    }
    if (twitts[i].replies) {
      addReply(twitts[i].replies, id, reply);
    }
  }
}

const incLikes = (twitts, id) => {
  for (let i = 0, l = twitts.length; i < l; i++) {
    if (twitts[i].id === id) {
      twitts[i].likes++;
      return;
    }
    if (twitts[i].replies) {
      incLikes(twitts[i].replies, id);
    }
  }
}

const incRetwitts = (twitts, id) => {
  for (let i = 0, l = twitts.length; i < l; i++) {
    if (twitts[i].id === id) {
      twitts[i].retwitts++;
      return;
    }
    if (twitts[i].replies) {
      incRetwitts(twitts[i].replies, id);
    }
  }
}

export default (state = initialState, action) => {

  switch(action.type) {
    case LOGIN_TWITTER: {
      return Object.assign({}, state, { inputText: '', user: state.inputText });
    }

    case LOGOUT_TWITTER: {
      return Object.assign({}, state, { inputText: '', user: '' });
    }

    case TWITT_TWITTER: {
      const feed = state.twitts ? [...state.twitts] : [];
      feed.push({
        id: state.id + Date.now().toString(),
        likes: 0,
        retwitts: 0,
        replies: [],
        user: state.user,
        twitt: state.inputText
      });
      return Object.assign({}, state, { inputText: '', twitts: feed, id: state.id + 1 });
    }

    case SET_INPUT_TWITTER: {
      return Object.assign({}, state, { inputText: action.payload });
    }

    case LIKE_TWITTER: {
      const feed = [...state.twitts];
      incLikes(feed, action.payload);
      return Object.assign({}, state, { twitts: feed });
    }

    case COMMENT_TWITTER: {
      if (action.payload.reply.trim()) {
        const twitt = {
          id: state.id + Date.now().toString(),
          likes: 0,
          retwitts: 0,
          replies: [],
          user: state.user,
          twitt: action.payload.reply
        };
        const feed = [...state.twitts];
        addReply(feed, action.payload.id, twitt);
        return Object.assign({}, state, { twitts: feed, id: state.id + 1});
      } else {
        return state;
      }
    }

    default: {
      return state;
    }
  }
}
