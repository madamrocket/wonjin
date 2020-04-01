# WONJIN

## 배포

- 배포는 [`now`](https://zeit.co/madamrocket) 를 통해 이루어집니다.
- master merge시 자동 배포됩니다.

## 공통

- 이미지 파일들은 static/images 에 모여있습니다.
- 내부에서 접근할때 static 은 생략이 가능합니다. /images 로 바로 접근이 가능합니다.
- 코드 변경 후 반영
- 배포중에 코드가 깨질 수 있기 때문에 서버로 올리기전에 `npm run build` 를 통해서 변경된 코드에 문제가 없는지 미리 로컬에서 확인해주세요.

```text
1. 코드를 변경한다.
2. npm run build
3. git add .
4. git commit -m "작업에 대한 메세지"
5. git push origin master

now 또는 netlify 를 이용중이라면 master 로 push 되는 순간에 자동배포가 이루어집니다.
```

## 센터 수정

- data.json 위치: `/components/center/data.json`
- id 는 order 에 영향을 주지 않습니다. 하지만 하이라이팅에 영향을 주기 때문에 고유한 값이어야합니다. 위치한 순서대로 그려집니다.
- image: 이미지 url (이미지 추가후 /images/추가된이미지 로 접근가능)
- info 의 데이터를 바꾸면 테이블 내부의 정보가 변경됩니다.
- 삭제는 json 에서 해당 센터의 정보를 제거하면됩니다.

```text
변경 예시

1. 새로운 센터추가
{
    "id": 13,
    "image": "/images/이미지",
    "name": "센터이름",
    "address": "센터주소",
    "description": "센터 설명",
    "info": {
      "주소": "경기도 용인시 처인구 백암면 백암리",
      "건축연도": "2020년",
      "대지면적": "9,276평",
      "연면적": "12,928평",
      "층수": "6층",
      "E/V 유무 및 갯수": "2개",
      "수직반송기 유무 및 갯수": "4개",
      "접안 가능 여부 (층별)": "B2층, 1층 접안 가능",
      "도크 유무 여부 (층별)": "X",
      "층고 (층별)": "전층 9m",
      "고속도로 IC": "양지IC10km, 덕평 IC 13km ",
      "전문장비": "렉설치 가능",
      "스프링쿨러": "X",
      "보안시설": "CAPS",
      "오버헤드도어": "O",
      "식품보관": "O",
      "온도조절가능": "O",
      "습도조절가능": "X",
      "냉동": "O",
      "주류창고": "X",
      "보세창고": "허가 가능",
      "위험물창고": "X",
      "크로스 도킹": "O"
    }
  }

2. 센터가 잘 추가되었고, 하이라이팅이 문제없이 되는지 확인
3. git add .
4. git commit -m "센터 추가"
5. git push origin master
6. 배포 후 문제 없이 노출되는지 확인
```

## 메인 페이지 (원진만의 물류 전문가를 만나보세요) 수정

- data.json 위치: `components/main/section-expert/data.json`
- image 는 센터 수정과 같습니다.
- 글 추가 삭제는 아래의 양식에 맞춰 영역을 추가 삭제하시면됩니다.

```text
{
    "image": "",
    "title": "",
    "description": "",
    "link": ""
}
```

- 원하시는 영역에 link를 넣어주시면 동작합니다.

## 소셜 버튼 링크 추가

- footer 의 네이버와 페이스북의 링크를 추가하시려면 `/components/social-button.tsx` 내부의 LINKS 에 추가하시면됩니다.
