<strong>Project Title:</strong> Basic Node.js Informational Website

<strong>Project Overview:</strong>
This project is a simple informational website built using Node.js. The website contains four static pages: an index page, an about page, a contact page, and a custom 404 error page. The purpose of this project is to practice setting up a basic Node.js server and routing requests to serve different HTML files based on the URL path. The website runs locally on localhost:8080 and handles routing for each of the pages, with a fallback to the 404 page if a user tries to access a non-existent route.

<strong>Technologies and Skills Used:</strong>

<ul>
  <li><strong>Node.js:</strong> The core technology used to create the server and manage routing logic.</li>
  <li><strong>JavaScript (ES6):</strong> Used to handle server logic and routing for different URL paths.</li>
  <li><strong>HTML5:</strong> Each page (index, about, contact-me, and 404) is a simple HTML file with basic structure and content.</li>
  <li><strong>HTTP Module (Node.js):</strong> The built-in HTTP module is used to create the server and listen for incoming requests.</li>
  <li><strong>File System (fs) Module (Node.js):</strong> Utilized to read and serve the content of the HTML files dynamically based on the requested URL.</li>
  <li><strong>Error Handling:</strong> Implemented custom routing logic to display a 404 page when the user navigates to a non-existent URL.</li>
</ul>

<strong>Features:</strong>

<ul>
  <li><strong>Simple Node.js Server:</strong>
    <ul>
      <li>A Node.js server is set up using the HTTP module, listening on port 8080. The server handles incoming requests and serves the appropriate HTML file based on the URL path.</li>
    </ul>
  </li>
  <li><strong>Routing Logic:</strong>
    <ul>
      <li>The server routes users to different pages based on the URL:
        <ul>
          <li>localhost:8080/ serves the index.html page.</li>
          <li>localhost:8080/about serves the about.html page.</li>
          <li>localhost:8080/contact-me serves the contact-me.html page.</li>
          <li>Any URL that does not match the above routes triggers the 404.html page.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Static HTML Pages:</strong>
    <ul>
      <li>Each page is a basic HTML file with minimal content. The focus was on building the routing and server logic rather than the design and content.</li>
      <li>The 404.html page provides a simple error message informing users that the requested page was not found.</li>
    </ul>
  </li>
  <li><strong>Custom 404 Page Handling:</strong>
    <ul>
      <li>Implemented custom logic in the server to check if the requested URL matches one of the predefined paths. If not, it serves the 404 page.</li>
    </ul>
  </li>
  <li><strong>File System Integration:</strong>
    <ul>
      <li>The server uses Node.js’s fs module to read the content of each HTML file and respond with it when the corresponding route is requested.</li>
    </ul>
  </li>
  <li><strong>Modular and Scalable Code:</strong>
    <ul>
      <li>The code is structured to be easily extendable, allowing for additional pages and routes to be added in the future without major changes.</li>
    </ul>
  </li>
</ul>
