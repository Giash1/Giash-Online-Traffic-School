// Test API Configuration
console.log('Environment Variables:');
console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);
console.log('MODE:', import.meta.env.MODE);
console.log('All env:', import.meta.env);

// Test API endpoint
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
console.log('Using API Base URL:', API_BASE_URL);

async function testEndpoints() {
    console.log('Testing API endpoints...');
    
    // Test health
    try {
        const healthResponse = await fetch(`${API_BASE_URL}/health`);
        const healthData = await healthResponse.json();
        console.log('✅ Health endpoint:', healthData);
    } catch (error) {
        console.error('❌ Health endpoint error:', error);
    }
    
    // Test register with minimal data
    try {
        const registerResponse = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: 'Debug',
                lastName: 'Test',
                email: 'debug@test.com',
                password: 'test123456',
                phone: '1234567890'
            })
        });
        const registerData = await registerResponse.json();
        console.log('Register endpoint status:', registerResponse.status);
        console.log('Register endpoint response:', registerData);
    } catch (error) {
        console.error('❌ Register endpoint error:', error);
    }
}

testEndpoints();
