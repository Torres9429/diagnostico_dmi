fetch('search.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('search-component').innerHTML = data;
  });
