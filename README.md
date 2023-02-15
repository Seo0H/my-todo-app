# **원티드 프리온보딩 프론트엔드**

## **0. 배포 링크 & 과제 blog**

### <a href="https://seoh-my-to-do-app.vercel.app/" target="_blank"> **🖱️배포 링크** </a>
### <a href="https://seo0h.tistory.com/18" target="_blank"> **✏️ 블로그 숏 에세이** </a>
<hr/>

## **1. Summary**

### **사용 라이브러리**

```
axios, react-router-dom, styled-components
```

### **파일 구조**

```
src
├─🟨components
├─🟦containers
├─lib
└─🟥pages
```
🟨 **components**: 가져온 데이터를 조합해 view(page)로 넘기는 파일 모음 <br/>
🟦 **containers**: 서버 데이터를 가져오는 공간 <br/>
🟥 **pages** : 컴포넌트를 보여주는, 라우터에 명시적으로 연결하는 파일 모음.
<br/>
<br/>

## **2. 기능 / 시연**

- **`/signup`**
  - 회원가입 / 로그인 기능을 구현하였습니다.
  - 추가적으로 회원가입 시 '로그인 확인' 기능을 넣어 구현하였습니다.

- **`/todo`**
  - todo 추가, 삭제, 수정 기능을 구현하였습니다.
  - 추가적으로 로그아웃 버튼을 구현하였습니다.

## **4. 설치 및 실행**

1. root 위치에 .env 파일 추가
```
REACT_APP_API_URL=https://pre-onboarding-selection-task.shop
```
2. 실행
```
npm install // install node_modules
npm start
```

p.s. 시작을 redux로 작업해서, commit history는 <a href="https://github.com/Seo0H/wanted-pre-onboarding-frontend-redux-ver" target="_blank">
wanted-pre-onboarding-frontend-redux-ver </a> 에서 확인 가능합니다.
