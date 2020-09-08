function yhteen()
{
  yhteensa = 0;
  for(var y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById('lukujenTulostusY').innerHTML = '<p>'+ yhteensa + '</p>';
}
function potenssi()
{
  var koro = document.getElementById('kor').value;
  var pote = document.getElementById('pot').value;
  yht = koro;
  for(var p = 1; p < pote; p++)
  {
    yht *= koro;
  }
  document.getElementById('lukujenTulostusP').innerHTML = '<p>' + yht + '</p>';
}
