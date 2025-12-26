const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Page d'accueil
app.get('/', (req, res) => {
    res.send(`
        <h1>🚀 LeakDB API</h1>
        <p>Status: <strong>ONLINE</strong></p>
        <p>Endpoints:</p>
        <ul>
            <li>POST /api/lookup</li>
            <li>POST /api/search</li>
            <li>GET /api/status</li>
        </ul>
    `);
});

// API Lookup
app.post('/api/lookup', (req, res) => {
    console.log('🔍 Lookup reçu:', req.body.id || 'no id');
    
    res.json({
        success: true,
        id: req.body.id || 'unknown',
        totalResults: 0,
        totalMatches: 0,
        duration: '5ms',
        filesScanned: 0,
        results: []
    });
});

// API Search
app.post('/api/search', (req, res) => {
    console.log('🔍 Search reçu:', req.body.searchTerm || 'no term');
    
    res.json({
        success: true,
        searchTerm: req.body.searchTerm || 'unknown',
        totalResults: 0,
        totalMatches: 0,
        duration: '5ms',
        filesProcessed: 0,
        results: []
    });
});

// API Status
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        service: 'LeakDB API',
        timestamp: new Date().toISOString()
    });
});

// Démarrer
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ API démarrée sur le port ${PORT}`);
});