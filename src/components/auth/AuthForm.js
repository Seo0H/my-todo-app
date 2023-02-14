import { Link } from "react-router-dom";
import {
  AuthFormBlock,
  Footer,
  StyledButton,
  StyledInput,
  StyledP,
  WarnMessage,
} from "./style";

const textMap = {
  signup: "회원가입",
  signin: "로그인",
};

/**
 * @param {string} type : signup, signup 을 알려주는 매개 변수
 * @param {Object} form : email, password, passwordConfirm 의 값을 담고있는 매개 변수
 */
const AuthForm = ({
  type,
  form,

  onChange,
  onClick,

  isValid,
  emailMessage,
  pwMessage,
  pwConfirmMessage,
}) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>
        {text}
        {type === "signup" && (
          <div>
            <p> 사용하시는 이메일이 아닌 </p>
            <p>테스트 이메일로 가입 해주세요.</p>
          </div>
        )}{" "}
      </h3>
      <form method="post">
        <StyledInput
          data-testid="email-input"
          autoComplete="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          defaltvalue={form.email}
        />
        <WarnMessage> {emailMessage} </WarnMessage>
        <StyledInput
          data-testid="password-input"
          autoComplete="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          defaltvalue={form.password}
          onChange={onChange}
        />
        <WarnMessage> {pwMessage} </WarnMessage>
        {type === "signup" && (
          <>
            <StyledInput
              autoComplete="new-password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              defaltvalue={form.passwordConfirm}
            />
            <WarnMessage> {pwConfirmMessage} </WarnMessage>
          </>
        )}

        {type === "signup" ? (
          <StyledButton
            onClick={onClick}
            fullWidth
            data-testid="signup-button"
            {...(isValid ? {} : { disabled: true })}
          >
            회원가입
          </StyledButton>
        ) : (
          <StyledButton
            onClick={onClick}
            fullWidth
            data-testid="signin-button"
            {...(isValid ? { disabled: false } : { disabled: true })}
          >
            로그인
          </StyledButton>
        )}
      </form>

      <Footer>
        <div>
          {type === "signup" ? (
            <Link to="/signin">로그인</Link>
          ) : (
            <Link to="/signup">회원가입</Link>
          )}
        </div>
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
