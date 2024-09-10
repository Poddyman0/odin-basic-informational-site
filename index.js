const http = require("http");
const url = require("url");
const fs = require("fs");

// Read the content of each HTML file
const page404 = fs.readFileSync("404.html", "utf-8");
const indexPage = fs.readFileSync("index.html", "utf-8");
const aboutPage = fs.readFileSync("about.html", "utf-8");
const contactMePage = fs.readFileSync("contact-me.html", "utf-8");

// Create the server
http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  let pageContent = "";
  let statusCode = 200;
  
  // Route based on URL path
  switch (q.pathname) {
    case "/":
      pageContent = indexPage;
      break;
    case "/about":
      pageContent = aboutPage;
      break;
    case "/contact-me":
      pageContent = contactMePage;
      break;
    default:
      pageContent = page404;
      statusCode = 404;
      break;
  }

  // Send the response
  res.writeHead(statusCode, { "Content-Type": "text/html" });
  res.write(pageContent);
  res.end();
}).listen(8080, () => {
  console.log("Server running at http://localhost:8080/");
});
