function arabicToRoman( number ) {
  var numberStr = '',
    arabicRoman = {
      'M': 1000,
      'C': 100,
      'X': 10,
      'IX': 9,
      'V': 5,
      'IV': 4
    };
    for( roman in arabicRoman ) {
      var arabic = arabicRoman[ roman ];
      while( number >= arabic ) {
        number -= arabic;
        numberStr += roman;
      }
    }
    while( number-- ) {
      numberStr += 'I';
    }
    return numberStr;
}
