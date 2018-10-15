describe('', () => {

  beforeAll(() => {
    console.log('beforeALL');
  });
  
  beforeEach(() => {
    console.log('beforeEACH');
  });

  afterAll(() => {
    console.log('afterALL')
  });

  afterEach(() => {
    console.log('AfterEACH')
  });


  it('It 01', () => {
    console.log('IT-01');
  });

  it('It 02', () => {
    console.log('IT-02');
  });

  it('It 03', () => {
    console.log('IT-03');
  });

});