const { kv } = require('@vercel/kv');

function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

module.exports = async function handler(req, res) {
  cors(res);
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET /api/users?username=xxx — look up a user
  if (req.method === 'GET') {
    const { username } = req.query;
    if (!username) return res.status(400).json({ error: 'username required' });
    const user = await kv.get(`user:${username.toLowerCase().trim()}`);
    if (!user) return res.status(404).json({ error: 'not found' });
    return res.status(200).json(user);
  }

  // POST /api/users — create or return existing user
  if (req.method === 'POST') {
    const { username } = req.body || {};
    if (!username || typeof username !== 'string') {
      return res.status(400).json({ error: 'username is required' });
    }
    const key = username.toLowerCase().trim();
    if (!/^[a-z0-9_-]{1,20}$/.test(key)) {
      return res.status(400).json({
        error: 'Username must be 1–20 characters: letters, numbers, _ or - only'
      });
    }

    const existing = await kv.get(`user:${key}`);
    if (existing) return res.status(200).json({ ...existing, isNew: false });

    const user = {
      username: key,
      displayName: username.trim(),
      createdAt: Date.now()
    };
    await kv.set(`user:${key}`, user);
    return res.status(201).json({ ...user, isNew: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
};
