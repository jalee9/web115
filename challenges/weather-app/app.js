// weatherQuizApp.js

class WeatherQuiz {
  constructor(questionText, answerChoices, correctAnswer) {
      this.questionText = questionText;
      this.answerChoices = answerChoices;
      this.correctAnswer = correctAnswer;
  }

  checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
  }
}

const API_KEY = '84276237b335b36a016a8d7d540eb3ad'; // Replace with your OpenWeatherMap API key
const searchForm = document.getElementById('search-form');
const quizContainer = document.getElementById('quiz-container');
const quizForm = document.getElementById('quiz-form');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  const searchValue = event.target.search.value;
  fetchWeatherData(searchValue);
}

// weatherQuizApp.js

async function fetchLatLng(query) {
    try {
        const geocodingResponse = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}`);
        const geocodingData = await geocodingResponse.json();
        if (geocodingData.length > 0) {
            return { lat: geocodingData[0].lat, lon: geocodingData[0].lon };
        } else {
            throw new Error('Location not found.');
        }
    } catch (error) {
        console.error('Error fetching latitude and longitude:', error);
        alert('Error: Unable to fetch latitude and longitude for the specified location.');
        return null;
    }
  }

async function fetchWeatherData(query) {
  const latLng = await fetchLatLng(query);
  if (latLng) {
      try {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`);
          const data = await response.json();
          if (data.cod === 200) {
              // Display weather data
              const weatherInfo = `
                  <p>City: ${data.name}</p>
                  <p>Temperature: ${data.main.temp}°C</p>
                  <p>Humidity: ${data.main.humidity}%</p>
                  <p>Wind Speed: ${data.wind.speed} m/s</p>
              `;
              document.getElementById('weather-data').innerHTML = weatherInfo;

              // Generate quiz
              console.log('Weather data:', data); // Debug log
              generateQuiz(data);
          } else {
              alert('Error: Unable to fetch weather data for the specified location.');
          }
      } catch (error) {
          console.error('Error fetching weather data:', error); // Debug log
          alert('Error: Unable to fetch weather data. Please check your internet connection and try again.');
      }
  }
}



function generateQuiz(weatherData) {
  // Generate quiz questions based on weather data
  // You can customize the questions and answers based on your preferences
  const questions = [
      new WeatherQuiz(
          'What is the current temperature in degrees Celsius?',
          [
              weatherData.main.temp + 2,
              weatherData.main.temp - 2,
              weatherData.main.temp,
              weatherData.main.temp + 5
          ],
          weatherData.main.temp
      ),
      new WeatherQuiz(
          'What is the current humidity in percentage?',
          [
              weatherData.main.humidity + 5,
              weatherData.main.humidity - 5,
              weatherData.main.humidity,
              weatherData.main.humidity + 10
          ],
          weatherData.main.humidity
      ),
      new WeatherQuiz(
          'What is the current wind speed in meters per second?',
          [
              weatherData.wind.speed + 1,
              weatherData.wind.speed - 1,
              weatherData.wind.speed,
              weatherData.wind.speed + 2
          ],
          weatherData.wind.speed
      )
  ];


}


  // Display the quiz
  quizContainer.style.display = 'block';
  quizForm.innerHTML = '';
  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `
        <p>${index + 1}. ${question.questionText}</p>
        ${question.answerChoices.map((choice, i) => `
            <label>
                <input type="radio" name="question-${index}" value="${choice}" required>
                ${choice}
            </label>
        `).join('')}
    `;
    quizForm.appendChild(questionElement);
});



  quizForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    const userAnswers = new FormData(event.target);

    questions.forEach((question, index) => {
        const userAnswer = parseFloat(userAnswers.get(`question-${index}`));
        if (question.checkAnswer(userAnswer)) {
            score++;
        }
    });

    // Display the user's score
    scoreContainer.style.display = 'block';
    scoreElement.textContent = `${score} / ${questions.length}`;

    // Store the user's last search query and score in local storage
    localStorage.setItem('lastSearch', query);
    localStorage.setItem('lastScore', `${score} / ${questions.length}`);
});

// Display the user's last score if available
const lastSearch = localStorage.getItem('lastSearch');
const lastScore = localStorage.getItem('lastScore');
if (lastSearch && lastScore) {
    alert(`Last searched location: ${lastSearch}\nLast score: ${lastScore}`);
}

