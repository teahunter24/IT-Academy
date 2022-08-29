var select = document.querySelector('select');
var language = document.querySelector('p');

select.addEventListener('change', showCurrentLanguage);

function showCurrentLanguage () {
    var choice = select.value;

    if (choice === 'english') {
        language.textContent = 'английский';
      } else if (choice === 'ukraine') {
        language.textContent = 'украинский';
      } else if (choice === 'russian') {
        language.textContent = 'русский';
      } else {
        language.textContent = 'английский';
      }
    
      console.log('Выбранный язык - ' + language.textContent);
}
