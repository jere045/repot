function summaKeskiarvo()
{
  var lu1, lu2, lu3, lu4, lu5, summa, keskiarvo;
  lu1 = parseInt(document.getElementById('luku01').value);
  lu2 = parseInt(document.getElementById('luku02').value);
  lu3 = parseInt(document.getElementById('luku03').value);
  lu4 = parseInt(document.getElementById('luku04').value);
  lu5 = parseInt(document.getElementById('luku05').value);
  summa = lu1 + lu2 + lu3 + lu4 + lu5;
  keskiarvo = summa / 5;
  document.getElementById('tulosta4').innerHTML = "Lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo;
}
