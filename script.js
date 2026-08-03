/* ==========================================================
   script.js
   ----------------------------------------------------------
   심야의 학교 - 화면 이동 기능

   배우는 내용
   1. id로 HTML 요소 가져오기
   2. 함수 만들기
   3. display로 화면 숨기기 / 보이기
   4. 버튼 클릭 이벤트 연결

   ※ HTML과 CSS는 수정하지 않습니다.
========================================================== */


/* ==========================================================
   1. 화면(section) 가져오기
========================================================== */

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


/* ==========================================================
   2. 모든 화면 저장
========================================================== */

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


/* ==========================================================
   3. 화면 전환 함수

   모든 화면을 숨긴 후
   선택한 화면만 보여줍니다.
========================================================== */

function showScreen(screen){

    // 모든 화면 숨기기
    for(let i = 0; i < screens.length; i++){

        screens[i].style.display = "none";

    }


    // 선택한 화면 보이기
    screen.style.display = "block";

}


/* ==========================================================
   4. 게임 시작 시 타이틀만 표시
========================================================== */

showScreen(title);


/* ==========================================================
   5. 버튼 가져오기
========================================================== */

/* ---------- 타이틀 ---------- */

const startButton =
document.getElementById("start-button");

/* ---------- 교문 ---------- */

const enterSchoolButton =
document.getElementById("enter-school-button");

/* ---------- 정문 ---------- */

const goStairsButton =
document.getElementById("go-stairs-button");

/* ---------- 계단 ---------- */

const basementButton =
document.getElementById("go-basement-button");

const firstFloorButton =
document.getElementById("go-first-floor-button");

const secondFloorButton =
document.getElementById("go-second-floor-button");

/* ---------- 지하 복도 ---------- */

const smallAuditoriumButton =
document.getElementById("go-small-auditorium-button");

const computerRoomButton =
document.getElementById("go-computer-room-button");

const practiceRoomButton =
document.getElementById("go-practice-room-button");

const backStairsFromBasement =
document.getElementById("back-stairs-from-basement-button");

/* ---------- 지하 장소 ---------- */

const backBasementFromAuditorium =
document.getElementById("back-basement-from-auditorium-button");

const backBasementFromComputer =
document.getElementById("back-basement-from-computer-button");

const backBasementFromPractice =
document.getElementById("back-basement-from-practice-button");

/* ---------- 1층 ---------- */

const goAuditoriumButton =
document.getElementById("go-auditorium-button");

const goRestroomButton =
document.getElementById("go-restroom-button");

const goOutdoorStageButton =
document.getElementById("go-outdoor-stage-button");

const backStairsFromFirstFloor =
document.getElementById("back-stairs-from-first-floor-button");

/* ---------- 1층 장소 ---------- */

const backFirstFloorFromAuditorium =
document.getElementById("back-first-floor-from-auditorium-button");

const backFirstFloorFromRestroom =
document.getElementById("back-first-floor-from-restroom-button");

const backFirstFloorFromStage =
document.getElementById("back-first-floor-from-stage-button");

/* ---------- 2층 ---------- */

const goClassroomButton =
document.getElementById("go-classroom-button");

const backStairsFromSecondFloor =
document.getElementById("back-stairs-from-second-floor-button");

/* ---------- 교실 ---------- */

const lockerButton =
document.getElementById("locker-button");

const backSecondFloorFromClassroom =
document.getElementById("back-second-floor-from-classroom-button");


/* ==========================================================
   6. 화면 이동 이벤트
========================================================== */

/* 시작 */

startButton.addEventListener("click",function(){

    showScreen(schoolGate);

});

/* 교문 */

enterSchoolButton.addEventListener("click",function(){

    showScreen(mainEntrance);

});

/* 정문 */

goStairsButton.addEventListener("click",function(){

    showScreen(stairs);

});


/* ==========================================================
   계단
========================================================== */


basementButton.addEventListener("click",function(){

    showScreen(basementHallway);

});


firstFloorButton.addEventListener("click",function(){

    showScreen(firstFloorHallway);

});


secondFloorButton.addEventListener("click",function(){

    showScreen(secondFloorHallway);

});


/* ==========================================================
   지하 복도
========================================================== */


smallAuditoriumButton.addEventListener("click",function(){

    showScreen(smallAuditorium);

});


computerRoomButton.addEventListener("click",function(){

    showScreen(computerRoom);

});


practiceRoomButton.addEventListener("click",function(){

    showScreen(practiceRoom);

});


backStairsFromBasement.addEventListener("click",function(){

    showScreen(stairs);

});

/* 지하 장소 돌아가기 */

backBasementFromAuditorium.addEventListener("click",function(){

    showScreen(basementHallway);

});


backBasementFromComputer.addEventListener("click",function(){

    showScreen(basementHallway);

});


backBasementFromPractice.addEventListener("click",function(){

    showScreen(basementHallway);

});


/* ==========================================================
   1층
========================================================== */


goAuditoriumButton.addEventListener("click",function(){

    showScreen(auditorium);

});


goRestroomButton.addEventListener("click",function(){

    showScreen(restroom);

});


goOutdoorStageButton.addEventListener("click",function(){

    showScreen(outdoorStage);

});


backStairsFromFirstFloor.addEventListener("click",function(){

    showScreen(stairs);

});


/* 1층 장소 돌아가기 */


backFirstFloorFromAuditorium.addEventListener("click",function(){

    showScreen(firstFloorHallway);

});


backFirstFloorFromRestroom.addEventListener("click",function(){

    showScreen(firstFloorHallway);

});


backFirstFloorFromStage.addEventListener("click",function(){

    showScreen(firstFloorHallway);

});


/* ==========================================================
   2층
========================================================== */


goClassroomButton.addEventListener("click",function(){

    showScreen(classroom);

});


backStairsFromSecondFloor.addEventListener("click",function(){

    showScreen(stairs);

});


/* ==========================================================
   교실
========================================================== */


lockerButton.addEventListener("click",function(){

    // 사물함 기능은 다음 단계에서 제작

});



backSecondFloorFromClassroom.addEventListener("click",function(){

    showScreen(secondFloorHallway);

});


/* ==========================================================
   처음으로 버튼

   모든 화면의 🏠 처음으로 버튼을 누르면
   타이틀 화면으로 이동합니다.
========================================================== */


const homeButtons =
document.getElementsByClassName("home-button");


for(let i = 0; i < homeButtons.length; i++){


    homeButtons[i].addEventListener("click",function(){

        showScreen(title);

    });


}
