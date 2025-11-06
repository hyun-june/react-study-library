import { useState } from "react";
import Button from "react-bootstrap/Button";
import userStore from "../store/userStore";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const { login } = userStore();
  const navigation = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!id || !password)
      return alert("아이디랑 비밀번호를 모두 입력해주세요.");
    navigation("/");
    login(id, password);
  };

  return (
    <div className="login_container">
      <div className="Login_box">
        <h3>환영합니다</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <input
            type="text"
            placeholder="이메일 주소"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#">비밀번호를 잊으셨나요?</a>
          <Button onClick={handleLogin}>로그인</Button>
          <div style={{ textAlign: "center" }}>
            <span style={{ color: "gray", marginRight: "0.5em" }}>
              계정이 없으신가요?
            </span>
            <a href="#">회원가입</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
