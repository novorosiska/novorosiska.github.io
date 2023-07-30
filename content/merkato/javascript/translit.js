// Generated by CoffeeScript 2.5.1
(function() {
  // DOM Objects
  var Cyrillic, Esperanto, Georgian, convertText, fromCyrillicToEsperanto, fromEsperantoToCyrillic, fromEsperantoToGeorgian, fromEsperantoToXSystem, fromGeorgianToEsperanto, fromXSystemToEsperanto, listen, resultOption, resultText, sourceOption, sourceText;

  sourceText = document.getElementById('source');

  resultText = document.getElementById('result');

  sourceOption = document.getElementById('source-option');

  resultOption = document.getElementById('result-option');

  // Object containing esperanto alphabet
  Esperanto = {
    alphabet: {
      upperCase: ['A', 'B', 'C', 'Č', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'Ž', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'Š', 'T', 'U', 'V', 'Z'],
      lowerCase: ['a', 'b', 'c', 'č', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'ž', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 'š', 't', 'u', 'v', 'z']
    }
  };

  // Object containing cyrillic alphabet
  Cyrillic = {
    alphabet: {
      upperCase: ['А', 'Б', 'Ц', 'Ч', 'Д', 'Е', 'Ф', 'Г', 'Х', 'И', 'Й', 'Ж', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Ш', 'Т', 'У', 'В', 'З'],
      lowerCase: ['а', 'б', 'ц', 'ч', 'д', 'е', 'ф', 'г', 'х', 'и', 'й', 'ж', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'ш', 'т', 'у', 'в', 'з']
    }
  };

  // Object containing georgian alphabet
  Georgian = {
    alphabet: ['ⰰ', 'ⰱ', 'ⱌ', 'ⱍ', 'ⰴ', 'ⰵ', 'ⱇ', 'ⰳ', 'ⱈ', 'ⰻ', 'ⰹ', 'ⰶ', 'ⰽ', 'ⰾ', 'ⰿ', 'ⱀ', 'ⱁ', 'ⱂ', 'ⱃ', 'ⱄ', 'ⱎ', 'ⱅ', 'ⱆ', 'ⰲ', 'ⰸ']
  };

  // Function to convert from esperanto alphabet to cyrillic alphabet
  fromEsperantoToCyrillic = function(esperantoText) {
    var char, converted, i, indexLower, indexUpper, len, splittedText;
    splittedText = esperantoText.split('');
    converted = '';
    for (i = 0, len = splittedText.length; i < len; i++) {
      char = splittedText[i];
      indexLower = Esperanto.alphabet.lowerCase.indexOf(char);
      indexUpper = Esperanto.alphabet.upperCase.indexOf(char);
      if (indexLower > -1) {
        converted += Cyrillic.alphabet.lowerCase[indexLower];
      } else if (indexUpper > -1) {
        converted += Cyrillic.alphabet.upperCase[indexUpper];
      } else {
        converted += char;
      }
    }
    return converted;
  };

  // Function to convert from cyrillic alphabet to esperanto alphabet
  fromCyrillicToEsperanto = function(cyrillicText) {
    var char, converted, i, indexLower, indexUpper, len, splittedText;
    splittedText = cyrillicText.split('');
    converted = '';
    for (i = 0, len = splittedText.length; i < len; i++) {
      char = splittedText[i];
      indexLower = Cyrillic.alphabet.lowerCase.indexOf(char);
      indexUpper = Cyrillic.alphabet.upperCase.indexOf(char);
      if (indexLower > -1) {
        converted += Esperanto.alphabet.lowerCase[indexLower];
      } else if (indexUpper > -1) {
        converted += Esperanto.alphabet.upperCase[indexUpper];
      } else {
        converted += char;
      }
    }
    return converted;
  };

  // Function to convert from esperanto alphabet to georgian alphabet
  fromEsperantoToGeorgian = function(esperantoText) {
    var char, converted, i, indexLower, indexUpper, len, splittedText;
    splittedText = esperantoText.split('');
    converted = '';
    for (i = 0, len = splittedText.length; i < len; i++) {
      char = splittedText[i];
      indexLower = Esperanto.alphabet.lowerCase.indexOf(char);
      indexUpper = Esperanto.alphabet.upperCase.indexOf(char);
      if (indexLower > -1) {
        converted += Georgian.alphabet[indexLower];
      } else if (indexUpper > -1) {
        converted += Georgian.alphabet[indexUpper];
      } else {
        converted += char;
      }
    }
    return converted;
  };

  // Function to convert from georgian alphabet to esperanto alphabet
  fromGeorgianToEsperanto = function(georgianText) {
    var char, converted, i, indexLower, len, splittedText;
    splittedText = georgianText.split('');
    converted = '';
    for (i = 0, len = splittedText.length; i < len; i++) {
      char = splittedText[i];
      indexLower = Georgian.alphabet.indexOf(char);
      if (indexLower > -1) {
        converted += Esperanto.alphabet.lowerCase[indexLower];
      } else {
        converted += char;
      }
    }
    return converted;
  };

  // Function to convert from X system to esperanto alphabet
  fromXSystemToEsperanto = function(xSystemText) {
    var converted;
    // Replace lower cases
    converted = xSystemText.replaceAll('q', 'č');
    converted = converted.replaceAll('x', 'ž');
    converted = converted.replaceAll('w', 'š');
    //Replace upper cases
    converted = converted.replaceAll('Q', 'Č');
    converted = converted.replaceAll('X', 'Ž');
    return converted = converted.replaceAll('W', 'Š');
  };

  // Function to convert from esperanto alphabet to X system alphabet
  fromEsperantoToXSystem = function(xSystemText) {
    var converted;
    // Replace lower cases
    converted = xSystemText.replaceAll('č', 'q');
    converted = converted.replaceAll('ž', 'x');
    converted = converted.replaceAll('š', 'w');
    //Replace upper cases
    converted = converted.replaceAll('Č', 'Q');
    converted = converted.replaceAll('Ž', 'X');
    return converted = converted.replaceAll('Š', 'W');
  };

  // Function to deside which convertion will be performed
  convertText = function(source, target, toBeConverted) {
    if (source === 'Esperanto' && target === 'Cyrillic') {
      return fromEsperantoToCyrillic(toBeConverted);
    } else if (source === 'Esperanto' && target === 'Georgian') {
      return fromEsperantoToGeorgian(toBeConverted);
    } else if (source === 'Esperanto' && target === 'X') {
      return fromEsperantoToXSystem(toBeConverted);
    } else if (source === 'Cyrillic' && target === 'Esperanto') {
      return fromCyrillicToEsperanto(toBeConverted);
    } else if (source === 'Cyrillic' && target === 'Georgian') {
      return fromEsperantoToGeorgian(fromCyrillicToEsperanto(toBeConverted));
    } else if (source === 'Cyrillic' && target === 'X') {
      return fromEsperantoToXSystem(fromCyrillicToEsperanto(toBeConverted));
    } else if (source === 'Georgian' && target === 'Georgian') {
      return fromGeorgianToEsperanto(toBeConverted);
    } else if (source === 'Georgian' && target === 'Cyrillic') {
      return fromEsperantoToCyrillic(fromGeorgianToEsperanto(toBeConverted));
    } else if (source === 'Georgian' && target === 'X') {
      return fromEsperantoToXSystem(fromGeorgianToEsperanto(toBeConverted));
    } else if (source === 'X' && target === 'Esperanto') {
      return fromXSystemToEsperanto(toBeConverted);
    } else if (source === 'X' && target === 'Georgian') {
      return fromEsperantoToGeorgian(fromXSystemToEsperanto(toBeConverted));
    } else if (source === 'X' && target === 'Cyrillic') {
      return fromEsperantoToCyrillic(fromXSystemToEsperanto(toBeConverted));
    } else {
      return sourceText.value;
    }
  };

  // Function that will pass as argument to the listeners
  listen = function() {
    if (sourceText.value === '') {
      return resultText.value = 'Jot something down';
    } else {
      return resultText.value = convertText(sourceOption.value, resultOption.value, sourceText.value);
    }
  };

  sourceText.addEventListener('keyup', listen);

  sourceOption.addEventListener('change', listen);

  resultOption.addEventListener('change', listen);

}).call(this);