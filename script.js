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
    computerRoomback,
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
   컴퓨터실 내부 이동 기능 추가
   ---------------------------------------------------------
   기존 JavaScript는 그대로 유지합니다.

   추가되는 기능
   1. computer-room-desk  → 기본 컴퓨터실
   2. computer-room-teacher → 교탁
   3. computer-room-back → 뒤편

   기존에 만든 showScreen() 함수를 그대로 사용합니다.
========================================================= */


/* =========================================================
   1. 새로 추가된 화면 가져오기
========================================================= */

const computerRoomDesk = document.getElementById("computer-room-desk");

const computerRoomTeacher = document.getElementById("computer-room-teacher");

const computerRoomBack = document.getElementById("computer-room-back");


/* =========================================================
   2. 컴퓨터실 화면의 버튼 가져오기

   HTML에서 작성한 id를 이용하기 때문에
   버튼 위치가 바뀌어도 안전하게 사용할 수 있습니다.
========================================================= */


/* ---------- 기본 컴퓨터실 ---------- */

const goTeacherButton =
    document.getElementById("go-teacher-button");


const goBackRoomButton =
    document.getElementById("go-back-room-button");


const backComputerHallwayButton =
    document.getElementById("back-computer-hallway-button");



/* ---------- 교탁 ---------- */

const goDeskButton =
    document.getElementById("go-desk-button");


const teacherToBackButton =
    document.getElementById("teacher-to-back-button");


const backToComputerRoomButton =
    document.getElementById("back-to-computer-room-button");



/* ---------- 뒤편 ---------- */

const backToTeacherButton =
    document.getElementById("back-to-teacher-button");


const backRoomToDeskButton =
    document.getElementById("back-room-to-desk-button");


const backRoomExitButton =
    document.getElementById("back-room-exit-button");



/* =========================================================
   3. 컴퓨터실 기본 화면 이동

   기본 컴퓨터실
        ↓
      교탁
========================================================= */

goTeacherButton.addEventListener("click", function(){

    showScreen(computerRoomTeacher);

});



/* =========================================================
   4. 기본 컴퓨터실 → 뒤편 이동

========================================================= */

goBackRoomButton.addEventListener("click", function(){

    showScreen(computerRoomBack);

});



/* =========================================================
   5. 교탁 화면 이동

   교탁
      ↓
   기본 컴퓨터실
========================================================= */

goDeskButton.addEventListener("click", function(){

    showScreen(computerRoomDesk);

});



/* =========================================================
   6. 교탁 → 뒤편 이동

========================================================= */

teacherToBackButton.addEventListener("click", function(){

    showScreen(computerRoomBack);

});



/* =========================================================
   7. 뒤편 → 교탁 이동

========================================================= */

backToTeacherButton.addEventListener("click", function(){

    showScreen(computerRoomTeacher);

});



/* =========================================================
   8. 뒤편 → 기본 컴퓨터실 이동

========================================================= */

backRoomToDeskButton.addEventListener("click", function(){

    showScreen(computerRoomDesk);

});



/* =========================================================
   9. 복도로 돌아가기

   세 화면 모두 같은 지하 복도로 이동합니다.
========================================================= */


/* 기본 컴퓨터실 → 지하 복도 */

backComputerHallwayButton.addEventListener("click", function(){

    showScreen(basementHallway);

});



/* 교탁 → 지하 복도 */

backToComputerRoomButton.addEventListener("click", function(){

    showScreen(basementHallway);

});



/* 뒤편 → 지하 복도 */

backRoomExitButton.addEventListener("click", function(){

    showScreen(basementHallway);

});
