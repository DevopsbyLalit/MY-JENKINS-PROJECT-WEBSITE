// app.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>CI/CD Pipeline — Live Demo</title>
    <style>
      :root{
        --bg1:#0f172a;
        --bg2:#071035;
        --accent1:#7dd3fc;
        --accent2:#60a5fa;
        --glass:#ffffff18;
      }
      *{box-sizing:border-box}
      html,body{height:100%;margin:0;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;}
      body{
        background: radial-gradient(1000px 600px at 10% 10%, rgba(96,165,250,0.08), transparent 12%),
                    radial-gradient(900px 500px at 90% 90%, rgba(125,211,252,0.06), transparent 12%),
                    linear-gradient(180deg,var(--bg1),var(--bg2));
        color: #e6eef8;
        display:flex;
        align-items:center;
        justify-content:center;
        padding:32px;
      }

      /* animated blobs background */
      .blobs{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden}
      .blob{
        position:absolute;
        width:520px;height:520px;border-radius:50%;
        filter:blur(80px);opacity:0.25;transform:translate3d(0,0,0);
        animation:float 10s ease-in-out infinite;
      }
      .b1{left:-10%;top:-10%;background:linear-gradient(135deg,var(--accent1),#60a5fa); animation-delay:0s}
      .b2{right:-15%;bottom:-5%;background:linear-gradient(135deg,#a78bfa,#60a5fa); animation-delay:3s;opacity:0.18}
      @keyframes float{0%{transform:translateY(0) scale(1)}50%{transform:translateY(-30px) scale(1.05)}100%{transform:translateY(0) scale(1)}}

      .container{
        z-index:1;
        max-width:980px;
        width:100%;
        display:grid;
        grid-template-columns: 1fr 420px;
        gap:28px;
        align-items:center;
      }

      .left{
        background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
        border-radius:16px;
        padding:28px;
        box-shadow: 0 8px 30px rgba(2,6,23,0.6);
        backdrop-filter: blur(8px);
      }

      h1{margin:0;font-size:28px;line-height:1.05}
      p.lead{margin:14px 0 0;color: #d7e9ff;opacity:0.95;font-size:16px}

      .meta{margin-top:20px;display:flex;flex-wrap:wrap;gap:10px}
      .chip{
        background:var(--glass);
        color:#e9f5ff;padding:8px 12px;border-radius:999px;font-weight:600;font-size:13px;
        border:1px solid rgba(255,255,255,0.06)
      }

      .right{
        display:flex;flex-direction:column;gap:12px;align-items:center;
      }

      .card{
        width:100%;
        background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
        border-radius:14px;padding:22px;
        box-shadow: 0 6px 22px rgba(2,6,23,0.5);
        text-align:center;
      }

      .status{
        font-size:14px;margin-bottom:6px;color:#bfe7ff;
      }
      .status .dot{display:inline-block;width:10px;height:10px;border-radius:50%;background:#16a34a;margin-right:8px;vertical-align:middle;box-shadow:0 0 10px rgba(22,163,74,0.35)}
      .big{font-size:18px;font-weight:700;margin:8px 0}
      .buttons{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:12px}
      .btn{
        display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:10px;border:1px solid rgba(255,255,255,0.06);
        background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));
        color:#e6f7ff;font-weight:600;text-decoration:none;font-size:14px;
      }
      .btn svg{width:16px;height:16px;opacity:0.95}

      footer{margin-top:18px;text-align:center;color:#bcd8ff;opacity:0.7;font-size:13px}

      /* responsive */
      @media (max-width:900px){
        .container{grid-template-columns:1fr; padding-top:20px}
        .left, .card{margin:auto}
      }
    </style>
  </head>
  <body>
    <div class="blobs">
      <div class="blob b1"></div>
      <div class="blob b2"></div>
    </div>

    <main class="container">
      <section class="left">
        <h1>🚀 CI/CD Pipeline — Live Demo</h1>
        <p class="lead">This demo shows an automated pipeline built with <strong>GitHub → Jenkins → DockerHub → AWS EC2</strong>. The app runs inside a Docker container on an EC2 agent.</p>

        <div class="meta">
          <div class="chip">Jenkins • Pipeline</div>
          <div class="chip">Docker • DockerHub</div>
          <div class="chip">AWS EC2</div>
          <div class="chip">Node.js</div>
        </div>

        <div style="margin-top:18px;color:#d9f0ff;font-size:14px;line-height:1.5">
          <strong>What to check:</strong>
          <ul style="padding-left:18px;margin:8px 0 0 0;">
            <li>Pipeline run status in Jenkins (build triggers automatically on push).</li>
            <li>Image pushed to DockerHub: <code>lalit25/jenkins-demo:latest</code></li>
            <li>App running on port <strong>3000</strong> of the EC2 agent.</li>
          </ul>
        </div>

        <footer>Need guidance? Message me — I can help set this up for your projects.</footer>
      </section>

      <aside class="right">
        <div class="card">
          <div class="status"><span class="dot"></span> Deployed</div>
          <div class="big">App: <strong>lalit25/jenkins-demo:latest</strong></div>
          <div style="color:#cfeeff;font-size:14px">Endpoint</div>
          <div style="margin-top:6px;font-weight:700;color:#fff">http://<strong>34.239.157.26</strong>:3000</div>

          <div class="buttons">
            <a class="btn" href="https://github.com/DevopsbyLalit/MY-JENKINS-PROJECT-WEBSITE" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.649.5.5 5.649.5 12c0 5.084 3.292 9.394 7.869 10.92.576.106.787-.25.787-.556 0-.274-.01-1-.015-1.962-3.2.695-3.877-1.542-3.877-1.542-.523-1.328-1.276-1.682-1.276-1.682-1.042-.712.079-.698.079-.698 1.152.08 1.758 1.184 1.758 1.184 1.024 1.753 2.687 1.247 3.342.953.103-.742.401-1.247.73-1.533-2.554-.29-5.24-1.278-5.24-5.686 0-1.256.449-2.283 1.185-3.089-.119-.291-.513-1.464.114-3.051 0 0 .967-.31 3.167 1.18.918-.255 1.906-.382 2.887-.387.982.005 1.971.132 2.891.387 2.197-1.49 3.161-1.18 3.161-1.18.629 1.587.235 2.76.116 3.051.739.806 1.184 1.833 1.184 3.089 0 4.42-2.692 5.392-5.256 5.676.412.354.78 1.058.78 2.135 0 1.543-.014 2.789-.014 3.17 0 .31.21.67.792.556C20.708 21.393 24 17.083 24 12c0-6.351-5.149-11.5-12-11.5z"/></svg>
              View Repo
            </a>

            <a class="btn" href="https://hub.docker.com/repository/docker/lalit25/jenkins-demo" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 7.5l-1.5.5v1l-1 .5v1.5l2.5-.5v-2.5zM16 9.5l-1.5.5v1l-1 .5v1.5l2.5-.5v-2.5zM11.5 7.5L10 8v1l-1 .5V11l2.5-.5V7.5zM6 9.5L4.5 10v1l-1 .5v1.5L6 12v-2.5zM6 3.5l-1 .5v1l-1 .5v1.5L6 6V3.5zM11.5 3.5L10 4v1l-1 .5v1.5L11.5 6V3.5z"/></svg>
              View Image
            </a>
          </div>
        </div>

        <div class="card" style="margin-top:12px;text-align:left;padding:16px;font-size:14px;color:#d9f0ff">
          <strong>Quick tips</strong>
          <ul style="margin:8px 0 0 18px;">
            <li>Use <code>.dockerignore</code> to speed builds.</li>
            <li>Add tests to pipeline for CI validation.</li>
            <li>Use HTTPS (nginx + certbot) for production.</li>
          </ul>
        </div>
      </aside>
    </main>
  </body>
  </html>`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
