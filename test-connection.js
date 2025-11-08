import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: 'postgres://ser@localhost:5432/fullstack_employees'
});

async function testConnection() {
  try {
    await client.connect();
    console.log('✅ Connected to PostgreSQL successfully!');
  } catch (err) {
    console.error('❌ Connection failed:', err);
  } finally {
    await client.end();
  }
}

testConnection();
