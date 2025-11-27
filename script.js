document.getElementById('palindromeButton').onclick = function() {
  const input = document.getElementById('palindromeField').value.trim();
  if (!input) {
    document.getElementById('output').innerText = "Please enter a phrase!";
    return;
  }

  const words = input.split(/\s+/);
  const palindromes = words.filter(word => {
    const cleanWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    return cleanWord && cleanWord === cleanWord.split("").reverse().join("");
  });

  if (palindromes.length === 0) {
    document.getElementById('output').innerText = "No palindromic words found!";
  } else {
    document.getElementById('output').innerText = `Palindromes: ${palindromes.join(", ")}`;
  }
};