
describe('Simple Test', () => {
  it('should add two numbers', () => {
    let res = add;
    
    expect(res(3,7)).toBe(10);
  });
});

function add(a, b) {
  return a + b;
}
