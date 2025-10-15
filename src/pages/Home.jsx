import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [nickName, setNickName] = useState("");
  console.log(`입력된 닉네임 : ${nickName}`);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  //유효성 검사 메세지
  const InvalidInputMessage = [""];
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
      handleInvalidInput("닉네임을 입력해주세요 ‼");
      return;
    }
    //공백 포함 검사
    if (nickName.includes(" ")) {
      handleInvalidInput("닉네임에 공백을 포함할 수 없어요🌀");
      return;
    }
    //닉네임 길이 검사
    if (nickName.length < 2 || nickName.length > 12) {
      handleInvalidInput("닉네임인 2자~12자 이내로 작성해주세요👀");
      return;
    } else {
      navigate(`/quiz/${nickName}`);
    }
  };
  return (
    <main>
      {/* onSubmit={handleStartBtn} 형태로 이벤트를 연결하는 게 React 방식 */}
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
