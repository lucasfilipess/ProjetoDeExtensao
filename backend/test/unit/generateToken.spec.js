const GenerateToken = require('../../src/utils/GenerateToken');

describe('Generate Token', () => {
  it('should generate un unique token with 149 caracters', async () => {
    const token = GenerateToken({
      id: 1,
      tipo: 1,
    });
    expect(token).toHaveLength(149);
  });
});
