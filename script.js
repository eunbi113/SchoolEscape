/* =====================================
   심야의 학교
   최초 버전
===================================== */

/*
    화면 목록

    - titleScreen
    - gateScreen
    - entranceScreen

    앞으로 새로운 화면을 만들 때는
    HTML에 section을 추가하고
    showScreen()에만 등록하면 된다.
*/

// =========================
// 화면 요소
// =========================

const titleScreen = document.getElementById("titleScreen");
const gateScreen = document.getElementById("gateScreen");
const entranceScreen = document.getElementById("entranceScreen");

// =========================
// 버튼 요소
// =========================

const newGameBtn = document.getElementById("newGameBtn");
const continueBtn = document.getElementById("continueBtn");

const enterSchoolBtn = document.getElementById("enterSchoolBtn");
const stairsBtn = document.getElementById("stairsBtn");

// =========================
// 화면 전환
// =========================

function showScreen(screen) {

    titleScreen.classList.add("hidden");
    gateScreen.classList.add("hidden");
    entranceScreen.classList.add("hidden");

    screen.classList.remove("hidden");
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

    // 기존 저장 데이터 삭제
    localStorage.removeItem("schoolEscapeSave");

    // 교문 화면으로 이동
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

    alert("계단은 다음 단계에서 구현됩니다.");

});

// =========================
// 시작
// =========================

updateContinueButton();
