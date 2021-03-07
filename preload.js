function version(idSelector, version){
  let elemento = document.getElementById(idSelector);

  if(elemento){
    elemento.innerText = version;
  }
}
window.addEventListener('DOMContentLoaded', () => {
  const componentes = ['node', 'chromium', 'electron']

  for(const component of )
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
});



