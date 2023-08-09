function firstWord(s) {
  s = s.trim(); // Remove leading and trailing spaces
  
  if (s === "" || !s.includes(" ")) {
    return s;
  }
  
  return s.substring(0, s.indexOf(" "));
}

const s = prompt("Enter String:");
alert(firstWord(s));
