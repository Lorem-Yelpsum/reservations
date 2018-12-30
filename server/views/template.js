let template = (rest_id) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>No Reservations</title>
      
    </head>
    <body>
      <div id="sidebar">
      </div>
      <script>
        window.rest_id = ${rest_id}
      </script>
      <script type="text/javascript" src="/bundle.js"></script>
    </body>
  </html>`;
}

module.exports = template;