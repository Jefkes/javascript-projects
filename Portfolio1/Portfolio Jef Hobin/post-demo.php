<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Post resultaat</title>
</head>
<body>
  <h1>Je post data</h1>
  <p>Normaal sla je die op in een databank of verstuur je ze in een e-mail, maar als demo ben ik gewoon een echo.</p>
  <pre>
<?php
echo
'Voornaam: ' . htmlspecialchars($_POST["eerstenaam"]) . "\n" .
'Familienaam: ' . htmlspecialchars($_POST["laatstenaam"]) . "\n" .
'E-mail: ' . htmlspecialchars($_POST["e-mail"]) . "\n" .
'Vraag: ' . htmlspecialchars($_POST["question"]) . "\n" .
'Nieuwbrief: ' . htmlspecialchars($_POST["nieuwsbrief"]);
?>
  </pre>
</body>
</html>
