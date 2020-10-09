function muunnaTaulukoksi()
{
  var jono = [];
  jono = [[6, 9, 7, 2], [5, 1, 9, 2], [3, 1, 9, 2], [7, 8, 2, 4], [5, 0, 2, 9]];
  var taulu = '<table border="1">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += '<tr>';
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += '<td>' + jono[j][k] + '</td>';
    }
    taulu += '</tr>';
  }
  taulu += '</table>';
  document.getElementById('ttaulu').innerHTML = taulu;
}
