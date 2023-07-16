const quizData = [
    {
        question : "1. 다음 중 살아있는 개인에 관한 정보를 의미하는 용어는 무엇일까요?",
        a : "개인정보",
        b : "정보주체",
        c : "영상정보처리기기",
        d : "가명처리",
        correct : 'a',
    },
    {
        question : "2. 다음 중 일반 법에 해당하는 법은 무엇일까요?",
        a : "개인정보 보호법",
        b : "신용정보법",
        c : "의료법",
        d : "가명정보 처리 특례법",
        correct : 'a',
    },
    {
        question : "3. 데이터 3법에 관한 법률이 아닌 것은 무엇일까요?",
        a : "개인정보 보호법",
        b : "신용정보법",
        c : "정보통신망법",
        d : "의료법",
        correct : 'd',
    },
    {
        question : "4. 다음 중 잘못된 것은 무엇일까요?",
        a : "개인정보가 포함된 업무자료를 정보주체 동의 없이 국회에 제출할 수 있다.",
        b : "청사 방호 보안 및 사고 예방을 목적으로 수집한 칙원의 출입 기록을 구회에 제출하는 것은 불가능하다. ",
        c : "공단이 신규 임원 채용 시 임용 대상자가 제출한 자료를 지방의회에 제출할 수 있다.",
        d : "영상정보처리기기 운영자는 CCTV의 녹음기능을 사용할 수 없다.",
        correct : 'b',
    },
    {
        question : "'5. 개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법으로 추가정보가 없이는 특정 개인을 알아볼 수 없도록 처리하는 것'에 해당하는 용어는 무엇일까요?",
        a : "가명정보",
        b : "익명정보",
        c : "가명처리",
        d : "특이정보",
        correct : 'c',
    },
    {
        question : "6. 가명처리 과정에 대한 설명 중 틀린 것은 무엇일까요?",
        a : "식별정보는 원칙적으로 삭제해야 한다.",
        b : "특이정보는 반드시 필요하지 않다면 삭제해야 한다.",
        c : "처리 환경에 대한 안전성 입증 관련 협의가 필요하다.",
        d : "가명 처리할 때에는 특정 정보주체의 사회적 파장 등의 영향도까지는 신경 쓰지 않아도 된다. ",
        correct : 'd',
    },
    {
        question : "7. 개인정보보호법에 따르면, 개인정보 처리자는 어떤 의무를 가지고 있을까요?",
        a : "개인정보 수집 목적 제공",
        b : "정보주체의 동의 없이 개인정보 제공",
        c : "개인정보의 무단 변경",
        d : "개인정보 침해 사고 발생 시 알리지 않기",
        correct : 'a',
    },
    {
        question : "8. 개인 정보 중 사회적 정보에 해당하지 않는 것은 무엇일까요?",
        a : "교육 정보",
        b : "소득 정보",
        c : "법적 정보",
        d : "병역 정보",
        correct : 'b',
    },
    {
        question : "9. 다음 중 고유식별정보에 해당하지 않는 것은 무엇일까요?",
        a : "휴대폰 번호",
        b : "운전면허번호",
        c : "여권번호",
        d : "외국인등록번호",
        correct : 'a',
    },
    {
        question : "10. 다음 중 민감정보에 해당하지 않는 것은 무엇일까요?",
        a : "주민등록번호",
        b : "건강 정보",
        c : "정치적 견해에 관한 정보",
        d : "범죄경력자료",
        correct : 'a',
    },
    {
        question : "11. 개인정보의 처리에 관한 업무를 총괄하여 책임지는 자를 일컫는 용어는 무엇일까요?",
        a : "개인정보처리자",
        b : "개인정보취급자",
        c : "정보주체",
        d : "개인정보 보호책임자",
        correct : 'd',
    },
    {
        question : "12. CPO의 업무 대한 설명으로 옳지 않은 것은 무엇일까요?",
        a : "개인정보 보호 계획의 수립 및 시행",
        b : "감독기구와의 협력",
        c : "개인정보파일의 보호 및 관리&감독",
        d : "개인정보 보호 관련 자료의 관리",
        correct : 'b',
    },
    {
        question : "13. DPO의 업무 대한 설명으로 옳지 않은 것은 무엇일까요?",
        a : "개인정보 처리방침의 수립&변경 및 시행",
        b : "사업자 내에서 감독기구와의 창구 역할",
        c : "GDPR 등 개인정보보호 법규 모니터링",
        d : "GDPR 등 의무 수행에 관한 고지와 조언",
        correct : 'a',
    },
    {
        question : "14. 개인정보 처리방침에 대한 설명으로 옳지 않은 것은 무엇일까요?",
        a : "정보주체가 쉽게 확인할 수 있는 곳에 게시한다.",
        b : "글자 크기, 색상 등을 활용하여 정보주체가 쉽게 확인할 수 있도록 해야 한다.",
        c : "한 회사 당 하나의 개인정보 처리방침이 존재한다.",
        d : "인터넷 홈페이지에 지속적으로 게시한다.",
        correct : 'c',
    },
    {
        question : "15. 정보주체의 동의 없이 가명정보를 처리할 수 있는 목적으로 옳지 않은 것은 무엇일까요?",
        a : "과학적 연구",
        b : "실제 서비스",
        c : "통계 작성",
        d : "공익적 기록보존",
        correct : 'b',
    }
   

]

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    let answer  = undefined;
    answers.forEach((answer1)=>{
        if(answer1.checked){
            answer =  answer1.id;
        }
    })
    return answer;
}

function deselectAnswers(){
    answers.forEach((answer1)=>{
        answer1.checked = false;
    })
}

submit.addEventListener("click",() =>{
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2> ${score} / ${quizData.length} 개 정답!</h2>
            <button onclick="location.reload()">Reload</button>
            <button onclick="location.href='answer.html'">Answer</button>`
        }
    }
});