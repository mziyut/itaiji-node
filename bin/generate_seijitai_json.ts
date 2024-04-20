import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

const url = 'https://wwwap.hi.u-tokyo.ac.jp/ships/itaiji_list.jsp';

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const rows = $('.ITAIJI > tbody:nth-child(1) > tr');
    const data: { [key: string]: string } = {};

    rows.each((i, row) => {
      const cells = $(row).find('td').toArray();
      if (cells.length > 1) {
        const seijitai = $(cells[1]).text().trim();
        const itaijiList = $(cells[2]).text().trim().split(/\s+/);
        itaijiList.forEach((itaiji) => {
          data[itaiji] = seijitai;
        });
      }
    });

    const json = JSON.stringify(data, null, 2);
    fs.writeFileSync('src/dict/seijitai.json', json);
  })
  .catch(console.error);
