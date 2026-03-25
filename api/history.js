const { Redis } = require('@upstash/redis');
const kv = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { username } = req.query;
  if (!username) return res.status(400).json({ error: 'username required' });

  const key = username.toLowerCase().trim();

  // Fetch up to 50 most recent quiz IDs (newest first via rev:true)
  const quizIds = await kv.zrange(`quizzes:${key}`, 0, 49, { rev: true });
  if (!quizIds || quizIds.length === 0) return res.status(200).json([]);

  // Batch-fetch all quiz records
  const quizzes = await Promise.all(quizIds.map(id => kv.get(`quiz:${id}`)));
  return res.status(200).json(quizzes.filter(Boolean));
};
