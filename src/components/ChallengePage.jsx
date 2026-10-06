import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Download, ImagePlus, RotateCcw } from "lucide-react";
import Navbar from "./Navbar";

const TEMPLATE_SRC = "/Screenshot 2026-10-04 124118.png";

const FRAME = {
  width: 850,
  height: 853,
  photo: { cx: 583, cy: 286, r: 120 },
  name: { x: 552, y: 482 },
  college: { x: 552, y: 540 },
  fontSize: 26,
  minFontSize: 14,
  maxWidth: 270,
};

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });
}

function drawCover(ctx, img, cx, cy, r) {
  const scale = Math.max((2 * r) / img.naturalWidth, (2 * r) / img.naturalHeight);
  const w = img.naturalWidth * scale;
  const h = img.naturalHeight * scale;
  ctx.drawImage(img, cx - w / 2, cy - h / 2, w, h);
}

function drawField(ctx, text, x, y, scale, maxWidth) {
  if (!text) return;
  let size = FRAME.fontSize * scale;
  ctx.font = `700 ${size}px ui-sans-serif, system-ui, sans-serif`;
  while (ctx.measureText(text).width > maxWidth * scale && size > FRAME.minFontSize * scale) {
    size -= scale;
    ctx.font = `700 ${size}px ui-sans-serif, system-ui, sans-serif`;
  }
  ctx.fillText(text, x * scale, y * scale);
}

export default function ChallengePage() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [template, setTemplate] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    let alive = true;
    loadImage(TEMPLATE_SRC)
      .then((img) => { if (alive) setTemplate(img); })
      .catch(() => { if (alive) setError("Could not load the challenge template image."); });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!photoUrl) { setPhoto(null); return; }
    let alive = true;
    loadImage(photoUrl)
      .then((img) => { if (alive) setPhoto(img); })
      .catch(() => { if (alive) setError("That image could not be read. Try another photo."); });
    return () => { alive = false; };
  }, [photoUrl]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !template) return;
    const ctx = canvas.getContext("2d");
    const scale = template.naturalWidth / FRAME.width;

    canvas.width = template.naturalWidth;
    canvas.height = template.naturalHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    const { cx, cy, r } = FRAME.photo;
    if (photo) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx * scale, cy * scale, r * scale, 0, Math.PI * 2);
      ctx.clip();
      drawCover(ctx, photo, cx * scale, cy * scale, r * scale);
      ctx.restore();

      ctx.lineWidth = 2 * scale;
      ctx.strokeStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(cx * scale, cy * scale, (r + 1) * scale, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.fillStyle = "#ffffff";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,.6)";
    ctx.shadowBlur = 6 * scale;
    drawField(ctx, name.trim(), FRAME.name.x, FRAME.name.y, scale, FRAME.maxWidth);
    drawField(ctx, college.trim(), FRAME.college.x, FRAME.college.y, scale, FRAME.maxWidth);
    ctx.shadowBlur = 0;
  }, [template, photo, name, college]);

  const handlePhotoChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file (JPG or PNG).");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => { setError(""); setPhotoUrl(String(reader.result)); };
    reader.onerror = () => setError("Could not read that file. Try another photo.");
    reader.readAsDataURL(file);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas || !template) return;
    canvas.toBlob((blob) => {
      if (!blob) { setError("Could not generate the image."); return; }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "scd-social-media-challenge.png";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }, "image/png");
  };

  const handleReset = () => {
    setName("");
    setCollege("");
    setPhotoUrl("");
    setPhoto(null);
    setError("");
  };

  return (
    <div className="page-bg challenge-page">
      <Navbar />

      <main className="challenge-main">
        <a className="challenge-back" href="#">
          <ArrowLeft size={16} />
          <span>Back to event</span>
        </a>

        <div className="challenge-head">
          <span className="challenge-eyebrow">Social Media Challenge</span>
          <h1>Create your <span className="gradient-text">participation card</span></h1>
          <p className="challenge-desc">
            Enter your name and college, upload a photo, and we'll overlay everything onto the official
            AWS Student Community Day poster. Download it and share it with
            <strong> #SCD2026</strong>.
          </p>
        </div>

        <div className="challenge-guidelines">
          <h3>Important Guidelines</h3>
          <ul>
            <li>
              When you post this on your social media, don't forget to tag us at{" "}
              <a href="https://www.instagram.com/aws_student_builder_group_mecs?stkn=c29lMHRiN2hocGw0" target="_blank" rel="noopener noreferrer">Instagram</a>{" "}
              for Instagram and{" "}
              <a href="https://www.linkedin.com/company/aws-cloud-club-mecs/" target="_blank" rel="noopener noreferrer">LinkedIn</a>{" "}
              for LinkedIn.
            </li>
            <li>Also be sure to have the <strong>#AWSSBGMECS</strong> in the post.</li>
            <li>The post with the most engagement will get <span className="highlight">special goodies</span>.</li>
          </ul>
        </div>

        <div className="challenge-grid">
          <form className="challenge-form" onSubmit={(e) => e.preventDefault()}>
            <div className="challenge-field">
              <label htmlFor="challenge-name">Your Name</label>
              <input
                id="challenge-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Aditi Sharma"
                maxLength={40}
                autoComplete="name"
              />
            </div>

            <div className="challenge-field">
              <label htmlFor="challenge-college">College</label>
              <input
                id="challenge-college"
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                placeholder="e.g. Matrusri Engineering College"
                maxLength={50}
                autoComplete="organization"
              />
            </div>

            <div className="challenge-field">
              <label htmlFor="challenge-photo">Your Photo</label>
              <label className="challenge-photo-drop" htmlFor="challenge-photo">
                <ImagePlus size={20} />
                <span>{photoUrl ? "Photo added — click to replace" : "Upload a photo (JPG / PNG)"}</span>
              </label>
              <input
                id="challenge-photo"
                className="sr-only"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </div>

            {error && <p className="challenge-error">{error}</p>}

            <div className="challenge-actions">
              <button type="button" className="gradient-btn" onClick={handleDownload} disabled={!template}>
                <div className="btn-bg" />
                <div className="btn-bg-hover" />
                <span>Download Card</span>
                <Download size={18} />
              </button>
              {(name || college || photoUrl) && (
                <button type="button" className="challenge-reset" onClick={handleReset}>
                  <RotateCcw size={15} />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </form>

          <div className="challenge-preview">
            <div className="challenge-frame">
              <canvas ref={canvasRef} aria-label="Live preview of your challenge card" />
              {!template && <div className="challenge-loading">Loading template…</div>}
            </div>
            <p className="challenge-caption">Live preview — this is exactly what you download.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
