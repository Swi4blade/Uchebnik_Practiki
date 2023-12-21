//Выполнил Жогин Дмитрий 3ИСИП-821

//Учебник практики
//Задание 4
// //№1
// const gameBoard = document.getElementById('game');
// const cells = [];
// const computerPicks = [];
// let timeLeft = 60; 

// const timerDisplay = document.createElement('div');
// timerDisplay.textContent =  timeLeft;
// document.body.insertBefore(timerDisplay, gameBoard);

// for (let i = 0; i < 10; i++) {
//     const row = gameBoard.insertRow();
//     cells[i] = [];
//     for (let j = 0; j < 10; j++) {
//       const cell = row.insertCell();
//       cell.addEventListener('click', () => checkCell(i, j));
//       cells[i][j] = cell;
//     }
// }
  
//   for (let i = 0; i < 10; i++) {
//     const randomRow = Math.floor(Math.random() * 10);
//     const randomCol = Math.floor(Math.random() * 10);
//     computerPicks.push({row: randomRow, col: randomCol});
// }
// function checkCell(row, col) {
//   const clickedCell = cells[row][col];

//   for (let i = 0; i < computerPicks.length; i++) {
//     if (computerPicks[i].row === row && computerPicks[i].col === col) {
//       clickedCell.classList.add('clicked');
//       clickedCell.classList.add('true');
//       computerPicks.splice(i, 1);
//       if (computerPicks.length === 0) {
//         alert('Вы выиграли! Вы угадали все ячейки!');
//       }
//       return;
//     }
//   }
 
//   clickedCell.classList.add('clicked');
// }

// function updateTimer() {
//     timeLeft--;
//     timerDisplay.textContent =  timeLeft;
//     if (timeLeft === 0) {
//       alert('Вы не уложились во время!');
      
//       for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//           cells[i][j].removeEventListener('click', () => checkCell(i, j));
//         }
//       }
//     } else {
//       setTimeout(updateTimer, 1000); 
//     }
// }
// updateTimer();


//Задание 5
// //№1-№2
// let input = document.querySelector('input');
// let keyboard = document.querySelector('#keyboard');
// let capslock = document.querySelector('#keyboard .capslock');

// let buttons = document.querySelectorAll('#keyboard .button');

// for (let button of buttons)  {
//     button.addEventListener('click', function() {
//         input.value += button.textContent;
//     });
// }

// let isLower = true;
// capslock.addEventListener('click', function() {
//     for (let button of buttons) {
//         if (isLower) {
//             button.textContent = button.textContent.toUpperCase();
//         } else {
//             button.textContent = button.textContent.toLowerCase();
//         }
//     }

//     isLower = !isLower;
// });


//Задание 6
// //№1-№4
// let currentMonthDifference = 0;
// let calendarList;
// let calendar = document.querySelector('#n6')

// function generateLinearCalendar() {
//     let currentDate = new Date();
//     currentDate.setMonth(currentDate.getMonth() + currentMonthDifference);
//     let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
//     let currentMonth = months[currentDate.getMonth()];
//     let currentYear = currentDate.getFullYear();
//     let currentDay = currentDate.getDate();
//     let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

//     document.querySelector('#calendar-text').textContent = `${currentMonth} ${currentYear}`;
//     if (calendarList) {
//         calendar.removeChild(calendarList);
//     }
//     calendarList = document.createElement('ul');
//     for (let day = 1; day <= daysInMonth; day++) {
//         let listItem = document.createElement('li');
//         listItem.textContent = day;
//         listItem.classList.toggle('current-day', day === currentDay);

//         calendarList.appendChild(listItem);
//     }
//     calendar.appendChild(calendarList);
// }

// function changeMonth(difference) {
//     currentMonthDifference += difference;
//     generateLinearCalendar();
// }

// generateLinearCalendar();


//Задание 7
// //№1-№2
// let tagDescriptions = {
//     'a': 'Тег <a> предназначен для создания ссылок.',
//     'p': 'Тег <p> представляет собой абзац текста.',
//     'h1': 'Тег <h1>; задаёт наибольший заголовок первого уровня.',
//     'div': 'Тег <div>; является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', 
//     'html': 'Тег <html> указывает программе просмотра страниц, что это HTML документ.',
//     'head': 'Тег <head> определяет место, где помещается различная информация не отображаемая в теле документа. Здесь располагается тег названия документа и теги для поисковых машин.',
//     'body': 'Тег <body> определяет видимую часть документа.'
//   };

//   let  tagInput = document.getElementById('tagInput');
//   let  outputElement = document.getElementById('tagDescription');
//   tagInput.addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         let  tagName = tagInput.value.toLowerCase();
//         let  description = tagDescriptions[tagName];
//       if (description) {
//         outputElement.textContent = description;
//       } else {
//         outputElement.textContent = 'Описание для данного тега не найдено.';
//       }
//     }
//   });


//Задание 8
// //№1-№2
// let events = [
//     { date: '2000-01-01', name: 'Начало нового тысячелетия', description: '1 января 2000 года отмечено начало нового тысячелетия.' },
//     { date: '2001-09-11', name: 'Теракты 11 сентября', description: '11 сентября 2001 года произошли теракты в США.' },
//     { date: '2002-01-01', name: 'Введение евро', description: '1 января 2002 года в 12 странах Европы введена единая валюта — евро.' },
//     { date: '2003-03-20', name: 'Вторжение в Ирак', description: '20 марта 2003 года коалиция под руководством США начала военную операцию против Ирака.' },
//   ];
//   let input = document.getElementById('input');
//   let table = document.getElementById('table');
//   input.addEventListener('keyup', function (event) {
//     if (event.key === 'Enter') {
//         let year = parseInt(input.value);
//         let filteredEvents = events.filter(event => event.date.startsWith(year));
//       renderTable(filteredEvents);
//     }
//   });
//   function renderTable(events) {
   
//     table.innerHTML = '';
   
//     let headerRow = document.createElement('tr');
//     headerRow.innerHTML = '<th>Дата</th><th>Название</th><th>Описание</th>';
//     table.appendChild(headerRow);
    
//     events.forEach(event => {
//         let row = document.createElement('tr');
//       row.innerHTML = `<td>${event.date}</td><td>${event.name}</td><td>${event.description}</td>`;
//       table.appendChild(row);
//     });
//   }


//Задание 9
// //№1-№3
// function getHoroscope() {
//     const birthdate = document.getElementById('birthdate').value;
//     const selectedDay = document.querySelector('input[name="day"]:checked').value;
  
//     let horoscopeText = '';
   
//     const horoscopes = [
//       'Сегодня будет удачный день для новых начинаний.',
//       'Ваша энергия сегодня будет на высоте, не упустите возможность сделать что-то важное.',
//       'Будьте осторожны с финансами сегодня, возможны непредвиденные расходы.'
//     ];
//     horoscopeText = horoscopes[Math.floor(Math.random() * horoscopes.length)];
  
//     const horoscopeDisplay = document.getElementById('horoscope');
//     horoscopeDisplay.textContent = horoscopeText;
//   }


//Задание 10
// //№1-№3
// let predictions = [{text: 'Все плохое будет обходить вас стороной!', type: 'good'}, {text: 'Результат Ваших действий может оказаться неожиданным.', type: 'bad'}, {text: 'Вы сегодня везунчик! Воспользуйся этим!', type: 'good'}, {text: 'Будьте осторожны во всех начинаниях.', type: 'bad'}];

// let timerInterval;

// function startTimer() {
// 	let timer = document.querySelector('#timer');
// 	let startButton = document.querySelector('#start');
// 	let stopButton = document.querySelector('#stop');
// 	startButton.classList.remove('active');
// 	stopButton.classList.add('active');
// 	timerInterval = setInterval(function () {
// 		timer.textContent = getRandomNumber(1, 10);
// 	}, 100);
// }

// function stopTimer() {
// 	clearInterval(timerInterval);
// 	let timer = document.querySelector('#timer');
// 	let stopButton = document.querySelector('#stop');
// 	let textDiv = document.querySelector('#text');
// 	stopButton.classList.remove('active');
// 	let predictionNumber = parseInt(timer.textContent);
// 	let prediction = predictions[predictionNumber % predictions.length];
// 	textDiv.textContent = prediction.text;

// 	if (prediction.type === 'good') {
// 		textDiv.classList.add('good-prediction');
// 	} 
	
// 	else {
// 		textDiv.classList.add('bad-prediction');
// 	}
// }

// function getRandomNumber(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }


//Задание 15-17
// let field = document.querySelector('#field');
// let message = document.querySelector('#message');
// let cities = [];
// let currentPlayer = 1; 
// let allCities = ["Москва", "Санкт-Петербург", "Казань", "Челябинск", "Нижний Новгород", "Новосибирск", "Екатеринбург", "Ростов-на-Дону", "Самара", "Омск", "Анапа", "Астрахань"];

// field.addEventListener('keydown', handleKeyDown);

// function handleKeyDown(event) {
// 	if (event.key === "Enter") {
//     	event.preventDefault();
//     	let cityName = field.value.trim();
//     	if (isValidCity(cityName)) {
//     		if (isValidMove(cityName)) {
//     			cities.push(cityName);
//     			displayMessage(`Игрок ${currentPlayer}: "${cityName}" добавлен. Следующий ход.`);
//     			field.value = "";
//     			currentPlayer = (currentPlayer % 3) + 1;
//     			makeMove();
//     		} 
// 			else {
//     			displayMessage("Ход неверный. Ваш город должен начинаться с последней буквы предыдущего.");
//     		}
//     	} 
// 		else {
//     		displayMessage("Город должен начинаться с буквы.");
//     	}
// 	}
// }

// function isValidCity(city) {
// 	return city.length > 0 && isNaN(city[0]);
// }

// function isValidMove(city) {
// 	if (cities.length === 0) {		
// 		return true; 
// 	}
// 	let lastCity = cities[cities.length - 1];
// 	let lastLetter = lastCity.slice(-1).toUpperCase();
// 	if (lastCity.endsWith("ь")) {
//   		lastLetter = lastCity[lastCity.length - 2].toUpperCase();
//   	}
// 	return city.toUpperCase().startsWith(lastLetter);
// }

// function makeMove() {
// 	switch (currentPlayer) {
//     	case 1:
//       	break;
//     	case 2:
//     	break;
// 		case 3:
//       	makeRobotMove();
//       	break;
// 	}
// }

// function makeRobotMove() {
// 	let lastCity = cities[cities.length - 1];
// 	let lastLetter = lastCity.slice(-1).toUpperCase();

// 	if (lastCity.endsWith("ь")) {
// 		lastLetter = lastCity[lastCity.length - 2].toUpperCase();
// 	}

// 	let availableCities = allCities.filter(city => !cities.includes(city) && city.toUpperCase().startsWith(lastLetter));

// 	if (availableCities.length > 0) {
// 		let robotCity = availableCities[Math.floor(Math.random() * availableCities.length)];
// 		cities.push(robotCity);
// 		displayMessage(`Робот: "${robotCity}". Следующий ход.`);
// 		currentPlayer = 1; 
// 	}
//   	else {
//   		displayMessage("Вы выиграли! Робот не смог найти подходящий город.");
//   	}
// }

// function displayMessage(text) {
// 	message.textContent = text;
// }


//Задание 18-23
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');

// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
		
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
			
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
			
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value;
// 				}
// 			});
// 		});

// 		li.appendChild(task);
		
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
		
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);

// 		list.appendChild(li);

// 		this.value = '';
// 	}
// });


//Задание 24-29
// let name = document.querySelector('#name');
// let price = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add = document.querySelector('#add');
// let table = document.querySelector('#table');
// let total = document.querySelector('#total');

// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//     tr.appendChild(td);
//     return td;
// }

// function allowEdit(td) {
//     td.addEventListener('dblclick', function () {
//     	let text = td.textContent;
//     	td.textContent = '';

//     	let input = document.createElement('input');
//     	input.value = text;
//     	input.focus();
//     	td.appendChild(input);

//     	input.addEventListener('keydown', function (event) {
//     		if (event.key === 'Enter') {
//         		td.textContent = this.value;
//           	if (td.classList.contains('price') || td.classList.contains('amount')) {
//             	let priceCell = td.parentElement.querySelector('.price');
//             	let amountCell = td.parentElement.querySelector('.amount');
//             	let costCell = td.parentElement.querySelector('.cost');
//             	let price = parseFloat(priceCell.textContent);
//             	let amount = parseFloat(amountCell.textContent);
//             	costCell.textContent = (price * amount).toFixed(2);
//           	}
//           		recountTotal(); 
// 			}
// 		});
// 	});
// }

// function recountTotal() {
//   let costs = table.querySelectorAll('.cost');
//   let sum = 0;

// 	costs.forEach(function (costCell) {
// 		sum += parseFloat(costCell.textContent);
// 	});

//   total.textContent = sum.toFixed(2);
// }

// function removeTask(row) {
//   if (confirm('Вы уверены, что хотите удалить эту покупку?')) {
//     row.remove();
//     recountTotal();
//   }
// }

// add.addEventListener('click', function () {
// 	let tr = document.createElement('tr');

// 	let nameCell = createCell(tr, name.value, 'name');
// 	let priceCell = createCell(tr, price.value, 'price');
// 	let amountCell = createCell(tr, amount.value, 'amount');
// 	let costCell = createCell(tr, (price.value * amount.value).toFixed(2), 'cost');
// 	let removeCell = createCell(tr, 'удалить', 'remove');

//   allowEdit(nameCell);
// 	allowEdit(priceCell);
// 	allowEdit(amountCell);
// 	removeCell.addEventListener('click', function () {
// 	  removeTask(tr);
// 	});

// 	table.appendChild(tr);
// 	recountTotal(); 
// });


//Задание 30-36
// let testContainer = document.querySelector('#test');
// let checkButton = document.querySelector('#button');

// let questions = [
//   {
//     text: 'вопрос 1?',
//     right: 0,
//     variants: ['вариант 1', 'вариант 2', 'вариант 3'],
//   },
//   {
//     text: 'вопрос 2?',
//     right: 1,
//     variants: ['вариант 1', 'вариант 2', 'вариант 3'],
//   },
//   {
//     text: 'вопрос 3?',
//     right: 2,
//     variants: ['вариант 1', 'вариант 2', 'вариант 3'],
//   },
// ];

// questions.forEach((question, index) => {
// 	let questionDiv = document.createElement('div');
// 	questionDiv.innerHTML = `<p>${question.text}</p>`;
// 	question.variants.forEach((variant, id) => {
//     	let label = document.createElement('label');
//     	label.innerHTML = `
//       	<input type="radio" name="${index}" data-id="${id}">
//       	${variant}
//     	`;
//     	questionDiv.appendChild(label);
//   	});
//   	testContainer.appendChild(questionDiv);
// });

// checkButton.addEventListener('click', checkAnswers);

// function checkAnswers() {
// 	questions.forEach((question, index) => {
//     	let questionDiv = testContainer.children[index];
//     	let radioButtons = questionDiv.querySelectorAll('input[type="radio"]');
//     	let userAnswer = Array.from(radioButtons).find((radio) => radio.checked);
//     		if (userAnswer) {
//       		if (parseInt(userAnswer.getAttribute('data-id')) === question.right) {
//       		  userAnswer.parentElement.classList.add('right');
//       		  userAnswer.parentElement.classList.remove('wrong');
//       		} else {
//       		  userAnswer.parentElement.classList.add('wrong');
//       		  userAnswer.parentElement.classList.remove('right');
//       		}
//     	}
// 	});
// }


//Задание 41-46
// let cells = document.querySelectorAll('#field td');
// start(cells);

// function start(cells) {
// 	let i = 0;

// 	for (let cell of cells) {
//     	cell.addEventListener('click', function step() {
//       		this.textContent = ['X', 'O'][i % 2];
//       		this.removeEventListener('click', step);

//       		if (isVictory(cells)) {
//       			alert(this.textContent + ' победил!');
//       		} else if (i == 8) {
//       			alert('Ничья');
//       		}
//       		i++;
// 		});
// 	}
// }

// function isVictory(cells) {
// let combs = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// for (let comb of combs) {
//     if (
//     	cells[comb[0]].textContent == cells[comb[1]].textContent &&
//     	cells[comb[1]].textContent == cells[comb[2]].textContent &&
//     	cells[comb[0]].textContent != ''
//     ) {
//     	return true;
//     }
// }
// 	return false;
// }


//Задание 47-51
// let rows = 3;
// let cols = 3;
// let colors = ['red', 'green', 'blue'];
// let victory = false;
// let moveCount = 0;
// let gameField = document.querySelector('#field');
// let movesElement = document.querySelector('#moves');

// function getNextItem(array, currentItem) {
// 	let currentIndex = array.indexOf(currentItem);
// 	let nextIndex = (currentIndex + 1) % array.length;
// 	return array[nextIndex];
// }

// function changeColor(cell) {
//   	if (victory) {
//   	  return;
//   	}

// 	let currentColor = getCellColor(cell);
// 	let nextColor = getNextItem(colors, currentColor);
// 	cell.classList.remove(...colors);
// 	cell.classList.add(nextColor);
// 	checkWin();
// 	moveCount++;
// 	movesElement.textContent = `Ходов: ${moveCount}`;
// }

// function checkWin() {
// 	let allCells = document.querySelectorAll('#field td');
// 	let firstCellColor = getCellColor(allCells[0]);
// 	let isWin = Array.from(allCells).every(cell => getCellColor(cell) === firstCellColor);

//   	if (isWin) {
//   		victory = true;
//   		alert(`Победа! Вы выиграли за ${moveCount} ходов!`);
//   	}
// }

// function getCellColor(cell) {
// 	 return Array.from(cell.classList).find(className => colors.includes(className)) || '';
// }

// for (let i = 0; i < rows; i++) {
// 	let row = gameField.insertRow(i);
// 	for (let j = 0; j < cols; j++) {
// 		let cell = row.insertCell(j);
// 		let randomColor = getRandomItem(colors);
// 		cell.classList.add(randomColor);
// 		cell.addEventListener('click', () => changeColor(cell));
// 	}
// }

// function getRandomItem(array) {
// 	return array[Math.floor(Math.random() * array.length)];
// }


//Задание 52-62
let calendar = document.querySelector('#calendar');
let body = calendar.querySelector('.body');
let prev = calendar.querySelector('.prev');
let next = calendar.querySelector('.next');

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

draw(body, year, month);
updateInfo();

next.addEventListener('click', function (event) {
	event.preventDefault();
	year = getNextYear(year, month);
	month = getNextMonth(month);
	draw(body, year, month);
	updateInfo();
});

prev.addEventListener('click', function (event) {
	event.preventDefault();
	year = getPrevYear(year, month);
	month = getPrevMonth(month);
	draw(body, year, month);
	updateInfo();
});

function draw(body, year, month) {
	let arr = range(getLastDay(year, month));

	let firstWeekDay = getFirstWeekDay(year, month);
	let lastWeekDay = getLastWeekDay(year, month);

	let nums = chunk(normalize(arr, firstWeekDay, 6 - lastWeekDay), 7);
	createTable(body, nums);
}

function createTable(parent, arr) {
	parent.textContent = '';
	let cells = [];

	for (let sub of arr) {
		let tr = document.createElement('tr');

		for (let num of sub) {
			let td = document.createElement('td');
			td.textContent = num;
			tr.appendChild(td);

			cells.push(td);
		}

		parent.appendChild(tr);
	}

	return cells;
}

function normalize(arr, left, right) {
	for (let i = 0; i < left; i++) {
		arr.unshift('');
	}
	for (var i = 0; i < right; i++) {
		arr.push('');
	}

	return arr;
}

function getFirstWeekDay(year, month) {
	let date = new Date(year, month, 1);
	let num = date.getDay();

	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastWeekDay(year, month) {
	let date = new Date(year, month + 1, 0);
	let num = date.getDay();

	if (num == 0) {
		return 6;
	} else {
		return num - 1;
	}
}

function getLastDay(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}

function range(count) {
	let arr = [];

	for (let i = 1; i <= count; i++) {
		arr.push(i);
	}

	return arr;
}

function chunk(arr, n) {
	let result = [];
	let count = Math.ceil(arr.length / n);

	for (let i = 0; i < count; i++) {
		let elems = arr.splice(0, n);
		result.push(elems);
	}

	return result;
}

function getNextYear(year, month) {
	return month === 11 ? year + 1 : year;
}

function getNextMonth(month) {
	return month === 11 ? 0 : month + 1;
}

function getPrevYear(year, month) {
	return month === 0 ? year - 1 : year;
}

function getPrevMonth(month) {
	return month === 0 ? 11 : month - 1;
}

function updateInfo() {
	let monthNames = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
	let infoElement = document.querySelector('.info');
	infoElement.textContent = `${monthNames[month]} ${year}`;
}