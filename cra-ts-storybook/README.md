# cra + ts + storybook

ts와 같이 storybook 사용법을 공부합니다.

## 접근성 애드온 설치

```bash
yarn add -D @storybook/addon-a11y
```

이후. .storybook의 main.js에 다음과 같이 설정

```
'@storybook/addon-a11y',
```

## 스토리북 a11y 애드온 한국어 설정

.storybook/preview.js를 다음과 같이 설정

```js
import ko from 'axe-core/locales/ko.json';

export const parameters = {
  a11y: {
    config: { locale: ko },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
```
