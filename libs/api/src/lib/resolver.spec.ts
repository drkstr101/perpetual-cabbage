import { resolveContentModel } from './resolver';

const importStackbitConfig = async () =>
  await import(`../../__test__/fixtures/stackbit.config`).then((it) => it.options);

describe('resolver', () => {
  it('resolves a content model from local sources', async () => {
    const options = await importStackbitConfig();
    const data = await resolveContentModel(options);
    expect(data).toBeInstanceOf(Object);
    expect(data.options).toBe(options);
    expect(data.props).toBeInstanceOf(Object);
    expect(data.entries).toBeInstanceOf(Array);
  });
});
