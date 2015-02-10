function onceCall( callback ) {
  var called = false,
  returnedValue;
  return function () {
    if( !called ) {
      called = true;
      returnedValue = callback();
      return returnedValue;
    } else {
      return returnedValue;
    }
  }
}

function getTodoItems( listId, callback ) {
  $.ajax({
    url: '/todo/' + listId + '/items',
    success: function ( data ) {
      callback( data );
    }
  });
}

function delay( callback, delay ) {
  return function () {
    setTimeout( callback, delay );
  }
}
