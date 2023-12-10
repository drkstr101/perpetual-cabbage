import model from './content-model';

describe('contentModel', () => {
  it('should work', () => {
    expect(model.Article).toHaveProperty('name', 'Article');
    expect(model.Article).toHaveProperty('type', 'page');
  });
});
