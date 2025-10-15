import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const [nickName, setNickName] = useState("");
  console.log(`입력된 닉네임 ${nickName}`);
  const navigate = useNavigate();

  //닉네임 입력 버튼 분기처리
  const handleStartBtn = (e) => {
    e.preventDefault();
    if (!nickName.trim()) {
      alert("닉네임을 입력해주세요 ‼");
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
          id="nickName-input"
          name="nickName"
          type="text"
          placeholder="닉네임을 입력하세요."
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          required
        />
        <button type="submit">시작하기</button>
      </form>
    </main>
  );
}
