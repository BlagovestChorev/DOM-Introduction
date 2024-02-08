function solve() {
  const inputText = document.getElementById('input').value;
  const sentences = inputText.split('.').filter(sentence => sentence.trim().length > 0);
  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.innerHTML = '';

  let formattedText = '';

  for (let i = 0; i < sentences.length; i += 3) {
      const paragraphSentences = sentences.slice(i, i + 3).join('. ');
      formattedText += `<p>${paragraphSentences}</p>`;
  }

  if (formattedText.trim() !== '<p></p>') {
      outputDiv.innerHTML = formattedText;
  } else {
      outputDiv.innerHTML = '<p>No matches found.</p>';
  }
}