fetch('Navbar/navbar.html')            // path to your navbar file
      .then(r => r.text())           // convert to text
      .then(html => {                // insert into #navbar
        document.getElementById('navbar').innerHTML = html;
      });