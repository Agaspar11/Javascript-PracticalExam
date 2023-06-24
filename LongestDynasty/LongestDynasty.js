function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }

  let longestDuration = 0;
  let longestDynasty = "";

  for (const dynasty of dynastyReign) {
    const startYear = convertYear(dynasty.start);
    const endYear = convertYear(dynasty.end);

    if (startYear !== "Invalid" && endYear !== "Invalid") {
      const duration = endYear - startYear + 1;
      if (duration > longestDuration) {
        longestDuration = duration;
        longestDynasty = dynasty.name;
      }
    }
  }

  return longestDynasty;
}

function convertYear(year) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = 0;
  let romanNumeral = year;

  for (const numeral in romanNumerals) {
    while (romanNumeral.indexOf(numeral) === 0) {
      result += romanNumerals[numeral];
      romanNumeral = romanNumeral.replace(numeral, "");
    }
  }

  if (romanNumeral.length !== 0) {
    return "Invalid";
  }

  return result;
}

const dynastyReign = [
  { name: "San Dynasty", start: "MXLI", end: "MM" },
  { name: "Viloria Dynasty", start: "MCCCIIII", end: "MCMXCIX" },
  { name: "Tan Dynasty", start: "MCCCXCVIII", end: "MMM" },
  { name: "Bon Dynasty", start: "MCDXLV", end: "MCMXCIX" },
  { name: "Maiko Dynasty", start: "MDCLXIV", end: "MCMXCIX" },
  { name: "Paul Dynasty", start: "MCMXLIX", end: "MCMXCIX" },
  { name: "Andre Dynasty", start: "MMMXICX", end: "MCMXCIX" },
];

const longestDynastyName = longestDynasty(dynastyReign);
document.addEventListener("DOMContentLoaded", function () {
  const resultElement = document.getElementById("result");
  resultElement.textContent = longestDynastyName;
});