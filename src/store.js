import { createStore } from 'redux';
import { arrayOf, normalize, Schema } from 'normalizr';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLAB':
      const newId = state.blabs.result[0] + 1;
      return {
        ...state,
        blabs: {
          entities: {
            blabs: {
              ...state.blabs.entities.blabs,
              [newId]: {
                author: state.currentAuthor,
                id: newId,
                text: action.text
              }
            }
          },
          result: [
            newId,
            ...state.blabs.result
          ]
        }
      };
    default:
      return state;
  }
};

const blab = new Schema('blabs');

const blabList = [
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
];

const initialState = {
  authors: {
    labzero: {
      username: 'Lab Zero',
      avatar: 'img/avatar.png'
    }
  },
  currentAuthor: 'labzero',
  blabs: normalize(blabList, arrayOf(blab))
};

export default createStore(reducer, initialState);
