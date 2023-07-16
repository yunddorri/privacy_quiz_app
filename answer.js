const quizData = [
    {
        question : "1. 다음 중 살아있는 개인에 관한 정보를 의미하는 용어는 무엇일까요?",
        a : "개인정보"
    },
    {
        question : "2. 다음 중 일반 법에 해당하는 법은 무엇일까요?",
        a : "개인정보 보호법"
    },
    {
        question : "3. 데이터 3법에 관한 법률이 아닌 것은 무엇일까요?",
        a : "의료법"
    },
    {
        question : "4. 다음 중 잘못된 것은 무엇일까요?",
        a : "청사 방호 보안 및 사고 예방을 목적으로 수집한 칙원의 출입 기록을 구회에 제출하는 것은 불가능하다. "
    },
    {
        question : "5. '개인정보의 일부를 삭제하거나 일부 또는 전부를 대체하는 등의 방법으로 추가정보가 없이는 특정 개인을 알아볼 수 없도록 처리하는 것'에 해당하는 용어는 무엇일까요?",
        a : "가명처리"
    },
    {
        question : "6. 가명처리 과정에 대한 설명 중 틀린 것은 무엇일까요?",
        a : "가명 처리할 때에는 특정 정보주체의 사회적 파장 등의 영향도까지는 신경 쓰지 않아도 된다. "
    },
    {
        question : "7. 개인정보보호법에 따르면, 개인정보 처리자는 어떤 의무를 가지고 있을까요?",
        a : "개인정보 수집 목적 제공"
    },
    {
        question : "8. 개인 정보 중 사회적 정보에 해당하지 않는 것은 무엇일까요?",
        a : "소득 정보"
    },
    {
        question : "9. 다음 중 고유식별정보에 해당하지 않는 것은 무엇일까요?",
        a : "휴대폰 번호"
    },
    {
        question : "10. 다음 중 민감정보에 해당하지 않는 것은 무엇일까요?",
        a : "주민등록번호"
    },
    {
        question : "11. 개인정보의 처리에 관한 업무를 총괄하여 책임지는 자를 일컫는 용어는 무엇일까요?",
        a : "개인정보 보호책임자"
    },
    {
        question : "12. CPO의 업무 대한 설명으로 옳지 않은 것은 무엇일까요?",
        a : "감독기구와의 협력"
    },
    {
        question : "13. DPO의 업무 대한 설명으로 옳지 않은 것은 무엇일까요?",
        a : "개인정보 처리방침의 수립&변경 및 시행"
    },
    {
        question : "14. 개인정보 처리방침에 대한 설명으로 옳지 않은 것은 무엇일까요?",
        a : "한 회사 당 하나의 개인정보 처리방침이 존재한다."
    },
    {
        question : "15. 정보주체의 동의 없이 가명정보를 처리할 수 있는 목적으로 옳지 않은 것은 무엇일까요?",
        a : "실제 서비스"
    }
]

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a_text');
let currentQuiz = 0;

loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
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
submit.addEventListener("click",() =>{
    const answer = getSelected();
    if(answer){
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2> 정답 확인 완료!</h2>
            <button onclick="location.href='index.html'">Test</button>
            <button onclick="location.href='answer.html'">Answer</button>`
        }
    }
});