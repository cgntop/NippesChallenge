
async function loadConfig(){
  const res = await fetch('config.json?' + Date.now());
  if(!res.ok){ throw new Error('config.json nicht gefunden'); }
  return await res.json();
}
function setTheme(mode){
  const link = document.getElementById('theme');
  link.href = mode === 'contrast' ? 'assets-contrast.css' : 'assets.css';
  localStorage.setItem('theme', mode);
}
function initTheme(){
  const saved = localStorage.getItem('theme') || 'normal';
  setTheme(saved);
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.textContent = saved==='contrast' ? 'Standard-Design' : 'Hoher Kontrast';
  }
}
function toggleTheme(){
  const current = localStorage.getItem('theme') || 'normal';
  const next = current === 'contrast' ? 'normal' : 'contrast';
  setTheme(next);
  const btn = document.getElementById('themeToggle');
  if(btn){
    btn.textContent = next==='contrast' ? 'Standard-Design' : 'Hoher Kontrast';
  }
}
