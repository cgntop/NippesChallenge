
async function loadConfig(){
  const res = await fetch('config.json?' + Date.now());
  if(!res.ok) throw new Error('config.json nicht gefunden');
  return await res.json();
}
