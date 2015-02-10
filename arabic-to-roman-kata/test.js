QUnit.test('Arabic to Roman tests', function ( assert ) {
  assert.strictEqual( arabicToRoman( 0 ), '' );
  assert.strictEqual( arabicToRoman( 1 ), 'I' );
  assert.strictEqual( arabicToRoman( 2 ), 'II' );
  assert.strictEqual( arabicToRoman( 3 ), 'III' );
  assert.strictEqual( arabicToRoman( 4 ), 'IV' );
  assert.strictEqual( arabicToRoman( 5 ), 'V' );
  assert.strictEqual( arabicToRoman( 6 ), 'VI' );
  assert.strictEqual( arabicToRoman( 7 ), 'VII' );
  assert.strictEqual( arabicToRoman( 8 ), 'VIII' );
  assert.strictEqual( arabicToRoman( 9 ), 'IX' );
  assert.strictEqual( arabicToRoman( 10 ), 'X' );
  assert.strictEqual( arabicToRoman( 11 ), 'XI' );
  assert.strictEqual( arabicToRoman( 14 ), 'XIV' );
  assert.strictEqual( arabicToRoman( 20 ), 'XX' );
  assert.strictEqual( arabicToRoman( 100 ), 'C' );
  assert.strictEqual( arabicToRoman( 1000 ), 'M' );
  assert.strictEqual( arabicToRoman( 1654 ), 'MCCCCCCXXXXXIV' );
});
