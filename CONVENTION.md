# 타임레터 FE 코드 컨벤션
타임레터 프로젝트는 기본적으로 monorepo 형식으로 구성 되어있습니다.

### 프로젝트 구조
파일 네이밍 컨벤션은 컴포넌트 아래와 같이 준수해 주세요.
컴포넌트 이름은 PascalCase를 사용합니다.

가이드: `<ComponentName>.<file-type>.<file-xtension>`

예: Modal 컴포넌트의 css 파일일 경우 `Modal.css.ts` (@vanilla-extract 사용)
```
├── components
├──── src
├────── Component1
├──────── Component1.tsx
├──────── Component1.css.ts
├──────── Component1.types.ts
├──────── Component1.stories.tsx
├──────── Component1.const.ts (optional)
├──────── Component1.hooks.ts (optional)
├──────── Component1.utils.ts (optional)
├────── Component2
├──── package.json
├── app
├──── src
├────── assets
├────── pages
├──────── Page1
├────────── Page1.tsx
├────────── Page1.css.ts
├────────── Page1.types.ts
├────────── Page1.const.ts (optional)
├────────── Page1.hooks.ts (optional)
├────────── Page1.utils.ts (optional)
├────────── Page1Component
├──────────── Page1Component.tsx
├──────────── Page1Component.css.ts
├──────────── Page1Component.types.ts
├──────────── Page1Component.const.ts (optional)
├──────────── Page1Component.hooks.ts (optional)
├──────────── Page1Component.utils.ts (optional)
├──── package.json
└── README.md
```

### `/components` 폴더
타임레터 앱의 디자인 시스템을 관리하는 곳입니다. 재사용 가능한 컴포넌트들은 이곳애 작성해 주세요.

<details>
<summary>경로</summary>
components를 app 폴더 내에서 사용하기 위해 components 내에서는 path alias를 사용하지 않도록 주의해 주세요.
</details>

<details>
<summary>스토리</summary>
storybook 라이브러리로 디자인 시스템 관리 하고 있어 components 내에 등록되는 모든 컴포넌트는 스토리 작성이 필요합니다.
<br />

스토리 작성 예시
```js
// Button.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Inputs/Button', // 타이틀의 시작을 컴포넌트 기능 성격에 맞게 적절한 이름을 지어 주세요.
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// 컴포넌트의 기본적인 작동 방식을 나타내는 스토리는 `Base`라는 이름으로 사용해 주세요.
export const Base = Template.bind({});
Base.args = {};

// 필요시 기본 작동 외에 보여주고자 하는 내용을 가리키는 이름으로 지어 주세요.
export const IconOnly = Template.bind({});
IconOnly.args = {};
```
</details>
<br/>

### `/app` 폴더

<details>
<summary>경로</summary>
app 내에서는 상대경로들을 path alias를 등록해 사용하는것을 권장합니다.

src/ 폴더 내 1depth에 있는 모든 폴더는 path alias로 `app/tsconfig.paths.json` 파일에 등록해 주세요.
path alias의 네이밍 규칙은 `~<folder>/*`로 합니다.
<br />

사용법: src/assets/icons -> `~assets/icons`
</details>

