async function clicou() {
  console.log("Vai dar o fetch")
  const data = await fetch("https://servidorigig.bokomoko.repl.co/")
  const resposta = await data.text()
  console.log({resposta})
   
}