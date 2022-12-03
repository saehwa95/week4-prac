//액션
const ADD_NUMBER = "ADD_NUMBER";
const MINUS_NUMBER = "MINUS_NUMBER";

// 액션 크리에이터
export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload,
  };
};

export const minusNumber = (payload) => {
  return {
    type: MINUS_NUMBER,
    payload,
  };
};

// 초기값 세팅
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER: {
      return {
        number: state.number + action.payload,
      };
    }

    case MINUS_NUMBER: {
      return {
        number: state.number - action.payload,
      };
    }

    default:
      return state;
  }
};

export default counter;
