/* ======================================
   학교 방탈출 게임
   최초 버전
====================================== */

/*
    화면 목록

    - titleScreen
    - gateScreen
    - entranceScreen

    앞으로 화면을 추가할 때는
    HTML에 section을 추가하고
    showScreen()만 호출하면 된다.
*/


// -----------------------------
// 화면 요소
// -----------------------------

const titleScreen = document.getElementById("titleScreen");
const gateScreen = document.getElementById("gateScreen");
const entranceScreen = document.getElementById("entranceScreen");


// -----------------------------
// 버튼
// -----------------------------

const newGameBtn = document.getElementById("newGameBtn");
const continueBtn = document.getElementById("continueBtn");

const enterSchoolBtn = document.getElementById("enterSchoolBtn");
const stairsBtn = document.getElementById("stairsBtn");


// -----------------------------
// 화면 전환 함수
// -----------------------------

function showScreen(screen) {

    titleScreen.classList.add("hidden");
    gateScreen.classList.add("hidden");
    entranceScreen.classList.add("hidden");

    screen.classList.remove("hidden");

}


// -----------------------------
// 이어하기 버튼 상태 확인
// -----------------------------

function checkSaveData() {

    const saveData = localStorage.getItem("schoolEscapeSave");

    if (saveData) {
        continueBtn.disabled = false;
    } else {
        continueBtn.disabled = true;
    }

}


// -----------------------------
// 새 게임
// -----------------------------

newGameBtn.addEventListener("click", function () {

    // 앞으로 저장 데이터가 늘어나도
    // 여기에서 초기화하면 된다.
    localStorage.removeItem("schoolEscapeSave");

    showScreen(gateScreen);

});


// -----------------------------
// 이어하기
// -----------------------------

continueBtn.addEventListener("click", function () {

    // 아직 저장 기능은 구현하지 않았다.
    alert("이어하기 기능은 추후 구현됩니다.");

});


// -----------------------------
// 교문 → 정문 입구
// -----------------------------

enterSchoolBtn.addEventListener("click", function () {

    showScreen(entranceScreen);

});


// -----------------------------
// 정문 입구 → 계단
// -----------------------------

stairsBtn.addEventListener("click", function () {

    alert("계단은 다음 단계에서 구현됩니다.");

});


// -----------------------------
// 시작
// -----------------------------

checkSaveData();
