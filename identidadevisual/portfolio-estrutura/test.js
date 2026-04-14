const html = require('fs').readFileSync('portfolio-interativo.html', 'utf8');
const logoRegex = /<symbol id="logo-main" viewBox="0 0 1024 1024">([\s\S]*?)<\/symbol>/;
const match = html.match(logoRegex);
if (match) {
    console.log("Logo found");
} else {
    console.log("Logo not found");
}
