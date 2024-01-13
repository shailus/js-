const body = document.querySelector('.body');

const button = document.querySelectorAll('.button');

button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e.target.id);
    if(e.target.id==='grey'){
      document.body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='white'){
      document.body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='blue'){
      document.body.style.backgroundColor=e.target.id
    }
    if(e.target.id==='red'){
      document.body.style.backgroundColor=e.target.id
    }
  });
});
