import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

console.log('Testing OpenAI API...');
console.log('API Key present:', !!process.env.OPENAI_API_KEY);

try {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say hello' }],
    max_tokens: 10
  });
  console.log('✅ SUCCESS:', response.choices[0].message.content);
  process.exit(0);
} catch (error) {
  console.error('❌ ERROR:', error.message);
  console.error('Status:', error.status);
  console.error('Code:', error.code);
  console.error('Type:', error.type);
  if (error.response) {
    console.error('Response:', error.response);
  }
  process.exit(1);
}

