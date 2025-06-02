import puppeteer from 'puppeteer';

async function fetchMangas() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0 Safari/537.36");
  await page.goto('https://es.ninemanga.com/', { waitUntil: 'networkidle2' });

  // Extraer los mangas destacados
  const mangas = await page.evaluate(() => {
    // Aquí debes ajustar el selector CSS según la estructura actual de la página
    const mangaElements = document.querySelectorAll('.listupd li');

    const results = [];
    mangaElements.forEach(manga => {
      const titleElement = manga.querySelector('a');
      const imgElement = manga.querySelector('img');
      const title = titleElement ? titleElement.title : null;
      const url = titleElement ? titleElement.href : null;
      const img = imgElement ? imgElement.src : null;

      if (title && url) {
        results.push({ title, url, img });
      }
    });

    return results;
  });

  console.log("Mangas destacados:");
  console.log(mangas);

  await browser.close();
}

fetchMangas();
