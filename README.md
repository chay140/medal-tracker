<img src="https://capsule-render.vercel.app/api?type=waving&color=BDBDC8&height=150&section=header" />

# Medal-tracker
> React-Vite 사용한 React projecct

배포 링크: https://medal-tracker-kappa.vercel.app/

## 페이지 소개
올림픽의 메달 집계를 관리하는 SPA 페이지 

사용자가 국가와 메달 수를 직접 추가/수정할 수 있으며, 데이터는 내림차순으로 출력됩니다. 순위 정렬은 금/은/동 순서 혹은 총 메달 수로 지정이 가능합니다.

![image](https://github.com/user-attachments/assets/c1fa0b5d-901d-45bd-ac21-1ecfac9e51ab)


## 페이지 구성
* 메달 입력 폼
* 메달 집계 표

## 기능
* 화면에 국가별 메달 집계를 리스트 형태로 출력 (내림차순) 
* 폼 제출 시 새로운 나라와 해당 메달 수가 리스트에 추가
  * 국가명이 비어있는 경우 제출 제한
  * 동일한 국가 존재시 유저에게 알림 (중복 데이터 방지) 
* 등록된 국가 메달 수 수정
  * 등록되지 않은 국가 수정시 유저에게 알림 
* 각 국가 정보 삭제 옵션
* 금/은/동 혹은 총 메달 수로 정렬 가능
* 로컬 스토리지 활용으로 새로고침시 데이터 유지 구현


## 컴포넌트 구성
```css
App
│
├── MedalData
    ├── MedalForm
    |		├── InputGroup
    |       	|	├── CountryInput
    |       	|	├── MedalInput
    |		|
    |       	├── ButtonGroup──Button
    |
    ├── Table
	├── Button
	├── SortSelector
```
* `App` : "root"에 들어가는 가장 상위 컴포넌트 (제목 포함)
* `MedalData` : MedalFrom과 Table을 포함하는 컴포넌트; 국가별 데이터 관리가 이루어짐
  * `MedalForm` : 폼에 들어온 데이터 저장, InputGroup과 ButtonGroup의 상위 컴포넌트
    * `InputGroup` : 인풋 필드로만 이루어진 그룹, MedalForm으로부터 handler를 받아서 데이터 저장, CountryInput과 MedalInput으로 구성
      * `CountryInput` : "text" 타입 인풋으로 country 데이터를 받아 저장
      * `MedalInput` : "number" 타입 인풋으로 0-99사이의 값만 데이터로 받아 저장
    * `ButtonGroup` : 버튼 그룹으로 제줄 (국가 추가) 버튼과 업데이트 버튼 컴포넌트로 구성
      * `Button` : 버튼 요소로 부모로부터 handler를 받아 onClick에 적용, value와 type도 함께 받음
  * `Table` : 추가되거나 업데이트 된 데이터 바탕으로 리스트를 렌더
    * 삭제 버튼은 `Button` 컴포넌트로 이루어짐
    * `SortSelector`: select dropdown으로 정렬 모드 저장/업데이트



# 기술 스택
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Readme 작성
![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)

<img src="https://capsule-render.vercel.app/api?type=waving&color=BDBDC8&height=150&section=footer" />
