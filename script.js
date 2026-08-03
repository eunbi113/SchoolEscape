/* =========================================================
   script.js
   ---------------------------------------------------------
   심야의 학교 - 화면 전환

   기능
   1. 화면 전환
   2. 버튼 클릭 이동
   3. 처음으로 버튼 이동

   화면 전환 방식
   display:none
   display:block

   HTML과 CSS는 수정하지 않습니다.
========================================================= */


/* =========================================================
   1. 모든 화면 가져오기
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
   2. 화면 목록 저장
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
========================================================= */

function showScreen(screen){

    // 모든 화면 숨기기
    for(let i = 0; i < screens.length; i++){
        screens[i].style.display = "none";
    }

    // 선택한 화면만 보이기
    screen.style.display = "block";
}


/* =========================================================
   4. 처음 시작 화면
========================================================= */

showScreen(title);


/* =========================================================
   5. 버튼 가져오기

   각 section의 첫 번째 버튼은
   "🏠 처음으로" 버튼입니다.

   그래서 기존 버튼 번호가 +1 변경되었습니다.
========================================================= */


/* 타이틀 */
const startButton = title.getElementsByTagName("button")[0];


/* 교문 */
const schoolGateButton = schoolGate.getElementsByTagName("button")[1];


/* 정문 */
const entranceButton = mainEntrance.getElementsByTagName("button")[1];


/* 계단 */
const basementButton = stairs.getElementsByTagName("button")[1];
const firstFloorButton = stairs.getElementsByTagName("button")[2];
const secondFloorButton = stairs.getElementsByTagName("button")[3];


/* 지하 복도 */
const auditoriumButton = basementHallway.getElementsByTagName("button")[1];
const computerButton = basementHallway.getElementsByTagName("button")[2];
const practiceButton = basementHallway.getElementsByTagName("button")[3];
const basementBackButton = basementHallway.getElementsByTagName("button")[4];


/* 중강당 */
const smallAuditoriumBackButton =
smallAuditorium.getElementsByTagName("button")[1];


/* 컴퓨터실 */
const computerRoomBackButton =
computerRoom.getElementsByTagName("button")[1];


/* 연습실 */
const practiceRoomBackButton =
practiceRoom.getElementsByTagName("button")[1];


/* 1층 복도 */
const gymButton =
firstFloorHallway.getElementsByTagName("button")[1];

const restroomButton =
firstFloorHallway.getElementsByTagName("button")[2];

const stageButton =
firstFloorHallway.getElementsByTagName("button")[3];

const firstFloorBackButton =
firstFloorHallway.getElementsByTagName("button")[4];


/* 강당 */
const auditoriumBackButton =
auditorium.getElementsByTagName("button")[1];


/* 화장실 */
const restroomBackButton =
restroom.getElementsByTagName("button")[1];


/* 야외공연장 */
const outdoorStageBackButton =
outdoorStage.getElementsByTagName("button")[1];


/* 2층 복도 */
const classroomButton =
secondFloorHallway.getElementsByTagName("button")[1];

const secondFloorBackButton =
secondFloorHallway.getElementsByTagName("button")[2];


/* 교실 */
const lockerButton =
classroom.getElementsByTagName("button")[1];

const classroomBackButton =
classroom.getElementsByTagName("button")[2];



/* =========================================================
   6. 🏠 처음으로 버튼 기능

   모든 화면에서 클릭하면
   타이틀 화면으로 이동합니다.
========================================================= */

const homeButtons = document.querySelectorAll(".home-button");


for(let i = 0; i < homeButtons.length; i++){

    homeButtons[i].addEventListener("click",function(){

        showScreen(title);

    });

}



/* =========================================================
   7. 이동 기능
========================================================= */


/* START → 교문 */
startButton.addEventListener("click",function(){
    showScreen(schoolGate);
});


/* 교문 → 정문 */
schoolGateButton.addEventListener("click",function(){
    showScreen(mainEntrance);
});


/* 정문 → 계단 */
entranceButton.addEventListener("click",function(){
    showScreen(stairs);
});



/* 계단 */

basementButton.addEventListener("click",function(){
    showScreen(basementHallway);
});


firstFloorButton.addEventListener("click",function(){
    showScreen(firstFloorHallway);
});


secondFloorButton.addEventListener("click",function(){
    showScreen(secondFloorHallway);
});



/* =========================================================
   지하 복도
========================================================= */


auditoriumButton.addEventListener("click",function(){
    showScreen(smallAuditorium);
});


computerButton.addEventListener("click",function(){
    showScreen(computerRoom);
});


practiceButton.addEventListener("click",function(){
    showScreen(practiceRoom);
});


basementBackButton.addEventListener("click",function(){
    showScreen(stairs);
});



/* 중강당 → 지하 복도 */

smallAuditoriumBackButton.addEventListener("click",function(){
    showScreen(basementHallway);
});



/* 컴퓨터실 → 지하 복도 */

computerRoomBackButton.addEventListener("click",function(){
    showScreen(basementHallway);
});



/* 연습실 → 지하 복도 */

practiceRoomBackButton.addEventListener("click",function(){
    showScreen(basementHallway);
});



/* =========================================================
   1층 복도
========================================================= */


gymButton.addEventListener("click",function(){
    showScreen(auditorium);
});


restroomButton.addEventListener("click",function(){
    showScreen(restroom);
});


stageButton.addEventListener("click",function(){
    showScreen(outdoorStage);
});


firstFloorBackButton.addEventListener("click",function(){
    showScreen(stairs);
});



/* 강당 */

auditoriumBackButton.addEventListener("click",function(){
    showScreen(firstFloorHallway);
});



/* 화장실 */

restroomBackButton.addEventListener("click",function(){
    showScreen(firstFloorHallway);
});



/* 야외공연장 */

outdoorStageBackButton.addEventListener("click",function(){
    showScreen(firstFloorHallway);
});



/* =========================================================
   2층 복도
========================================================= */


classroomButton.addEventListener("click",function(){
    showScreen(classroom);
});


secondFloorBackButton.addEventListener("click",function(){
    showScreen(stairs);
});



/* =========================================================
   교실
========================================================= */


/*
   사물함 버튼은 아직 기능 없음
*/

lockerButton.addEventListener("click",function(){

    // 다음 단계에서 악보 획득 기능 추가 예정

});



/* 교실 → 2층 복도 */

classroomBackButton.addEventListener("click",function(){
    showScreen(secondFloorHallway);
});
