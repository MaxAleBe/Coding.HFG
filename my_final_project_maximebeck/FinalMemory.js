const card = document.querySelectorAll('.cell');
const front = document.querySelectorAll('.front');
const container = document.querySelector('.container');
const score = document.querySelector('.score span');
const timer = document.querySelector('.timer span');
let flippedCards = [];
let hiddenCards = [];
let gameStarted = false;
let startTime;
let timerInterval;

suffleImage();
clicking();

function suffleImage() {
  card.forEach((c, index) => {
    const num = [...Array(card.length).keys()];
    const random = Math.floor(Math.random() * card.length);
    c.style.order = num[random];
    c.style.animation = `dealAnimation 0.1s ease-in-out ${index * 0.1}s forwards`;
  });
}

function clicking() {
  for (let i = 0; i < card.length; i++) {
    front[i].classList.add('show');

    setInterval(() => {
      front[i].classList.remove('show');
    }, 2000);

    card[i].addEventListener('click', () => {
      if (!gameStarted) {
        startTimer();
        gameStarted = true;
      }

      if (!card[i].classList.contains('flip') && flippedCards.length < 2 && !flippedCards.includes(front[i])) {
        front[i].classList.add('flip');
        flippedCards.push(front[i]);

        if (flippedCards.length === 2) {
          container.style.pointerEvents = 'none';
          setTimeout(() => {
            container.style.pointerEvents = 'all';
            match(flippedCards[0], flippedCards[1]);
          }, 1000);
        }
      }
    });
  }
}

function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(() => {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const minutes = Math.floor(elapsedTime / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    timer.innerHTML = `${minutes}:${padZero(seconds)}`;

    if (hiddenCards.length === card.length) {
      endGame();
    }
  }, 1000);
}

function padZero(number) {
  return number < 10 ? `0${number}` : number;
}

function match(cardOne, cardTwo) {
  if (cardOne.dataset.index === cardTwo.dataset.index) {
    score.innerHTML = parseInt(score.innerHTML) + 1;
    cardOne.parentNode.classList.add('match');
    cardTwo.parentNode.classList.add('match');
    cardOne.classList.add('found-match');
    cardTwo.classList.add('found-match');

    setTimeout(() => {
      cardOne.parentNode.style.visibility = 'hidden';
      cardTwo.parentNode.style.visibility = 'hidden';
      hiddenCards.push(cardOne.parentNode);
      hiddenCards.push(cardTwo.parentNode);

      if (hiddenCards.length === card.length) {
        endGame();
      }
    }, 300);
  } else {
    setTimeout(() => {
      cardOne.classList.remove('flip');
      cardTwo.classList.remove('flip');
    }, 1000);
  }

  flippedCards.forEach(card => {
    card.classList.remove('flip');
  });

  flippedCards = [];
}

function endGame() {
  clearInterval(timerInterval);
  const elapsedTime = new Date().getTime() - startTime;
  const minutes = Math.floor(elapsedTime / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const message = `I knew you could do it! ;P\n\nYour Time: ${minutes}:${padZero(seconds)}\nYour Score: ${score.innerHTML}`;

  alert(message);
}

const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', restartGame);

function restartGame() {
  clearInterval(timerInterval);
  flippedCards = [];
  hiddenCards.forEach(card => {
    card.style.visibility = 'visible';
  });
  hiddenCards = [];
  container.style.pointerEvents = 'all';
  score.innerHTML = '0';
  timer.innerHTML = '0:00';
  suffleImage();
  gameStarted = false;
}

function resetCards() {
  card.forEach(c => {
    c.classList.remove('flip');
    c.parentNode.classList.remove('match');
    c.style.animation = '';
    void c.offsetWidth;
    c.style.animation = `dealAnimation 0.1s ease-in-out forwards`;
  });
}