QUnit.test('once call tests', function ( assert ) {
  var callback = sinon.spy(),
    onceCallback = onceCall( callback );

  onceCallback();
  assert.ok( callback.calledOnce );
  onceCallback();
  assert.ok( callback.calledOnce );

  var callback = sinon.stub().returns(5),
    onceCallback = onceCall( callback );
  assert.equal( onceCallback(), 5, 'message' );
  assert.equal( onceCallback(), 5, 'message' );
});

QUnit.test('get todo items', function ( assert ) {
  var xhr = sinon.useFakeXMLHttpRequest(),
    requests = [];
  xhr.onCreate = function ( req ) {
    requests.push( req );
  }
  getTodoItems( 5, sinon.spy() );
  assert.equal( requests.length, 1 );
  assert.equal( requests[0].url, '/todo/5/items' );
  xhr.restore();

  var server = sinon.fakeServer.create(),
  callback = sinon.spy();
  getTodoItems( 5, callback );
  server.requests[0].respond(
    200,
    { "Content-Type": "application/json" },
    JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
  );
  assert.ok( callback.calledOnce );
  assert.deepEqual( callback.firstCall.args[0],
    [{ id: 1, text: "Provide examples", done: true }] );
  server.restore();

});

QUnit.test('delayed callback', function ( assert ) {
  var clock = sinon.useFakeTimers(),
    callback = sinon.spy(),
    delayed = delay( callback, 500 );
  delayed();
  clock.tick(499);
  assert.ok( !callback.called );
  clock.tick(1);
  assert.ok( callback.calledOnce );
});
