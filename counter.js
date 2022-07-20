let counter = 0;
      function count() {

        counter ++;
        //gives us the ability to access html elements
        document.querySelector('h1').innerHTML = counter;

        if (counter % 10 === 0) {
          alert(`Count is now ${counter}`);
        }
      }
      document.addEventListener('DOMContentLoaded', function(){
          document.querySelector('button').onclick = count;
        });       

