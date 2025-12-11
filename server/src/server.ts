import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running'
  });
});
//registration route
app.post('/api/register', (req, res) => {
  res.json({
    status: 'Success',
    message: 'User registered successfully'
  });
});
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});