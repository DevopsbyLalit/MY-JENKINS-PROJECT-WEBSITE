const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Jenkins CI/CD Pipeline</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #4facfe, #00f2fe);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            color: white;
          }
          .card {
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            backdrop-filter: blur(10px);
            width: 400px;
          }
          h1 {
            margin-bottom: 10px;
            font-size: 32px;
          }
          p {
            font-size: 18px;
            opacity: 0.9;
          }
          .tag {
            margin-top: 15px;
            background: #fff;
            padding: 8px 15px;
            border-radius: 20px;
            color: #000;
            display: inline-block;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>🚀 CI/CD Pipeline Live!</h1>
          <p>Your Application is successfully deployed using</p>
          <div class="tag">Jenkins + Docker + AWS</div>
        </div>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
