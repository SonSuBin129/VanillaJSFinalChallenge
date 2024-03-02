const LoginSignUp = document.querySelector("#LoginSignUp");
const idInput = LoginSignUp.querySelector("#ID");
const pwInput = LoginSignUp.querySelector("#PW");
const loginBtn = document.querySelector("#loginBtn");
const signupBtn = document.querySelector("#signupBtn");

const CURRENT_USER_KEY = "currentUser";

function LoginHandler() {
  const id = idInput.value;
  const pw = pwInput.value;

  //input field 초기화
  idInput.value = "";
  pwInput.value = "";

  if ("" === id || "" === pw) {
    alert("ID와 PW를 모두 올바르게 입력해주세요.");
  } else if (null === localStorage.getItem(id)) {
    //해당 아이디에 맞는 정보가 없는 경우
    alert("회원가입을 진행해주세요!");
  } else if (pw !== localStorage.getItem(id)) {
    //비밀번호가 일치하지 않는 경우
    alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
  } else {
    //로그인 성공한 경우, 메인 화면으로 이동
    alert("로그인 성공!");
    location.href = "main.html";
    localStorage.setItem(CURRENT_USER_KEY, id);
  }
}

function SignUpHandler() {
  const id = idInput.value;
  const pw = pwInput.value;

  //input field 초기화
  idInput.value = "";
  pwInput.value = "";

  if ("" === id || "" === pw) {
    alert("ID와 PW를 모두 올바르게 입력해주세요.");
  } else if (null !== localStorage.getItem(id)) {
    //이미 해당 아이디가 존재하는 경우
    alert("이미 해당 아이디가 존재합니다. 다른 아이디를 사용해주세요.");
  } else {
    alert("회원가입 성공!");
    localStorage.setItem(id, pw);
  }
}

loginBtn.addEventListener("click", LoginHandler);
signupBtn.addEventListener("click", SignUpHandler);
