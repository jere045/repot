function viikonpaiva()
{
  var vluku = document.getElementById('vluku').value;
  if(vluku == 1)
  {
    document.getElementById('tulosta2').innerHTML = "Maanantai";
  }
  else if(vluku == 2)
  {
    document.getElementById('tulosta2').innerHTML = "Tiistai";
  }
  else if(vluku == 3)
  {
    document.getElementById('tulosta2').innerHTML = "Keskiviikko";
  }
  else if(vluku == 4)
  {
    document.getElementById('tulosta2').innerHTML = "Torstai";
  }
  else if(vluku == 5)
  {
    document.getElementById('tulosta2').innerHTML = "Perjantai";
  }
  else if(vluku == 6)
  {
    document.getElementById('tulosta2').innerHTML = "Lauantai";
  }
  else if(vluku == 7)
  {
    document.getElementById('tulosta2').innerHTML = "Sunnuntai";
  }
  else {
      document.getElementById('tulosta2').innerHTML = "Luku ei kuulu viikonpäivälle";
  }
}
