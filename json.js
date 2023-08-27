fetch('http://127.0.0.1:5002/students')
  .then(response => response.json())

  .then(data => {
    console.log(data),
    console.log(data[1]),
    console.log(data[1][0]);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
