function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function reverseString(string) {
    return string.split('').reverse().join('');
  }


   const  calculator = {
     add(num1, num2) {
      return num1 + num2;
    },
    subtract(num1, num2) {
      return num1 - num2;
    },
    multiply(num1, num2) {
      return num1 * num2;
    },
    divide(num1, num2) {
      return num1 / num2;
    },
  };

  function caesarCipher (value, key) {
    return value.split("").map((letter) => String.fromCharCode(letter.charCodeAt(0) + key)).join("");
  }
  
  function analyzeArray(array) {
    if (array.length === 0) {
        return null;
    }

    array.sort((a, b) => {
        return a - b;
     });

     const sum = array.reduce((x, y) => {
     return x + y;
     });

    return {
        average: sum / array.length,
        min: array[0],
        max: array[array.length - 1],
        length: array.length
    };
}

  module.exports={capitalize,reverseString,calculator,caesarCipher,analyzeArray};

 