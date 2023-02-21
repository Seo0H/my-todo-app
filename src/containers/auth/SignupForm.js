import AuthForm from "../../components/auth/AuthForm";
import { useEffect, useState } from "react";
import { signUpApi } from "../../lib/api/auth";
import { useNavigate } from "react-router-dom";

/**
 * @components `SignupForm` : `회원가입`에 필요한 정보를 받아와 `AuthForm`에 props로 전달합니다.
 */
const SignupForm = () => {

  //user input email, password, setPasswordConfirm
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 각 변수를 보내는 것과, 객체로 묶어 보내는 것 중
  // 어떤게 나을지 잘 모르겠어서 일단 form 객체로 묶어서 보냈다.
  const [form, setForm] = useState({ email, password, passwordConfirm });

  useEffect(() => {
    setForm({ ...form, email, password, passwordConfirm });
  }, [email, password, passwordConfirm]);

  //유효성 검사 관련 handler
  //SigninForm 과 겹치는 부분이라 hook으로 분리를 하고자 했지만 아직 구현하지 못했다.
  const emailExp = new RegExp("@");
  const passwordExp = new RegExp("(?=.{8,})");

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [pwisValid, setPwIsValid] = useState(false);
  const [pwisConfirmValid, setPwConfirmIsValid] = useState(false);

  const [emailMessage, setEmailMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [pwConfirmMessage, setpwConfirmMessage] = useState("");

  // 회원가입 버튼 활성화 handler
  const [isValid, setIsValid] = useState(false);
  useEffect(() => {
    if (emailIsValid && pwisValid && pwisConfirmValid) setIsValid(true);
  }, [emailIsValid, pwisValid, pwisConfirmValid]);

  // input 변화 감지 handler
  const OnChange = (e) => {
    /**
     * @param {String} name : tag의 name을 의미합니다. email, password
     * @param {String} value : 사용자 input을 의미합니다.
     */
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
      if (emailExp.test(value)) {
        setEmailIsValid(true);
        setEmailMessage("");
      } else {
        setEmailIsValid(false);
        setEmailMessage("이메일에는 @를 포함해 작성해주세요.");
      }
    }

    if (name === "password") {
      setPassword(value);
      if (passwordExp.test(value)) {
        setPwMessage("");
        setPwIsValid(true);
      } else {
        setPwIsValid(false);
        setPwMessage("비밀번호는 8자 이상으로 작성해주세요.");
      }

      //예외: 비밀번호 확인이 비밀번호와 맞는 상황, 경고 메시지 안보이게 처리하는 부분
      if (form.passwordConfirm === value) {
        setPwIsValid(true);
        setpwConfirmMessage("");
        setPwMessage("");
      }

      if (value !== form.passwordConfirm) {
        setpwConfirmMessage("입력하신 비밀번호와 같게 입력해주세요.");
      }
    }

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);
      if (form.password === value) {
        setPwConfirmIsValid(true);
        setpwConfirmMessage("");
      } else {
        setPwConfirmIsValid(false);
        setpwConfirmMessage("입력하신 비밀번호와 같게 입력해주세요.");
      }
    }
  };

  // FORM Submit handler
  const navigate = useNavigate();

  const onClick = async (e) => {
    e.preventDefault();
    try {
      await signUpApi({ email, password });
      alert("회원가입 성공");
      navigate("/signin");
    } catch ({ response: { data } }) {
      alert(data.message);
    }
  };

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={OnChange}
      onClick={onClick}
      //유효성 검사 관련 props
      isValid={isValid}
      emailMessage={emailMessage}
      pwMessage={pwMessage}
      pwConfirmMessage={pwConfirmMessage}
    />
  );
};

export default SignupForm;
