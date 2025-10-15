import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [nickName, setNickName] = useState("");
  console.log(`입력된 닉네임 : ${nickName}`);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  //유효성 검사 메세지 상수로 분리화
  const INVALID_MESSAGES = {
    EMPTY: "닉네임을 입력해주세요 ‼",
    SPACE: "닉네임에 공백을 포함할 수 없어요🌀",
    LENGTH: "닉네임은 2자~12자 이내로 작성해주세요👀",
  };

  //유효성 검사 로직
  const handleInvalidInput = (message) => {
    alert(message);
    inputRef.current.focus();
    setNickName("");
  };

  //닉네임 입력 submit
  const handleStartBtn = (e) => {
    e.preventDefault();
    //닉네임 빈문자열 검사
    if (!nickName.trim()) {
      handleInvalidInput(INVALID_MESSAGES.EMPTY);
      return;
    }
    //공백 포함 검사
    if (nickName.includes(" ")) {
      handleInvalidInput(INVALID_MESSAGES.SPACE);
      return;
    }
    //닉네임 길이 검사
    if (nickName.length < 2 || nickName.length > 12) {
      handleInvalidInput(INVALID_MESSAGES.LENGTH);
      return;
    } else {
      navigate(`/quiz/${nickName}`);
    }
  };
  return (
    <main>
      <form onSubmit={handleStartBtn}>
        <h1>UQuiz?</h1>
        <label htmlFor="nickName-input">닉네임 : </label>
        <input
          ref={inputRef}
          id="nickName-input"
          name="nickName"
          type="text"
          placeholder="닉네임을 입력하세요."
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          minlength="2"
          maxlength="12"
          required
        />
        <button type="submit">시작하기</button>
      </form>
    </main>
  );
}
