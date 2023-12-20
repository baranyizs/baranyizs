function getRandomStrings() {
    const strings = ['Első sztring', 'Második sztring', 'Harmadik sztring', 'Negyedik sztring', 'Ötödik sztring', 'Hatodik sztring', 'Hetedik sztring'];
  
    const resultDiv = document.getElementById('result');
    
    // Véletlenszerűen kiválasztunk három sztringet a listából
    const selectedStrings = [];
    while (selectedStrings.length < 3) {
      const randomIndex = Math.floor(Math.random() * strings.length);
      const randomString = strings[randomIndex];
      if (!selectedStrings.includes(randomString)) {
        selectedStrings.push(randomString);
      }
    }
  
    // Kiírjuk az eredményt a HTML-be
    resultDiv.innerHTML = '';
    selectedStrings.forEach(str => {
      const paragraph = document.createElement('p');
      paragraph.textContent = str;
      resultDiv.appendChild(paragraph);
    });
  }