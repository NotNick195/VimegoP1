const axios = require('axios');

test('should get recommendations for user', async () => {
  const response = await axios.get('http://localhost:3002/recommendations/1');
  expect(response.data.user).toHaveProperty('name');
  expect(response.data.recommendations).toContain('song1');
});
