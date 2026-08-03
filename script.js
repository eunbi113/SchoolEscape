/* ===================================================== */
/* 심야의 학교 */
/* ===================================================== */

const inventory = [];

function hasItem(item){

    return inventory.includes(item);

}

/* ----------------------------------------------------- */
/* 화면 */
/* ----------------------------------------------------- */

const screens = document.querySelectorAll("section");

/* ----------------------------------------------------- */
/* 화면 전환 */
/* ----------------------------------------------------- */

function show(screenId){

    screens.forEach(screen=>{

        screen.style.display="none";

    });

    document.getElementById(screenId).style.display="flex";

}


/* ----------------------------------------------------- */
/* 이동 연결 */
/* ----------------------------------------------------- */

function connect(buttonId,nextScreen){

    const button=document.getElementById(buttonId);

    if(!button) return;

    button.addEventListener("click",()=>{

        show(nextScreen);

    });

}


/* ----------------------------------------------------- */
/* 홈 버튼 */
/* ----------------------------------------------------- */

function home(buttonId){

    const button=document.getElementById(buttonId);

    if(!button) return;

    button.addEventListener("click",()=>{

        show("title");

    });

}


/* ----------------------------------------------------- */
/* 시작 */
/* ----------------------------------------------------- */

connect(
    "start-button",
    "school-gate"
);

connect(
    "continue-button",
    "school-gate"
);


/* ----------------------------------------------------- */
/* 교문 */
/* ----------------------------------------------------- */

home(
    "home-school-gate"
);

connect(
    "enter-school-button",
    "main-entrance"
);


/* ----------------------------------------------------- */
/* 정문 */
/* ----------------------------------------------------- */

home(
    "home-main-entrance"
);

connect(
    "move-stairs-button",
    "stairs"
);


/* ----------------------------------------------------- */
/* 계단 */
/* ----------------------------------------------------- */

home(
    "home-stairs"
);

connect(
    "go-basement-button",
    "basement-hallway"
);

connect(
    "go-first-floor-button",
    "first-floor-hallway"
);

connect(
    "go-second-floor-button",
    "second-floor-hallway"
);


/* ----------------------------------------------------- */
/* 지하 복도 */
/* ----------------------------------------------------- */

home(
    "home-basement-hallway"
);

connect(
    "go-small-auditorium-button",
    "small-auditorium-stage"
);

connect(
    "go-computer-room-button",
    "computer-room-desk"
);

connect(
    "go-practice-room-button",
    "practice-room-board"
);


connect(
    "basement-hallway-back-stairs-button",
    "stairs"
);


/* ----------------------------------------------------- */
/* 1층 복도 */
/* ----------------------------------------------------- */

home(
    "home-first-floor-hallway"
);

connect(
    "go-auditorium-button",
    "auditorium-seat"
);

connect(
    "go-restroom-button",
    "restroom-sink"
);

connect(
    "go-outdoor-stage-button",
    "outdoor-stage-seat"
);

connect(
    "first-floor-hallway-back-stairs-button",
    "stairs"
);


/* ----------------------------------------------------- */
/* 2층 복도 */
/* ----------------------------------------------------- */

home(
    "home-second-floor-hallway"
);

connect(
    "go-classroom-button",
    "classroom-board"
);

connect(
    "second-floor-hallway-back-stairs-button",
    "stairs"
);

/* ----------------------------------------------------- */
/* 중강당 */
/* ----------------------------------------------------- */

home(
    "home-small-auditorium-stage"
);

connect(
    "small-auditorium-stage-back-basement-button",
    "basement-hallway"
);


/* ----------------------------------------------------- */
/* 컴퓨터실 - 책상 */
/* ----------------------------------------------------- */

home(
    "home-computer-room-desk"
);

connect(
    "computer-room-desk-to-teacher-button",
    "computer-room-teacher"
);

connect(
    "computer-room-desk-to-back-button",
    "computer-room-back"
);

connect(
    "computer-room-desk-back-basement-button",
    "basement-hallway"
);


/* ----------------------------------------------------- */
/* 컴퓨터실 - 교탁 */
/* ----------------------------------------------------- */

home(
    "home-computer-room-teacher"
);

connect(
    "computer-room-teacher-to-desk-button",
    "computer-room-desk"
);

connect(
    "computer-room-teacher-back-basement-button",
    "basement-hallway"
);


/* ----------------------------------------------------- */
/* 컴퓨터실 - 뒤편 */
/* ----------------------------------------------------- */

home(
    "home-computer-room-back"
);

connect(
    "computer-room-back-to-desk-button",
    "computer-room-desk"
);

connect(
    "computer-room-back-back-basement-button",
    "basement-hallway"
);


/* ----------------------------------------------------- */
/* 연습실 - 칠판 */
/* ----------------------------------------------------- */

home(
    "home-practice-room-board"
);

connect(
    "practice-room-board-to-mirror-button",
    "practice-room-mirror"
);

connect(
    "practice-room-board-to-drum-button",
    "practice-room-drum"
);

connect(
    "practice-room-board-back-basement-button",
    "basement-hallway"
);


/* ----------------------------------------------------- */
/* 연습실 - 거울 */
/* ----------------------------------------------------- */

home(
    "home-practice-room-mirror"
);

connect(
    "practice-room-mirror-to-board-button",
    "practice-room-board"
);

connect(
    "practice-room-mirror-back-basement-button",
    "basement-hallway"
);


/* ----------------------------------------------------- */
/* 연습실 - 장구 */
/* ----------------------------------------------------- */

home(
    "home-practice-room-drum"
);

connect(
    "practice-room-drum-to-board-button",
    "practice-room-board"
);

connect(
    "practice-room-drum-back-basement-button",
    "basement-hallway"
);

/* ----------------------------------------------------- */
/* 강당 - 객석 */
/* ----------------------------------------------------- */

home(
    "home-auditorium-seat"
);

connect(
    "auditorium-seat-to-stage-button",
    "auditorium-stage"
);

connect(
    "auditorium-seat-to-aircon-button",
    "auditorium-aircon"
);

connect(
    "auditorium-seat-back-basement-button",
    "first-floor-hallway"
);


/* ----------------------------------------------------- */
/* 강당 - 무대 */
/* ----------------------------------------------------- */

home(
    "home-auditorium-stage"
);

connect(
    "auditorium-stage-to-seat-button",
    "auditorium-seat"
);

connect(
    "auditorium-stage-back-basement-button",
    "first-floor-hallway"
);


/* ----------------------------------------------------- */
/* 강당 - 에어컨 */
/* ----------------------------------------------------- */

home(
    "home-auditorium-aircon"
);

connect(
    "auditorium-aircon-to-seat-button",
    "auditorium-seat"
);

connect(
    "auditorium-aircon-back-basement-button",
    "first-floor-hallway"
);


/* ----------------------------------------------------- */
/* 화장실 - 세면대 */
/* ----------------------------------------------------- */

home(
    "home-restroom-sink"
);

connect(
    "restroom-sink-to-toilet-button",
    "restroom-toilet"
);

connect(
    "restroom-sink-back-basement-button",
    "first-floor-hallway"
);


/* ----------------------------------------------------- */
/* 화장실 - 변기칸 */
/* ----------------------------------------------------- */

home(
    "home-restroom-toilet"
);

connect(
    "restroom-toilet-to-sink-button",
    "restroom-sink"
);

connect(
    "restroom-toilet-back-basement-button",
    "first-floor-hallway"
);


/* ----------------------------------------------------- */
/* 야외공연장 - 객석 */
/* ----------------------------------------------------- */

home(
    "home-outdoor-stage-seat"
);

connect(
    "outdoor-stage-seat-to-stage-button",
    "outdoor-stage-stage"
);

connect(
    "outdoor-stage-seat-to-stair-button",
    "outdoor-stage-stair"
);

connect(
    "outdoor-stage-seat-back-basement-button",
    "first-floor-hallway"
);


/* ----------------------------------------------------- */
/* 야외공연장 - 무대 */
/* ----------------------------------------------------- */

home(
    "home-outdoor-stage-stage"
);

connect(
    "outdoor-stage-to-seat-button",
    "outdoor-stage-seat"
);

connect(
    "outdoor-stage-stage-back-basement-button",
    "first-floor-hallway"
);


/* ----------------------------------------------------- */
/* 야외공연장 - 계단 */
/* ----------------------------------------------------- */

home(
    "home-outdoor-stage-stair"
);

connect(
    "outdoor-stage-stair-to-seat-button",
    "outdoor-stage-seat"
);

connect(
    "outdoor-stage-stair-back-basement-button",
    "first-floor-hallway"
);

/* ----------------------------------------------------- */
/* 교실 - 칠판 */
/* ----------------------------------------------------- */

home(
    "home-classroom-board"
);

connect(
    "classroom-board-to-desk-button",
    "classroom-desk"
);

connect(
    "classroom-board-back-second-floor-button",
    "second-floor-hallway"
);


/* ----------------------------------------------------- */
/* 교실 - 책상 */
/* ----------------------------------------------------- */

home(
    "home-classroom-desk"
);

connect(
    "classroom-desk-to-board-button",
    "classroom-board"
);

connect(
    "classroom-desk-to-locker-button",
    "classroom-locker"
);

connect(
    "classroom-desk-back-second-floor-button",
    "second-floor-hallway"
);


/* ----------------------------------------------------- */
/* 교실 - 사물함 */
/* ----------------------------------------------------- */

home(
    "home-classroom-locker"
);

connect(
    "classroom-locker-to-desk-button",
    "classroom-desk"
);

connect(
    "classroom-locker-back-second-floor-button",
    "second-floor-hallway"
);


/* ----------------------------------------------------- */
/* 엔딩 */
/* ----------------------------------------------------- */

home(
    "home-ending"
);

connect(
    "restart-button",
    "title"
);


/* ----------------------------------------------------- */
/* 아이템 */
/* ----------------------------------------------------- */


/* ----------------------------------------------------- */
/* 조사 */
/* ----------------------------------------------------- */

function investigate(buttonId,message){

    const button=document.getElementById(buttonId);

    if(!button) return;

    button.addEventListener("click",()=>{

        alert(message);

    });

}

function miniGame(buttonId,callback){

    const button=document.getElementById(buttonId);

    if(!button) return;

    button.addEventListener("click",()=>{

        callback();

    });

}


/* ----------------------------------------------------- */
/* 아이템 획득 */
/* ----------------------------------------------------- */

function getItem(itemName,message){

    if(hasItem(itemName)){

        alert("이미 획득했습니다.");

        return;

    }

    inventory.push(itemName);

    alert(message);

}

function computerRoomMathGame(){

    const answer=prompt(
        "모니터에 문제가 적혀 있다.\n\n11 × 4 = ?"
    );

    if(answer===null){

        return;

    }

    if(answer.trim() === "44"){

        getItem(
            "memo1",
            "메모를 발견했다!\n\n열쇠는 1층에 있다."
        );

    }else{

        alert("틀렸습니다.");

    }

}

/* ----------------------------------------------------- */
/* 엔딩 */
/* ----------------------------------------------------- */

function ending(buttonId){

    const button=document.getElementById(buttonId);

    if(!button) return;

    button.addEventListener("click",()=>{

        show("ending");

    });

}


/* ----------------------------------------------------- */
/* 기본 조사 */
/* ----------------------------------------------------- */

investigate(
    "small-auditorium-stage-button",
    "이곳에는 아무것도 없어 보인다."
);

investigate(
    "computer-room-desk-button",
    "이 시간에 이상하게 모니터가 켜져있다."
);

investigate(
    "computer-room-back-button",
    "꽤나 큰 거울이 벽에 걸려 있다."
);

investigate(
    "practice-room-mirror-button",
    "한쪽 벽을 꽉 채운 거울이 있다."
);

investigate(
    "practice-room-drum-button",
    "악기 소리가 좋다."
);

investigate(
    "auditorium-seat-button",
    "이곳에는 뭐가 있을까"

);

investigate(
    "auditorium-aircon-button",
    "이상하게 냉기가 느껴진다."
);

investigate(
    "restroom-sink-mirror-button",
    "거울 속에 내 모습이 비친다."
);

investigate(
    "restroom-toilet-button",
    "화장실이 꽤나 깨끗하다"
);

investigate(
    "outdoor-stage-seat-button",
    "밤이라 그런지 매우 어둡다."
);

investigate(
    "outdoor-stage-stair-button",
    "무대가 한 눈에 보인다."
);

investigate(
    "classroom-board-button",
    "시험 일정이 적혀 있다."
);

investigate(
    "classroom-desk-button",
    "익숙한 책상이다."
);

miniGame(
    "computer-room-teacher-button",
    computerRoomMathGame
);


/* ----------------------------------------------------- */
/* 엔딩 아이템 */
/* ----------------------------------------------------- */
