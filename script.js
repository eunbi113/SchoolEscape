</> javascript
/* =========================================================
   script.js
   ---------------------------------------------------------
   심야의 학교 - 화면 전환

   이번 단계에서 배우는 내용
   1. id로 HTML 가져오기
   2. display 속성으로 화면 숨기기/보이기
   3. 함수(function) 만들기
   4. 버튼 클릭 이벤트(addEventListener)

   ※ HTML과 CSS는 수정하지 않습니다.
========================================================= */


/* =========================================================
   1. 모든 section 가져오기
========================================================= */

const title = document.getElementById("title");
const schoolGate = document.getElementById("school-gate");
const mainEntrance = document.getElementById("main-entrance");
const stairs = document.getElementById("stairs");

const basementHallway = document.getElementById("basement-hallway");
const smallAuditorium = document.getElementById("small-auditorium");
const computerRoom = document.getElementById("computer-room");
const practiceRoom = document.getElementById("practice-room");

const firstFloorHallway = document.getElementById("first-floor-hallway");
const auditorium = document.getElementById("auditorium");
const restroom = document.getElementById("restroom");
const outdoorStage = document.getElementById("outdoor-stage");

const secondFloorHallway = document.getElementById("second-floor-hallway");
const classroom = document.getElementById("classroom");

const ending = document.getElementById("ending");


/* =========================================================
   2. 모든 화면을 배열(Array)에 저장

   배열을 이용하면 한 번에 반복문으로 처리할 수 있습니다.
========================================================= */

const screens = [
    title,
    schoolGate,
    mainEntrance,
    stairs,
    basementHallway,
    smallAuditorium,
    computerRoom,
    practiceRoom,
    firstFloorHallway,
    auditorium,
    restroom,
    outdoorStage,
    secondFloorHallway,
    classroom,
    ending
];


/* =========================================================
   3. 화면 전환 함수

   하는 일
   1. 모든 화면 숨기기
   2. 원하는 화면 하나만 보이기
========================================================= */

function showScreen(screen) {

    // 모든 화면 숨기기
    for (let i = 0; i < screens.length; i++) {
        screens[i].style.display = "none";
    }

    // 원하는 화면만 보이기
    screen.style.display = "block";
}


/* =========================================================
   4. 처음에는 타이틀만 보이기
========================================================= */

showScreen(title);


/* =========================================================
   5. 버튼 가져오기
========================================================= */

/* ---------- 타이틀 ---------- */
const startButton = title.getElementsByTagName("button")[0];

/* ---------- 교문 ---------- */
const schoolGateButton = schoolGate.getElementsByTagName("button")[0];

/* ---------- 정문 ---------- */
const entranceButton = mainEntrance.getElementsByTagName("button")[0];

/* ---------- 계단 ---------- */
const basementButton = stairs.getElementsByTagName("button")[0];
const firstFloorButton = stairs.getElementsByTagName("button")[1];
const secondFloorButton = stairs.getElementsByTagName("button")[2];

/* ---------- 지하 복도 ---------- */
const auditoriumButton = basementHallway.getElementsByTagName("button")[0];
const computerButton = basementHallway.getElementsByTagName("button")[1];
const practiceButton = basementHallway.getElementsByTagName("button")[2];
const basementBackButton = basementHallway.getElementsByTagName("button")[3];

/* ---------- 중강당 ---------- */
const smallAuditoriumBackButton =
    smallAuditorium.getElementsByTagName("button")[0];

/* ---------- 컴퓨터실 ---------- */
const computerRoomBackButton =
    computerRoom.getElementsByTagName("button")[0];

/* ---------- 연습실 ---------- */
const practiceRoomBackButton =
    practiceRoom.getElementsByTagName("button")[0];

/* ---------- 1층 복도 ---------- */
const gymButton = firstFloorHallway.getElementsByTagName("button")[0];
const restroomButton = firstFloorHallway.getElementsByTagName("button")[1];
const stageButton = firstFloorHallway.getElementsByTagName("button")[2];
const firstFloorBackButton = firstFloorHallway.getElementsByTagName("button")[3];

/* ---------- 강당 ---------- */
const auditoriumBackButton =
    auditorium.getElementsByTagName("button")[0];

/* ---------- 화장실 ---------- */
const restroomBackButton =
    restroom.getElementsByTagName("button")[0];

/* ---------- 야외공연장 ---------- */
const outdoorStageBackButton =
    outdoorStage.getElementsByTagName("button")[0];

/* ---------- 2층 복도 ---------- */
const classroomButton =
    secondFloorHallway.getElementsByTagName("button")[0];

const secondFloorBackButton =
    secondFloorHallway.getElementsByTagName("button")[1];

/* ---------- 교실 ---------- */
const lockerButton = classroom.getElementsByTagName("button")[0];
const classroomBackButton = classroom.getElementsByTagName("button")[1];


/* =========================================================
   6. 버튼 기능 연결
========================================================= */


/* ---------- START → 교문 ---------- */
startButton.addEventListener("click", function () {
    showScreen(schoolGate);
});


/* ---------- 교문 → 정문 ---------- */
schoolGateButton.addEventListener("click", function () {
    showScreen(mainEntrance);
});


/* ---------- 정문 → 계단 ---------- */
entranceButton.addEventListener("click", function () {
    showScreen(stairs);
});


/* ---------- 계단 ---------- */

basementButton.addEventListener("click", function () {
    showScreen(basementHallway);
});

firstFloorButton.addEventListener("click", function () {
    showScreen(firstFloorHallway);
});

secondFloorButton.addEventListener("click", function () {
    showScreen(secondFloorHallway);
});


/* =========================================================
   지하 복도
========================================================= */

auditoriumButton.addEventListener("click", function () {
    showScreen(smallAuditorium);
});

computerButton.addEventListener("click", function () {
    showScreen(computerRoom);
});

practiceButton.addEventListener("click", function () {
    showScreen(practiceRoom);
});

basementBackButton.addEventListener("click", function () {
    showScreen(stairs);
});


/* ---------- 중강당 ---------- */
smallAuditoriumBackButton.addEventListener("click", function () {
    showScreen(basementHallway);
});


/* ---------- 컴퓨터실 ---------- */
computerRoomBackButton.addEventListener("click", function () {
    showScreen(basementHallway);
});


/* ---------- 연습실 ---------- */
practiceRoomBackButton.addEventListener("click", function () {
    showScreen(basementHallway);
});


/* =========================================================
   1층 복도
========================================================= */

gymButton.addEventListener("click", function () {
    showScreen(auditorium);
});

restroomButton.addEventListener("click", function () {
    showScreen(restroom);
});

stageButton.addEventListener("click", function () {
    showScreen(outdoorStage);
});

firstFloorBackButton.addEventListener("click", function () {
    showScreen(stairs);
});


/* ---------- 강당 ---------- */
auditoriumBackButton.addEventListener("click", function () {
    showScreen(firstFloorHallway);
});


/* ---------- 화장실 ---------- */
restroomBackButton.addEventListener("click", function () {
    showScreen(firstFloorHallway);
});


/* ---------- 야외공연장 ---------- */
outdoorStageBackButton.addEventListener("click", function () {
    showScreen(firstFloorHallway);
});


/* =========================================================
   2층 복도
========================================================= */

classroomButton.addEventListener("click", function () {
    showScreen(classroom);
});

secondFloorBackButton.addEventListener("click", function () {
    showScreen(stairs);
});


/* ---------- 교실 ---------- */

/* 사물함 버튼은 아직 기능을 만들지 않습니다. */
lockerButton.addEventListener("click", function () {

    // 다음 단계에서 구현 예정

});


/* 복도로 돌아가기 */
classroomBackButton.addEventListener("click", function () {
    showScreen(secondFloorHallway);
});


/* =========================================================
   엔딩 화면은 다음 단계에서 구현합니다.
========================================================= */
