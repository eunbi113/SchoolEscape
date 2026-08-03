/* =====================================
   심야의 학교
===================================== */

/*
    화면 목록

    - titleScreen
    - gateScreen
    - entranceScreen
    - stairsScreen

    새로운 화면을 만들 때는
    HTML에 section을 추가한 뒤
    아래 showScreen()에서 숨기는 목록에만
    추가하면 된다.
*/

// =========================
// 화면 요소
// =========================

const titleScreen = document.getElementById("titleScreen");
const gateScreen = document.getElementById("gateScreen");
const entranceScreen = document.getElementById("entranceScreen");
const stairsScreen = document.getElementById("stairsScreen");
const basementHallScreen = document.getElementById("basementHallScreen");

// =========================
// 버튼 요소
// =========================

const newGameBtn = document.getElementById("newGameBtn");
const continueBtn = document.getElementById("continueBtn");

const enterSchoolBtn = document.getElementById("enterSchoolBtn");
const stairsBtn = document.getElementById("stairsBtn");

const basementBtn = document.getElementById("basementBtn");
const floor1Btn = document.getElementById("floor1Btn");
const floor2Btn = document.getElementById("floor2Btn");

// =========================
// 화면 전환
// =========================

function showScreen(screen) {

    titleScreen.classList.add("hidden");
    gateScreen.classList.add("hidden");
    entranceScreen.classList.add("hidden");
    stairsScreen.classList.add("hidden");
    screen.classList.remove("hidden");
    basementHallScreen.classList.add("hidden");
}

// =========================
// 이어하기 버튼 상태
// =========================

function updateContinueButton() {

    const saveData = localStorage.getItem("schoolEscapeSave");

    continueBtn.disabled = !saveData;
}

// =========================
// 새 게임
// =========================

newGameBtn.addEventListener("click", function () {

    localStorage.removeItem("schoolEscapeSave");

    showScreen(gateScreen);

});

// =========================
// 이어하기
// =========================

continueBtn.addEventListener("click", function () {

    alert("이어하기 기능은 다음 단계에서 구현됩니다.");

});

// =========================
// 교문 → 정문 입구
// =========================

enterSchoolBtn.addEventListener("click", function () {

    showScreen(entranceScreen);

});

// =========================
// 정문 입구 → 계단
// =========================

stairsBtn.addEventListener("click", function () {

    showScreen(stairsScreen);

});

// =========================
// 계단 → 층 이동
// (현재는 안내만 출력)
// =========================

basementBtn.addEventListener("click", function () {

    showScreen(basementHallScreen);

});

floor1Btn.addEventListener("click", function () {

    alert("다음 단계에서 구현됩니다.");

});

floor2Btn.addEventListener("click", function () {

    alert("다음 단계에서 구현됩니다.");

});

// =========================
// 시작
// =========================

updateContinueButton();
