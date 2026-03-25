const { kv } = require('@vercel/kv');

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    username, grade, topic, difficulty,
    score, scorePercent, letterGrade,
    timeTaken, answers
  } = req.body || {};

  if (!username || !grade || !topic || !difficulty || score === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  const completedAt = Date.now();

  const result = {
    id,
    username: username.toLowerCase(),
    grade: Number(grade),
    topic,           // { id, name, icon }
    difficulty,      // 'easy' | 'medium' | 'hard'
    score: Number(score),
    scorePercent: Number(scorePercent || 0),
    letterGrade: letterGrade || 'F',
    timeTaken: Number(timeTaken || 0),
    answers: answers || [],   // [{ questionText, options, correctIndex, chosenIndex, wasCorrect, explanation }]
    completedAt
  };

  // Store the full result and add to user's sorted set (score = timestamp for ordering)
  await kv.set(`quiz:${id}`, result);
  await kv.zadd(`quizzes:${result.username}`, { score: completedAt, member: id });

  return res.status(201).json({ id });
};
