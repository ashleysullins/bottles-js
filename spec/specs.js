describe('countDown', function() {
  it("will take a number and count until it reaches 1", function() {
    expect(countDown(5)).to.eql([5, 4, 3, 2, 1]);
  });
});
