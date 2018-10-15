
describe('Testing the functionality', () => {
  it('should create a simple array', () => {
    let array = new ArrayFilter(5);

    const arr = array.arrFill();

    expect(array.arrFill().length).toBe(5);
  })
})