import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counter";

const App = () => {
  const [number, setNumber] = useState(0);

  const globalNumber = useSelector((state) => state.counter.number);

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    //이벤트 핸들러가 자동으로 문자열로 설정되어 있는 상태
    const { value } = e.target;
    // 숫자형 변환을 위해 + 붙여줌
    setNumber(+value);
  };

  const onClickAddNumberHandler = () => {
    dispatch(addNumber(number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(minusNumber(number));
  };

  console.log(number);

  return (
    <div>
      {globalNumber}
      <input type="number" onChange={onChangeHandler} />
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </div>
  );
};

export default App;
