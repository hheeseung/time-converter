# React Toy Project - Time Converter

분을 시단위로, 시를 분단위로 변환할 수 있는 변환기입니다.

### 2022.5.12

- 거리변환 기능 추가
- `select`: 거리와 시간 중 원하는 것을 변환할 수 있도록 옵션 부여

### 2022.5.25

- `styled-components`에 대해서 배운 후 적용
  ➡ `.css` 파일 대신 `styled-components`로 디자인 작업방식 교체

#### 해결 해야할 점

`TimeConverter.js`와 `DistanceConverter.js`의 style이 겹치는데, 같은 코드가 중복이 돼있어서 이를 하나로 합칠 순 없을까?

- 여기서는 `styled-components`보다 `.css`를 통한 작업이 더 효율적이지 않을까 하는 생각
