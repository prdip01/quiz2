// Questions and Answers
const quizData = [

      
        {
          question: "What is the capital of Jharkhand?",
          options: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro"],
          answer: 0
        },
        {
          question: "Which tribe is the largest in Jharkhand?",
          options: ["Santhal", "Munda", "Oraon", "Ho"],
          answer: 0
        },
        {
          question: "What is the famous festival of Jharkhand celebrating nature and agriculture?",
          options: ["Durga Puja", "Sarhul", "Chhath Puja", "Teej"],
          answer: 1
        },
        {
          question: "Which city in Jharkhand is known as the 'Steel City'?",
          options: ["Bokaro", "Ranchi", "Dhanbad", "Jamshedpur"],
          answer: 3
        },
        {
          question: "Which national park in Jharkhand is known for its tiger population?",
          options: ["Hazaribagh National Park", "Betla National Park", "Palamu National Park", "Dalma Wildlife Sanctuary"],
          answer: 1
        },
        {
          question: "Jharkhand was formed in which year?",
          options: ["2000", "1998", "2001", "1999"],
          answer: 0
        },
        {
          question: "Which river flows through Jharkhand?",
          options: ["Ganga", "Son", "Subarnarekha", "Godavari"],
          answer: 2
        },
        {
          question: "What is the primary occupation of people in Jharkhand?",
          options: ["Mining", "Agriculture", "IT Sector", "Handicrafts"],
          answer: 1
        },
        {
          question: "Which temple in Jharkhand is a prominent pilgrimage site for Hindus?",
          options: ["Baidyanath Temple", "Jagannath Temple", "Sun Temple", "Chhinnamasta Temple"],
          answer: 0
        },
        {
          question: "What is the literacy rate of Jharkhand as per recent data?",
          options: ["70.3%", "66.4%", "72.5%", "68.5%"],
          answer: 3
        }
      

  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  // DOM Elements
  const questionEl = document.getElementById('question');
  const optionsEl = document.querySelectorAll('.option');
  const scoreEl = document.getElementById('score');
  const resultContainer = document.getElementById('result-container');
  const restartBtn = document.getElementById('restart-btn');
  
  // Load Question
  function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    optionsEl.forEach((button, index) => {
      button.textContent = currentQuiz.options[index];
      button.onclick = () => checkAnswer(index);
    });
  }
  
  // Check Answer
  function checkAnswer(selectedOption) {
    if (selectedOption === quizData[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Show Result
  function showResult() {
    document.getElementById('question-container').style.display = 'none';
    resultContainer.style.display = 'block';
    scoreEl.textContent = `Score: ${score}`;
  }
  
  // Restart Quiz
  restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    resultContainer.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    loadQuestion();
  };
  
  // Initialize Quiz
  loadQuestion();