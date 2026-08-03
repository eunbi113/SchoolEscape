/*
심야의 학교 - 화면 전환 기능

기능
1. section 화면 숨기기 / 보이기
2. 버튼 클릭으로 장소 이동
3. 🏠 버튼으로 처음 화면 이동
*/


// ===============================
// 화면 가져오기
// ===============================

const title = document.getElementById("title");

const schoolGate = document.getElementById("school-gate");
const mainEntrance = document.getElementById("main-entrance");
const stairs = document.getElementById("stairs");

const basementHallway = document.getElementById("basement-hallway");
const smallAuditorium = document.getElementById("small-auditorium");
const computerRoom = document.getElementById("computer-room");
const computerRoomDesk = document.getElementById("computer-room-desk");
const computerRoomTeacher = document.getElementById("computer-room-teacher");
const computerRoomBack = document.getElementById("computer-room-back");
const practiceRoom = document.getElementById("practice-room");

const firstFloorHallway = document.getElementById("first-floor-hallway");
const auditorium = document.getElementById("auditorium");
const restroom = document.getElementById("restroom");
const outdoorStage = document.getElementById("outdoor-stage");

const secondFloorHallway = document.getElementById("second-floor-hallway");
const classroom = document.getElementById("classroom");

const ending = document.getElementById("ending");


// ===============================
// 모든 화면 저장
// ===============================

const screens = [
    title,
    schoolGate,
    mainEntrance,
    stairs,
    basementHallway,
    smallAuditorium,
    computerRoom,
    computerRoomDesk,
    computerRoomTeacher,
    computerRoomBack,
    practiceRoom,
    firstFloorHallway,
    auditorium,
    restroom,
    outdoorStage,
    secondFloorHallway,
    classroom,
    ending
];


// ===============================
// 화면 전환 함수
// ===============================

function showScreen(screen){

    // 모든 화면 숨기기
    for(let i = 0; i < screens.length; i++){
        screens[i].style.display = "none";
    }

    // 선택한 화면 표시
    screen.style.display = "block";
}


// 처음에는 타이틀만 표시
showScreen(title);



// ===============================
// 버튼 가져오기
// ===============================

// 시작
const startButton = document.getElementById("start-button");

// 이동 버튼
const enterSchoolButton =
document.getElementById("enter-school-button");

const moveStairsButton =
document.getElementById("move-stairs-button");


// 계단
const goBasementButton =
document.getElementById("go-basement-button");

const goFirstFloorButton =
document.getElementById("go-first-floor-button");

const goSecondFloorButton =
document.getElementById("go-second-floor-button");


// 지하 복도
const goSmallAuditoriumButton =
document.getElementById("go-small-auditorium-button");

const goComputerRoomButton =
document.getElementById("go-computer-room-button");

const goPracticeRoomButton =
document.getElementById("go-practice-room-button");

const backStairsFromBasementButton =
document.getElementById("back-stairs-from-basement-button");


// 지하 장소 돌아가기
const backBasementFromAuditoriumButton =
document.getElementById("back-basement-from-auditorium-button");

const backBasementFromComputerButton =
document.getElementById("back-basement-from-computer-button");

const backBasementFromPracticeButton =
document.getElementById("back-basement-from-practice-button");


// 1층
const goAuditoriumButton =
document.getElementById("go-auditorium-button");

const goRestroomButton =
document.getElementById("go-restroom-button");

const goOutdoorStageButton =
document.getElementById("go-outdoor-stage-button");

const backStairsFromFirstFloorButton =
document.getElementById("back-stairs-from-first-floor-button");


// 1층 장소 돌아가기
const backFirstFloorFromAuditoriumButton =
document.getElementById("back-first-floor-from-auditorium-button");

const backFirstFloorFromRestroomButton =
document.getElementById("back-first-floor-from-restroom-button");

const backFirstFloorFromStageButton =
document.getElementById("back-first-floor-from-stage-button");


// 2층
const goClassroomButton =
document.getElementById("go-classroom-button");

const backStairsFromSecondFloorButton =
document.getElementById("back-stairs-from-second-floor-button");


// 교실
const lockerButton =
document.getElementById("locker-button");

const backSecondFloorFromClassroomButton =
document.getElementById("back-second-floor-from-classroom-button");



// ===============================
// 이동 기능
// ===============================


// 시작 → 교문
startButton.addEventListener("click", function(){
    showScreen(schoolGate);
});


// 교문 → 정문
enterSchoolButton.addEventListener("click", function(){
    showScreen(mainEntrance);
});


// 정문 → 계단
moveStairsButton.addEventListener("click", function(){
    showScreen(stairs);
});


// 계단 이동
goBasementButton.addEventListener("click", function(){
    showScreen(basementHallway);
});

goFirstFloorButton.addEventListener("click", function(){
    showScreen(firstFloorHallway);
});

goSecondFloorButton.addEventListener("click", function(){
    showScreen(secondFloorHallway);
});


// 지하 복도 이동
goSmallAuditoriumButton.addEventListener("click", function(){
    showScreen(smallAuditorium);
});

goComputerRoomButton.addEventListener("click", function(){
    showScreen(computerRoom);
});

goPracticeRoomButton.addEventListener("click", function(){
    showScreen(practiceRoom);
});

backStairsFromBasementButton.addEventListener("click", function(){
    showScreen(stairs);
});


// 지하 장소 → 복도
backBasementFromAuditoriumButton.addEventListener("click", function(){
    showScreen(basementHallway);
});

backBasementFromComputerButton.addEventListener("click", function(){
    showScreen(basementHallway);
});

backBasementFromPracticeButton.addEventListener("click", function(){
    showScreen(basementHallway);
});


// 1층 이동
goAuditoriumButton.addEventListener("click", function(){
    showScreen(auditorium);
});

goRestroomButton.addEventListener("click", function(){
    showScreen(restroom);
});

goOutdoorStageButton.addEventListener("click", function(){
    showScreen(outdoorStage);
});

backStairsFromFirstFloorButton.addEventListener("click", function(){
    showScreen(stairs);
});


// 1층 장소 → 복도
backFirstFloorFromAuditoriumButton.addEventListener("click", function(){
    showScreen(firstFloorHallway);
});

backFirstFloorFromRestroomButton.addEventListener("click", function(){
    showScreen(firstFloorHallway);
});

backFirstFloorFromStageButton.addEventListener("click", function(){
    showScreen(firstFloorHallway);
});


// 2층 이동
goClassroomButton.addEventListener("click", function(){
    showScreen(classroom);
});

backStairsFromSecondFloorButton.addEventListener("click", function(){
    showScreen(stairs);
});


// 교실 → 복도
backSecondFloorFromClassroomButton.addEventListener("click", function(){
    showScreen(secondFloorHallway);
});


// 사물함 버튼
// 다음 단계에서 악보 획득 기능 추가
lockerButton.addEventListener("click", function(){

});


/* =========================================================
   버튼 가져오기
========================================================= */

/* ---------- 기본 화면 ---------- */

const moveComputerRoomBackButton =
document.getElementById("move-computer-room-back-button");

const moveComputerRoomTeacherButton =
document.getElementById("move-computer-room-teacher-button");


/* ---------- 교탁 ---------- */

const moveComputerRoomDeskButton =
document.getElementById("move-computer-room-desk-button");

const backBasementFromComputerTeacherButton =
document.getElementById("back-basement-from-computer-teacher-button");


/* ---------- 뒤편 ---------- */

const moveComputerRoomTeacherFromBackButton =
document.getElementById("move-computer-room-teacher-from-back-button");

const backBasementFromComputerBackButton =
document.getElementById("back-basement-from-computer-back-button");


/* =========================================================
   기본 화면 → 뒤편
========================================================= */

moveComputerRoomBackButton.addEventListener("click", function(){

    showScreen(computerRoomBack);

});


/* =========================================================
   기본 화면 → 교탁
========================================================= */

moveComputerRoomTeacherButton.addEventListener("click", function(){

    showScreen(computerRoomTeacher);

});


/* =========================================================
   교탁 → 기본 화면
========================================================= */

moveComputerRoomDeskButton.addEventListener("click", function(){

    showScreen(computerRoomDesk);

});


/* =========================================================
   뒤편 → 교탁
========================================================= */

moveComputerRoomTeacherFromBackButton.addEventListener("click", function(){

    showScreen(computerRoomTeacher);

});


/* =========================================================
   복도로 돌아가기
========================================================= */

backBasementFromComputerButton.addEventListener("click", function(){

    showScreen(basementHallway);

});


backBasementFromComputerTeacherButton.addEventListener("click", function(){

    showScreen(basementHallway);

});


backBasementFromComputerBackButton.addEventListener("click", function(){

    showScreen(basementHallway);

});
