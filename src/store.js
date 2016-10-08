import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLAB':
      return {
        ...state,
        blabs: [
          {
            author: state.currentAuthor,
            id: state.blabs[0].id + 1,
            text: action.text
          },
          ...state.blabs
        ]
      };
    default:
      return state;
  }
};

const initialState = {
  authors: {
    labzero: {
      username: 'Lab Zero',
      avatar: 'img/avatar.png'
    }
  },
  currentAuthor: 'labzero',
  blabs: [
    {
      author: 'labzero',
      id: 2,
      text: 'Blab three!'
    },
    {
      author: 'labzero',
      id: 1,
      text: 'Blab two!'
    },
    {
      author: 'labzero',
      id: 0,
      text: 'Blab one!'
    }
  ]
};

export default createStore(reducer, initialState);
