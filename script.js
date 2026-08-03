/*
==========================================================
심야의 학교
script.js
Part 1 / 5
==========================================================
*/


/* ==========================================================
   화면 가져오기
========================================================== */

const title = document.getElementById("title");

const schoolGate =
document.getElementById("school-gate");

const mainEntrance =
document.getElementById("main-entrance");

const stairs =
document.getElementById("stairs");

const basementHallway =
document.getElementById("basement-hallway");

const smallAuditoriumStage =
document.getElementById("small-auditorium-stage");

const computerRoomDesk =
document.getElementById("computer-room-desk");

const computerRoomTeacher =
document.getElementById("computer-room-teacher");

const computerRoomBack =
document.getElementById("computer-room-back");

const practiceRoomBoard =
document.getElementById("practice-room-board");

const practiceRoomMirror =
document.getElementById("practice-room-mirror");

const practiceRoomDrum =
document.getElementById("practice-room-drum");

const firstFloorHallway =
document.getElementById("first-floor-hallway");

const auditoriumSeat =
document.getElementById("auditorium-seat");

const auditoriumStage =
document.getElementById("auditorium-stage");

const auditoriumAircon =
document.getElementById("auditorium-aircon");

const restroomSink =
document.getElementById("restroom-sink");

const restroomToilet =
document.getElementById("restroom-toilet");

const outdoorStageSeat =
document.getElementById("outdoor-stage-seat");

const outdoorStageStage =
document.getElementById("outdoor-stage-stage");

const outdoorStageStair =
document.getElementById("outdoor-stage-stair");

const secondFloorHallway =
document.getElementById("second-floor-hallway");

const classroomBoard =
document.getElementById("classroom-board");

const classroomDesk =
document.getElementById("classroom-desk");

const classroomLocker =
document.getElementById("classroom-locker");

const ending =
document.getElementById("ending");


/* ==========================================================
   모든 화면
========================================================== */

const screens = [

    title,

    schoolGate,
    mainEntrance,
    stairs,

    basementHallway,

    smallAuditoriumStage,

    computerRoomDesk,
    computerRoomTeacher,
    computerRoomBack,

    practiceRoomBoard,
    practiceRoomMirror,
    practiceRoomDrum,

    firstFloorHallway,

    auditoriumSeat,
    auditoriumStage,
    auditoriumAircon,

    restroomSink,
    restroomToilet,

    outdoorStageSeat,
    outdoorStageStage,
    outdoorStageStair,

    secondFloorHallway,

    classroomBoard,
    classroomDesk,
    classroomLocker,

    ending

];


/* ==========================================================
   화면 전환
========================================================== */

function showScreen(screen){

    screens.forEach(function(section){

        section.style.display = "none";

    });

    screen.style.display = "block";

}

showScreen(title);


/* ==========================================================
   버튼 연결 함수
========================================================== */

function connect(buttonId, nextScreen){

    const button =
    document.getElementById(buttonId);

    if(button){

        button.addEventListener("click", function(){

            showScreen(nextScreen);

        });

    }

}


/* ==========================================================
   타이틀
========================================================== */

connect(
    "start-button",
    schoolGate
);


/* ==========================================================
   교문
========================================================== */

connect(
    "enter-school-button",
    mainEntrance
);


/* ==========================================================
   정문
========================================================== */

connect(
    "move-stairs-button",
    stairs
);


/* ==========================================================
   계단
========================================================== */

connect(
    "go-basement-button",
    basementHallway
);

connect(
    "go-first-floor-button",
    firstFloorHallway
);

connect(
    "go-second-floor-button",
    secondFloorHallway
);


/* ==========================================================
   지하 복도
========================================================== */

connect(
    "go-small-auditorium-button",
    smallAuditoriumStage
);

connect(
    "go-computer-room-button",
    computerRoomDesk
);

connect(
    "go-practice-room-button",
    practiceRoomBoard
);

connect(
    "basement-hallway-back-basement-button",
    stairs
);

/* ==========================================================
   중강당
========================================================== */

connect(
    "small-auditorium-stage-back-basement-button",
    basementHallway
);


/* ==========================================================
   컴퓨터실 - 기본
========================================================== */

connect(
    "computer-room-desk-to-teacher-button",
    computerRoomTeacher
);

connect(
    "computer-room-desk-to-back-button",
    computerRoomBack
);

connect(
    "computer-room-desk-back-basement-button",
    basementHallway
);


/* ==========================================================
   컴퓨터실 - 교탁
========================================================== */

connect(
    "computer-room-teacher-to-desk-button",
    computerRoomDesk
);

connect(
    "computer-room-teacher-back-basement-button",
    basementHallway
);


/* ==========================================================
   컴퓨터실 - 뒤편
========================================================== */

connect(
    "computer-room-back-to-desk-button",
    computerRoomDesk
);

connect(
    "computer-room-back-back-basement-button",
    basementHallway
);


/* ==========================================================
   연습실 - 칠판
========================================================== */

connect(
    "practice-room-board-to-mirror-button",
    practiceRoomMirror
);

connect(
    "practice-room-board-to-drum-button",
    practiceRoomDrum
);

connect(
    "practice-room-board-back-basement-button",
    basementHallway
);


/* ==========================================================
   연습실 - 거울
========================================================== */

connect(
    "practice-room-mirror-to-board-button",
    practiceRoomBoard
);

connect(
    "practice-room-mirror-back-basement-button",
    basementHallway
);


/* ==========================================================
   연습실 - 장구
========================================================== */

connect(
    "practice-room-drum-to-board-button",
    practiceRoomBoard
);

connect(
    "practice-room-drum-back-basement-button",
    basementHallway
);

/* ==========================================================
   1층 복도
========================================================== */

connect(
    "go-auditorium-button",
    auditoriumSeat
);

connect(
    "go-restroom-button",
    restroomSink
);

connect(
    "go-outdoor-stage-button",
    outdoorStageSeat
);

connect(
    "first-floor-hallway-back-stairs-button",
    stairs
);


/* ==========================================================
   강당 - 객석
========================================================== */

connect(
    "auditorium-seat-to-aircon-button",
    auditoriumAircon
);

connect(
    "auditorium-seat-to-stage-button",
    auditoriumStage
);

connect(
    "auditorium-seat-back-first-floor-button",
    firstFloorHallway
);


/* ==========================================================
   강당 - 무대
========================================================== */

connect(
    "auditorium-stage-to-seat-button",
    auditoriumSeat
);

connect(
    "auditorium-stage-back-first-floor-button",
    firstFloorHallway
);


/* ==========================================================
   강당 - 에어컨
========================================================== */

connect(
    "auditorium-aircon-to-seat-button",
    auditoriumSeat
);

connect(
    "auditorium-aircon-back-first-floor-button",
    firstFloorHallway
);


/* ==========================================================
   화장실 - 세면대
========================================================== */

connect(
    "restroom-sink-to-toilet-button",
    restroomToilet
);

connect(
    "restroom-sink-back-first-floor-button",
    firstFloorHallway
);


/* ==========================================================
   화장실 - 변기칸
========================================================== */

connect(
    "restroom-toilet-to-sink-button",
    restroomSink
);

connect(
    "restroom-toilet-back-first-floor-button",
    firstFloorHallway
);


/* ==========================================================
   야외공연장 - 객석
========================================================== */

connect(
    "outdoor-stage-seat-to-stage-button",
    outdoorStageStage
);

connect(
    "outdoor-stage-seat-to-stair-button",
    outdoorStageStair
);

connect(
    "outdoor-stage-seat-back-first-floor-button",
    firstFloorHallway
);


/* ==========================================================
   야외공연장 - 무대
========================================================== */

connect(
    "outdoor-stage-stage-to-seat-button",
    outdoorStageSeat
);

connect(
    "outdoor-stage-stage-back-first-floor-button",
    firstFloorHallway
);


/* ==========================================================
   야외공연장 - 계단
========================================================== */

connect(
    "outdoor-stage-stair-to-seat-button",
    outdoorStageSeat
);

connect(
    "outdoor-stage-stair-back-first-floor-button",
    firstFloorHallway
);

/* ==========================================================
   2층 복도
========================================================== */

connect(
    "go-classroom-button",
    classroomBoard
);

connect(
    "second-floor-hallway-back-stairs-button",
    stairs
);


/* ==========================================================
   교실 - 칠판
========================================================== */

connect(
    "classroom-board-to-desk-button",
    classroomDesk
);

connect(
    "classroom-board-back-second-floor-button",
    secondFloorHallway
);


/* ==========================================================
   교실 - 책상
========================================================== */

connect(
    "classroom-desk-to-board-button",
    classroomBoard
);

connect(
    "classroom-desk-to-locker-button",
    classroomLocker
);

connect(
    "classroom-desk-back-second-floor-button",
    secondFloorHallway
);


/* ==========================================================
   교실 - 사물함
========================================================== */

connect(
    "classroom-locker-to-desk-button",
    classroomDesk
);

connect(
    "classroom-locker-back-second-floor-button",
    secondFloorHallway
);


/* ==========================================================
   사물함 조사
========================================================== */

const lockerButton =
document.getElementById("classroom-locker-investigate-button");

if(lockerButton){

    lockerButton.addEventListener("click", function(){

        showScreen(ending);

    });

}


/* ==========================================================
   엔딩
========================================================== */

connect(
    "restart-button",
    title
);

/* ==========================================================
   🏠 홈 버튼
========================================================== */

const homeButtons =
document.querySelectorAll(".home-button");

homeButtons.forEach(function(button){

    button.addEventListener("click", function(){

        showScreen(title);

    });

});


/* ==========================================================
   이어하기
   (추후 저장 기능 추가 예정)
========================================================== */

const continueButton =
document.getElementById("continue-button");

if(continueButton){

    continueButton.addEventListener("click", function(){

        alert("이어하기 기능은 추후 추가됩니다.");

    });

}


/* ==========================================================
   조사 함수
========================================================== */

function investigate(buttonId, message){

    const button =
    document.getElementById(buttonId);

    if(button){

        button.addEventListener("click", function(){

            alert(message);

        });

    }

}


/* ==========================================================
   아이템 획득 함수
========================================================== */

const inventory = [];

function getItem(buttonId, itemName, message){

    const button =
    document.getElementById(buttonId);

    if(button){

        button.addEventListener("click", function(){

            if(inventory.includes(itemName)){

                alert("이미 획득한 아이템입니다.");

                return;

            }

            inventory.push(itemName);

            alert(message);

        });

    }

}


/* ==========================================================
   아이템 확인 함수
========================================================== */

function hasItem(itemName){

    return inventory.includes(itemName);

}


/* ==========================================================
   조사 등록
   (5차시부터 하나씩 추가)
========================================================== */

/*

예시)

investigate(
    "computer-room-monitor-investigate-button",
    "모니터가 켜져 있다."
);

investigate(
    "practice-room-board-investigate-button",
    "칠판에 악보 일부가 적혀 있다."
);

*/


/* ==========================================================
   아이템 등록
   (6차시부터 하나씩 추가)
========================================================== */

/*

예시)

getItem(
    "locker-investigate-button",
    "악보",
    "악보를 획득했다!"
);

*/


/* ==========================================================
   엔딩 조건
   (추후 수정)
========================================================== */

/*

if(hasItem("악보")){

    showScreen(ending);

}

*/
