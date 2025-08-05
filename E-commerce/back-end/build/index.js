// "use strict";
// var __importDefault = (this && this.__importDefault) || function (mod) {
//     return (mod && mod.__esModule) ? mod : { "default": mod };
// };
// Object.defineProperty(exports, "__esModule", { value: true });
// const express_1 = __importDefault(require("express"));
// const data_1 = require("./data");
// const app = (0, express_1.default)();
// app.get('/api/products', (req, res) => {
//     res.json(data_1.simpleProducts);
// });
// const PORT = 4000;
// app.listen(PORT, () => {
//     console.log(`server started at http://localhost:${PORT}`);
// });



// const express = require('express');
// const cors = require('cors');
// const { simpleProducts } = require('./data'); // adjust path if needed

// const app = express();

// // ✅ Enable CORS for React app
// app.use(cors({
//   origin: 'http://localhost:3000',
//   methods: 'GET,POST,PUT,DELETE',
//   allowedHeaders: 'Content-Type,Authorization'
// }));

// app.get('/api/products', (req, res) => {
//   res.json(simpleProducts);
// });

// const PORT = 4000;
// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const { simpleProducts } = require('./data'); // adjust path

const app = express();

// ✅ Explicitly allow frontend origin
app.use('/api', createProxyMiddleware({ 
    target: 'http://localhost:3000/', //original url
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));

app.get('/api/products', (req, res) => {
  res.json(simpleProducts);
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
