

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });


  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, 
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the official language in Singapore?',
      o: ['German', 'English', 'French', 'Spanish'],
      a: 1,
    },
    {
      q: 'Where is Brazil?',
      o: ['North America', 'Asia', 'Europe', 'South America'],
      a: 3,
    }
  ];


  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });

  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          liElement.style.backgroundColor = 'lightblue';
        }

        if (radioElement.checked) {
          if(quizItem.a == i)
          score++;
        }
      }
      
    });

    document.getElementById('score').innerHTML = 'Score is:' + score;
    document.getElementById('btnSubmit').disabled = 'true';   //prevent continue click, 
  };


let timeleft = 5;
let timerId;
const updateTimer = () => {
  const timer = document.getElementById('time');
  timer.innerHTML = timeleft;
  timeleft--;
  if (timeleft < 0) {
    endQuiz();
  }
}

timerId = setInterval(updateTimer, 1000);

function endQuiz () {
  calculateScore();
  
}

  document.getElementById('btnSubmit').addEventListener('click',calculateScore); 

  // call the displayQuiz function
  displayQuiz();
  
  
});
