var reverse = function ( n ) {
  var reverseN = +String( Math.abs( n ) )
    .split( '' )
    .reverse()
    .join( '' );
  return reverseN > 0x7FFFFFFF ? 0 : n < 0 ? -1 * reverseN : reverseN;
};