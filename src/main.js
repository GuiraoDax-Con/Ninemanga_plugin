// main.js

import puppeteer from 'puppeteer';



async function fetchHomePage() {
  const browser = await puppeteer.launch({ headless: true }); // headless:true para no mostrar navegador
  const page = await browser.newPage();

  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36");
  await page.goto('https://es.ninemanga.com/', { waitUntil: 'networkidle2' });

  // Obtener el contenido HTML completo
  const html = await page.content();

  console.log("HTML de la página principal:");
  console.log(html.substring(0, 1000)); // solo primeros 1000 caracteres

  await browser.close();
}

fetchHomePage();
