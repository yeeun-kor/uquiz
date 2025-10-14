import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  //입력 상태 관리
  const [nickName, setNickName] = useState("");
  console.log(`입력된 닉네임 ${nickName}`);
  const navigate = useNavigate();

  //시작하기 버튼 분기처리
  const handleStartBtn = () => {
    //- 닉네임이 입력되지 않은 경우: 닉네임을 입력해주세요.라는 경고창(alert) 을 띄웁니다.
    if (!nickName) {
      alert("닉네임을 입력해주세요 ‼");
    } else {
      //- 닉네임이 입력된 경우: /quiz/(입력된 닉네임) 경로로 페이지를 라우팅
      navigate(`/quiz/${nickName}`);
    }
  };
  return (
    <main>
      <h1>UQuiz?</h1>
      <input
        type="text"
        placeholder="닉네임을 입력하세요."
        value={nickName}
        onChange={(e) => setNickName(e.target.value)}
      />
      <button onClick={handleStartBtn}>시작하기</button>
    </main>
  );
}
