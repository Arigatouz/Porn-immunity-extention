replaceWord(document.body);

function replaceWord(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceWord);
  } else if (element.nodeType === Node.TEXT_NODE) {
    if (element.textContent.match(/sex/gi)) {
      document.body.innerHTML = `<h1> NOPE</h1>`
      document.body.className = "rainbow";
   
    }
  }
}
