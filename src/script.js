let phrases = [
 { text: 'Перестань смеяться над зп ТП БПП, начни учить тестировку и через 2 дня ты будешь работать тестировщиком!', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif'  },
   'посмотреть скидки на авиабилеты',
  { text: 'Перестань смеяться над зп ТП БПП, уходи в программирование', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  //'Юрий Дудь',
  { text: 'просто уволься с тп бпп)', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
 // { text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
//{ text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
//{ text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
//{ text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
// text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  
  smoothly(phrase, 'textContent', randomElement.text); 
 // phrase.textContent = randomElement.text;
  //image.src = randomElement.image;
  
  smoothly(image, 'src', randomElement.image);
  
  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

for (let i = 0; i < 4; i++) {
	 smoothly(phrase, 'textContent', phrases[i].text);
		smoothly(image, 'src', phrases[i].image); 	 
}

//phrase.textContent = getRandomElement(phrases);

