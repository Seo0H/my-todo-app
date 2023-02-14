import AuthForm from "../../components/auth/AuthForm";
import { useEffect, useState } from "react";
import { changeSignInStatus } from "../../modules/auth";
import { useNavigate } from "react-router-dom";
import useAuthVaild from "./../../lib/hooks/useAuthVaild";
import { signInApi } from "./../../lib/api/auth";

/**
 * @components `SigninForm` : `로그인`에 필요한 정보를 disptch로 받아와 `AuthForm`에 props로 전달합니다.
 */
const SigninForm = () => {
  const navigate = useNavigate();

  //유효성 검사 관련 handler
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [pwisValid, setPwIsValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // 로그인 버튼 활성화 handler
  const [isValid, setIsValid] = useState(false);

  //user email, password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let form = {};

  useEffect(() => {
    form = { email, password };
  }, [email, password]);

  useEffect(() => {
    if (emailIsValid && pwisValid) setIsValid(true);
  }, [emailIsValid, pwisValid]);

  // input 변화 감지 handler
  const OnChange = (e) => {
    /**
     * @param {String} name : tag name ('email' || 'password')
     * @param {String} value : user input
     */
    const { name, value } = e.target;
    const message = useAuthVaild(name, value);

    if (name === "email") {
      setEmail(value);
      if (!message) {
        setEmailIsValid(true);
        setEmailMessage("");
      } else {
        setEmailIsValid(false);
        setEmailMessage(message);
      }
    }

    if (name === "password") {
      setPassword(value);
      if (!message) {
        setPwIsValid(true);
        setPwMessage("");
      } else {
        setPwIsValid(false);
        setPwMessage(message);
      }
    }
  };

  // FORM Submit handler
  const onClick = async (e) => {
    e.preventDefault();
    try {
      const { access_token } = await signInApi({ email, password });
      localStorage.setItem("access_token", access_token);
      alert("로그인 성공");
      navigate("/todo");
    } catch ({ response: { data } }) {
      alert(data.message);
    }
  };

  return (
    <>
      <AuthForm
        type="signin"
        form={form}
        onChange={OnChange}
        onClick={onClick}
        //유효성 검사 관련 props
        isValid={isValid}
        emailMessage={emailMessage}
        pwMessage={pwMessage}
      />
    </>
  );
};

export default SigninForm;
