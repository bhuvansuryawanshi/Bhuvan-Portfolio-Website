exports.handler = async (event, context) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
    }

    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            message: 'Environment check',
            emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
            emailPass: process.env.EMAIL_PASS ? 'Set' : 'Not set',
            nodeEnv: process.env.NODE_ENV || 'Not set'
        })
    };
}; 