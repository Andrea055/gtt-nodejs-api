const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const prompt = require("prompt-sync")({ sigint: true });
let dati = []
let nfermata=prompt("Inserisci una fermata:")
fetch("https://gpa.madbob.org/query.php?stop=" + nfermata)
.then(response => {
  if (!response.ok) {
    alert("C'è stato un errore durante la tua richiesta")
    throw new Error(`Request failed with status ${response.status}`)
  }
  return response.json()
})
.then(data => {
  let dati = []
  let long= Object.keys(data).length
  console.log("Lunghezza:" + long)
  for (let n = 0; n < long; n++) {
    dati.push(data[n].line)
    console.log(dati[n]);
  }


})
.catch(error => console.log(error))
 
