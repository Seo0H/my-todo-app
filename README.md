# **원티드 프리온보딩 프론트엔드**

## **0. 배포 링크 & 과제 blog**

<a href="https://wanted-pre-onboarding-frontend-seo0h.vercel.app/" target="_blank"> 🖱️배포 링크 </a>

## **1. Summary**

#### **사용 라이브러리**

```
Redux(redux-toolkit, react-redux, redux-actions),
redux-devtools, axios, Thunk,
immer, react-router-dom, styled-components
```
- redux-toolkit 을 이용해 Redux를 이용한 상태 관리 및 Thunk를 이용한 비동기 처리를 진행하였습니다.
- 불변성 유지를 위해 선택적으로 immer을 사용하여 데이터를 가공했습니다.

<hr />

## **2. 파일 구조**

```
src
├─🟨components
│  ├─auth
│  ├─common
│  └─todo
├─🟦containers
│  ├─auth
│  └─todo
├─lib
│  ├─api
│  ├─hooks
│  └─styles
├─🧩modules
└─🟥pages
```
🟨 **components**: 가져온 데이터를 조합해 view(page)로 넘기는 공간 <br/>
🟦 **containers**: Store에서 데이터를 가져오는 공간 <br/>
🧩 **modules**：Reducer가 위치한 공간. Thunk를 이용해 비동기적 작업 수행<br/>
🟥 **pages** : 컴포넌트를 보여주는, 라우터에 명시적으로 연결되는 공간. <br/>
<hr />

## **3. 기능 / 시연**

### 회원가입
<img src="https://user-images.githubusercontent.com/108770949/218331343-d32f9f84-a165-4ff5-99aa-77593ca36ae7.gif" width="500">

### 로그인
<img src="https://user-images.githubusercontent.com/108770949/218331347-2d4c57b1-37b3-41c9-875f-25dcedc94526.gif" width="500">

### TO-DO: 입력
<img src="https://user-images.githubusercontent.com/108770949/218331348-67771448-1956-47ac-94f4-f3e830e2c08e.gif" width="500">

### TO-DO: 삭제
<img src="https://user-images.githubusercontent.com/108770949/218331349-58f39a3d-16d6-4193-bbb2-3ba0bd751572.gif" width="500">

### TO-DO: 수정
<img src="https://user-images.githubusercontent.com/108770949/218331350-d55edfa4-c9b5-4cb9-b014-496674037bfb.gif" width="500">

### 로그아웃
<img src="https://user-images.githubusercontent.com/108770949/218331351-e1008275-7645-4e91-9016-f7c89caf29d1.gif" width="500">

## **4. 설치 및 실행 gif**
