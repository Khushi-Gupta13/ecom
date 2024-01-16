const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
  modal.style.color="red";
});


closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

