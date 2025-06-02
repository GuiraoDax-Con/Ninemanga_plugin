// main.js

import { fetchMangas } from './fetchMangas.js';

async function main() {
  const mangas = await fetchMangas();
  console.log("Mangas encontrados desde main.js:");
  console.log(mangas);
}

main();
