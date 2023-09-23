# Sea Life Busan site renewal project - 🐬Personal PJ🦈

## 작업자 : 김정현

## 제작 기간: 22일 (2023.07.03 ~ 2023.07.24)

## ⭐️ 프로젝트 설명

대한민국 부산을 대표하는 관광명소 '부산 아쿠아리움'에서 운영하는 웹 사이트를 리뉴얼한 프로젝트입니다.<br/><br/>
씨 라이프 부산에서 제공하는 다양한 체험과 공연, 전시를 관람하려는 어린이/청소년 개인 및 단체를 타겟연령층으로 하여 #신나는 #귀여운 #신비로운 세 가지의 해시태그를 컨셉으로 지정하였습니다.

- 기존 홈페이지에서 사용하던 푸른 색상에서 크게 벗어나지 않되 좀 더 눈이 편안하고 고급스러운 느낌을 줄 수 있는 '클라인 블루' 색상을 메인 컬러로 지정하고, 블루컬러의 보색인 주황계열의 색상을 포인트 컬러로 사용하고 있습니다.
- 메인 페이지에서 홈페이지가 제공하는 다양한 정보들을 효율적으로 배치하기 위해 슬라이드, 탭 메뉴 등 동적 효과를 부여하고 있습니다.
- 메인페이지와 두 개의 서브페이지(티켓 예매, 안전수칙)로 구성되어있습니다.

## 💻 개발 환경

- 개발 환경 : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
- 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
- 사용된 기술 :
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white"> 그리고 Slick Slider

## 🛠️ 페이지 특성

- Slick 슬라이드

  Slick Slider의 무한반복 슬라이드를 활용하여 전시존의 컨텐츠들을 보여줍니다.
  <br>
  물고기의 몸통 모양과 지느러미를 나타내기 위해 각 모서리의 radious를 달리 설정하였습니다.

- 테마에 맞는 버튼 선정

  아쿠아리움이라는 테마에 맞게 슬라이드에 사용된 버튼을 새우 + 조약돌 배경으로 설정하여 귀엽고 신선한 느낌을 주었습니다.

- 일러스트와 애니메이션을 활용한 동적효과 부여

  다양한 해양생물 일러스트와 애니메이션 효과를 통해 홈페이지에 전체적으로 동적인 효과를 부여하여 사용자로 하여금 바닷속 세상에서 해양생물들이 움직이는듯한 즐거움을 느낄 수 있도록 디자인 / 퍼블리싱 하였습니다.

## 👀 페이지 구성

### 메인 페이지

| 섹션1 : 메인비주얼                                                                                                      |
| :---------------------------------------------------------------------------------------------------------------------- |
| ![busanMain](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/d488b702-c85d-4d82-a76d-cd93c4069ac1) |

| 화려하고 시선을 이끄는 이미지들을 활용한 와이드샷 이미지를 배경슬라이드로 사용합니다. 바닐라 슬라이드로 제작되었으며 이미지 슬라이드, 텍스트 슬라이드 총 두 가지의 슬라이드가 각각 정확한 타이밍에 작동되고 있습니다.

<br>

| 섹션2 : 티켓 예매 / 프로모션                                                                                              |
| :------------------------------------------------------------------------------------------------------------------------ |
| ![busanReserv](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/0fb12ffb-c8c3-4db3-8884-8df95358e1a7) |

| 현재 온라인 예약 / 사전예약으로 예매할 경우 할인이 들어가는 입장권의 종류를 나열합니다. 각각 얼만큼 할인이 되는지 이미지에 after을 주어 오른쪽 상단에 보여줍니다. 마우스 hover시 이미지의 scale이 변화하고 translateY가 변화하며 위로 올라가는 효과를 줍니다.<br>
| 뒷배경으로 보이는 배와 물결에서 확인할 수 있듯 수면을 나타낸 것이며 이하의 영역들은 마치 바닷속을 나타내는 것과도 같습니다.

<br>

| 섹션3 : 전시존                                                                                                           |
| :----------------------------------------------------------------------------------------------------------------------- |
| ![busanSlick](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/98be2c18-60e0-4c6e-b205-3209bfcb99f3) |

| 씨라이프 부산에서 전시중인 컨텐츠들을 Slick 슬라이더를 활용하여 나타냅니다. 자동 & 무한반복 슬라이드이며 hover시 translateY값을 변경하여 마우스 커서가 해당 전시를 가리키고 있는지 한 눈에 확인 가능합니다.

<br>

| 섹션4 : 공연                                                                                                           |
| :--------------------------------------------------------------------------------------------------------------------- |
| ![busanPer](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/b6d661ac-b9bb-47e5-874e-e22a66120576) |

| 씨라이프 부산에서 공연중인 컨텐츠들을 탭 메뉴로 보여줍니다. 네 가지의 공연이 진행되고 있으며 반응형에서는 select menu로 변경됩니다.

<br>

| 섹션5 : 바다친구들                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------------ |
| ![busanFriend](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/076e96c9-489d-4ca7-94b9-0736e982b130) |

| 씨라이프 부산에서 만날 수 있는 대표적인 해양생물들을 보여줍니다.

<br>

| 섹션6 : 리뷰와 Footer                                                                                                           |
| :------------------------------------------------------------------------------------------------------------------------------ |
| ![busanReviewFooter](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/5e060371-12a4-4b17-a905-d938ee3780de) |

| 기존 홈페이지에서는 단 하나의 리뷰만이 노출되어있으며 이 또한 네이버페이 리뷰 링크로 연결됩니다. 사진을 포함하여 여러 종류의 리뷰를 볼 수 있도록 바닐라 슬라이드로 구현하였습니다.<br>
| 해저 바닥과도 같은 느낌을 주는 Footer 입니다. 산호와 게에 움직임을 주어 사용자에게 마치 실제 바닷속에 있는 듯한 즐거움을 주기 위한 효과입니다.

<br>

### 서브페이지

| 서브01 : 티켓 예매                                                                                                        |
| :------------------------------------------------------------------------------------------------------------------------ |
| ![busanSub1-3](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/cdfed8d3-789a-4619-984a-b368238817b8) |

| 사이트의 주된 목적인 티켓예매 페이지입니다. 수많은 종류의 티켓을 모두 보여주려 공간을 효율적으로 활용하기 위해 Swiper 슬라이드를 사용하였고, 유형별 티켓을 구분하기 위해 슬라이드 박스 오른쪽 상단에 색상으로 종류를 나타내었습니다.<br>
| 씨라이프 부산의 또다른 테마 전시관인 '브릭맨 원더월드'로 연결되는 버튼이 존재하며 예매 일정 변경이나 단체 방문에 관한 안내페이지로 넘어갈 수 있도록 하는 섹션이 있습니다. <br>
| 마지막으로 입장권 환불 규정과 공지를 담은 아코디언 메뉴가 있습니다. 이 부분이 아코디언 메뉴라 탭을 열고 닫아야 한다는 것을 사용자가 한 눈에 인지할 수 있도록 둘 중 하나의 아코디언을 open 상태로 두었습니다.

<br>

| 서브02 : 안전수칙                                                                                                       |
| :---------------------------------------------------------------------------------------------------------------------- |
| ![busanSub2](https://github.com/Isabella-Kim/SeaLifeBusanRenewal/assets/139948934/44a5d52d-c04b-4386-9f95-cef518bc4eab) |

| 페이지 제작 당시 많이 완화가 되고 있었으나 아직 코로나 바이러스의 확산 방지를 위한 규정들이 존재했기에 이를 방문자에게 상기시키기 위한 컨텐츠가 배치되었습니다. AOS를 활용하여 컨텐츠들이 떠오르는 효과를 주어 지루한 느낌이 들지 않도록 제작하였습니다.

## 🚀 링크

- [브레인 스토밍](https://www.figma.com/file/oBwENj8ztJ16EG1kEIcWfQ/SeaLifeBusan_BrainStorming?type=whiteboard&node-id=0%3A1&t=MtGvKwQ1gnpEXTrR-1)

- [와이어프레임 및 디자인](https://www.figma.com/file/z1aPqEK3Z926sfrsXhoomu/SeaLifeBusan_Renewal?type=design&node-id=0%3A1&mode=design&t=aPTFUGLy2yzJkINf-1)

- [리뉴얼 사이트](https://isabella-kim.github.io/SeaLifeBusanRenewal/)
