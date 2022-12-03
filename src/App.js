import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const onChangeHandler = (e) => {
    //이벤트 핸들러가 자동으로 문자열로 설정되어 있는 상태
    const { value } = e.target;
    // 숫자형 변환을 위해 + 붙여줌
    setNumber(+value);
  };
  console.log(number);
  return (
    <div>
      <input type="number" onChange={onChangeHandler} />
      <button>더하기</button>
      <button>빼기</button>
    </div>
  );
};

export default App;
