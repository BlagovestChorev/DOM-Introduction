function solve() {
  const inputText = document.getElementById("text").value;
  const caseType = document.getElementById("naming-convention").value;

  const resultSpan = document.getElementById("result");

  if (caseType === "Camel Case" || caseType === "Pascal Case") {
      const words = inputText.split(" ");
      const modifiedText = words.map((word, index) =>
          index === 0 && caseType === "Camel Case"
              ? word.toLowerCase()
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join("");

      resultSpan.textContent = modifiedText;
  } else {
      resultSpan.textContent = "Error!";
  }
}