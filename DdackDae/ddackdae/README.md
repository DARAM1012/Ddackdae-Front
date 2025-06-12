# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


```
ddackdae
├─ Dockerfile
├─ eslint.config.js
├─ index.html
├─ nginx.conf
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  ├─ LoginApi.jsx
│  │  └─ SignupApi.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ buttenimage1.png
│  │  ├─ defaultimage.png
│  │  ├─ google.png
│  │  ├─ kakao.png
│  │  ├─ logo.png
│  │  ├─ logo2.png
│  │  ├─ naver.png
│  │  ├─ point1.png
│  │  ├─ point2.png
│  │  ├─ pretendard
│  │  │  ├─ otf
│  │  │  │  ├─ Pretendard-Black.otf
│  │  │  │  ├─ Pretendard-Bold.otf
│  │  │  │  ├─ Pretendard-ExtraBold.otf
│  │  │  │  ├─ Pretendard-ExtraLight.otf
│  │  │  │  ├─ Pretendard-Light.otf
│  │  │  │  ├─ Pretendard-Medium.otf
│  │  │  │  ├─ Pretendard-Regular.otf
│  │  │  │  ├─ Pretendard-SemiBold.otf
│  │  │  │  └─ Pretendard-Thin.otf
│  │  │  ├─ pretendard.css
│  │  │  ├─ woff
│  │  │  │  ├─ Pretendard-Black.woff
│  │  │  │  ├─ Pretendard-Bold.woff
│  │  │  │  ├─ Pretendard-ExtraBold.woff
│  │  │  │  ├─ Pretendard-ExtraLight.woff
│  │  │  │  ├─ Pretendard-Light.woff
│  │  │  │  ├─ Pretendard-Medium.woff
│  │  │  │  ├─ Pretendard-Regular.woff
│  │  │  │  ├─ Pretendard-SemiBold.woff
│  │  │  │  └─ Pretendard-Thin.woff
│  │  │  └─ woff2
│  │  │     ├─ Pretendard-Black.woff2
│  │  │     ├─ Pretendard-Bold.woff2
│  │  │     ├─ Pretendard-ExtraBold.woff2
│  │  │     ├─ Pretendard-ExtraLight.woff2
│  │  │     ├─ Pretendard-Light.woff2
│  │  │     ├─ Pretendard-Medium.woff2
│  │  │     ├─ Pretendard-Regular.woff2
│  │  │     ├─ Pretendard-SemiBold.woff2
│  │  │     └─ Pretendard-Thin.woff2
│  │  ├─ samp.webp
│  │  └─ seoulPark.jpeg
│  ├─ components
│  │  ├─ edituserinformation
│  │  │  ├─ EditUserInformationModal.css
│  │  │  └─ EditUserInformationModal.jsx
│  │  ├─ loginview
│  │  │  ├─ LoginModal.css
│  │  │  └─ LoginModal.jsx
│  │  ├─ review
│  │  │  ├─ ReviewModal.css
│  │  │  └─ ReviewModal.jsx
│  │  ├─ search
│  │  │  ├─ SideOpen.css
│  │  │  ├─ SideOpen.jsx
│  │  │  └─ sideOpenBody
│  │  │     ├─ DefaultBody.css
│  │  │     ├─ DefaultBody.jsx
│  │  │     ├─ FavoriteBody.css
│  │  │     ├─ FavoriteBody.jsx
│  │  │     ├─ ParkingLotDetails.css
│  │  │     ├─ ParkingLotDetails.jsx
│  │  │     ├─ reuse
│  │  │     │  ├─ FavoriteButton.jsx
│  │  │     │  ├─ RealTimeStateColor.jsx
│  │  │     │  └─ reuse.css
│  │  │     └─ SearchBody.jsx
│  │  ├─ Sidebar.css
│  │  ├─ Sidebar.jsx
│  │  ├─ signupview
│  │  │  ├─ SignupModal.css
│  │  │  └─ SignupModal.jsx
│  │  └─ userinformation
│  │     ├─ UserInformationModal.css
│  │     └─ UserInformationModal.jsx
│  ├─ data
│  │  ├─ mockParkingCluster.js
│  │  └─ mockParkingData.js
│  ├─ index.css
│  ├─ main.jsx
│  └─ stores
│     ├─ UserLoginStore.jsx
│     └─ useSidebarStore.js
└─ vite.config.js

```
```
ddackdae
├─ Dockerfile
├─ eslint.config.js
├─ index.html
├─ nginx.conf
├─ package-lock.json
├─ package.json
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ api
│  │  ├─ LoginApi.jsx
│  │  ├─ SignupApi.jsx
│  │  └─ UserdetailApi.jsx
│  ├─ App.css
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ buttenimage1.png
│  │  ├─ defaultimage.png
│  │  ├─ google.png
│  │  ├─ kakao.png
│  │  ├─ logo.png
│  │  ├─ logo2.png
│  │  ├─ naver.png
│  │  ├─ point1.png
│  │  ├─ point2.png
│  │  ├─ pretendard
│  │  │  ├─ otf
│  │  │  │  ├─ Pretendard-Black.otf
│  │  │  │  ├─ Pretendard-Bold.otf
│  │  │  │  ├─ Pretendard-ExtraBold.otf
│  │  │  │  ├─ Pretendard-ExtraLight.otf
│  │  │  │  ├─ Pretendard-Light.otf
│  │  │  │  ├─ Pretendard-Medium.otf
│  │  │  │  ├─ Pretendard-Regular.otf
│  │  │  │  ├─ Pretendard-SemiBold.otf
│  │  │  │  └─ Pretendard-Thin.otf
│  │  │  ├─ pretendard.css
│  │  │  ├─ woff
│  │  │  │  ├─ Pretendard-Black.woff
│  │  │  │  ├─ Pretendard-Bold.woff
│  │  │  │  ├─ Pretendard-ExtraBold.woff
│  │  │  │  ├─ Pretendard-ExtraLight.woff
│  │  │  │  ├─ Pretendard-Light.woff
│  │  │  │  ├─ Pretendard-Medium.woff
│  │  │  │  ├─ Pretendard-Regular.woff
│  │  │  │  ├─ Pretendard-SemiBold.woff
│  │  │  │  └─ Pretendard-Thin.woff
│  │  │  └─ woff2
│  │  │     ├─ Pretendard-Black.woff2
│  │  │     ├─ Pretendard-Bold.woff2
│  │  │     ├─ Pretendard-ExtraBold.woff2
│  │  │     ├─ Pretendard-ExtraLight.woff2
│  │  │     ├─ Pretendard-Light.woff2
│  │  │     ├─ Pretendard-Medium.woff2
│  │  │     ├─ Pretendard-Regular.woff2
│  │  │     ├─ Pretendard-SemiBold.woff2
│  │  │     └─ Pretendard-Thin.woff2
│  │  ├─ samp.webp
│  │  └─ seoulPark.jpeg
│  ├─ components
│  │  ├─ edituserinformation
│  │  │  ├─ EditUserInformationModal.css
│  │  │  └─ EditUserInformationModal.jsx
│  │  ├─ loginview
│  │  │  ├─ LoginModal.css
│  │  │  └─ LoginModal.jsx
│  │  ├─ review
│  │  │  ├─ ReviewModal.css
│  │  │  └─ ReviewModal.jsx
│  │  ├─ search
│  │  │  ├─ SideOpen.css
│  │  │  ├─ SideOpen.jsx
│  │  │  └─ sideOpenBody
│  │  │     ├─ DefaultBody.css
│  │  │     ├─ DefaultBody.jsx
│  │  │     ├─ FavoriteBody.css
│  │  │     ├─ FavoriteBody.jsx
│  │  │     ├─ ParkingLotDetails.css
│  │  │     ├─ ParkingLotDetails.jsx
│  │  │     ├─ reuse
│  │  │     │  ├─ FavoriteButton.jsx
│  │  │     │  ├─ RealTimeStateColor.jsx
│  │  │     │  └─ reuse.css
│  │  │     └─ SearchBody.jsx
│  │  ├─ Sidebar.css
│  │  ├─ Sidebar.jsx
│  │  ├─ signupview
│  │  │  ├─ SignupModal.css
│  │  │  └─ SignupModal.jsx
│  │  └─ userinformation
│  │     ├─ UserInformationModal.css
│  │     └─ UserInformationModal.jsx
│  ├─ data
│  │  ├─ mockParkingCluster.js
│  │  └─ mockParkingData.js
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages
│  │  └─ OAuth2RedirectPage.tsx
│  └─ stores
│     ├─ UserLoginStore.jsx
│     └─ useSidebarStore.js
└─ vite.config.js

```