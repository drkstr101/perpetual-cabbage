import model, { ModelName } from './model';

describe('model', () => {
  const fixtures = ['Button', 'Config', 'Hero', 'MetaTag', 'Page', 'Stats'] as ModelName[];
  it.each(fixtures)('provides a %s model', (name) => {
    expect(model[name]).toBeInstanceOf(Object);
    expect(model[name].name).toEqual(name);
  });
});
