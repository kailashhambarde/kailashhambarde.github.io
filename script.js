window.onload = function() {
    // JavaScript code for visit count and smooth scrolling
    increaseVisitCount();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  };

  function increaseVisitCount() {
    var count = localStorage.getItem('visitCount') || 0;
    count++;
    localStorage.setItem('visitCount', count);
    document.getElementById('visitCount').innerText = 'Page visits since launch: ' + count;
  }


document.querySelector('.burger-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});


  var modal = document.getElementById("constructionModal");
  var span = document.getElementsByClassName("close")[0];

  window.onload = function() {
      modal.style.display = "block";
  }

  span.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
