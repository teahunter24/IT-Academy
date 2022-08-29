console.log('Hello JS');

// Burger - menu
function toggleBurger() {
    console.log('toggleBurger');
    // document.querySelector('.nav');
    var navigation = document.getElementById('navigation');
    console.log('navigation', navigation);

    if ( navigation.style.display == 'none') {
        navigation.style.display = 'block';
        console.log('block');
    } else {
        navigation.style.display = 'none';
        console.log('none');
    }
}

// function toggleBurger() {
//     // document.querySelector('.nav');
//     var navigation = document.getElementById('navigation');
  
//     if (navigation.style.display == false || navigation.style.display == 'none') {
//       navigation.style.display = 'block';
//     } else {
//       navigation.style.display = 'none';
//     }
//   }