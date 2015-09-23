describe('ciders', function() {
  it("will print no more cider if ciders equal 0", function() {
    expect(ciders(0)).to.eql("<br> No more bottles of cider on the wall, no more bottles of cider. Go to the store and buy some more, 0 bottles of cider on the wall.");
  });
  it("will print 1 more bottle of cider if ciders equal 1", function() {
    expect(ciders(1)).to.eql("<br>1 more bottle of cider on the wall, 1 more bottle of cider. Take one down and pass it around, 0 bottles of cider on the wall.<br> No more bottles of cider on the wall, no more bottles of cider. Go to the store and buy some more, 1 bottles of cider on the wall.");
  });
  it("will print 2 more bottles of cider if ciders equal 2", function() {
    expect(ciders(2)).to.eql( "<br>2 more bottles of cider on the wall, 2 more bottles of cider. Take one down and pass it around, 1 bottle of cider on the wall.<br>1 more bottle of cider on the wall, 1 more bottle of cider. Take one down and pass it around, 0 bottles of cider on the wall.<br> No more bottles of cider on the wall, no more bottles of cider. Go to the store and buy some more, 2 bottles of cider on the wall.");
  });
  it("will print 3 more bottles of cider if ciders equal 3", function() {
    expect(ciders(3)).to.eql( "<br>3 more bottles of cider on the wall, 3 more bottles of cider. Take one down and pass it around, 2 bottles of cider on the wall.<br>2 more bottles of cider on the wall, 2 more bottles of cider. Take one down and pass it around, 1 bottle of cider on the wall.<br>1 more bottle of cider on the wall, 1 more bottle of cider. Take one down and pass it around, 0 bottles of cider on the wall.<br> No more bottles of cider on the wall, no more bottles of cider. Go to the store and buy some more, 3 bottles of cider on the wall.");
  });
});

