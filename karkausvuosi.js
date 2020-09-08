function onkoKarkaus()
{
  kluku = document.getElementById('kluku').value;
  if(kluku%4 == 0 && kluku%100 != 0)
  {
    document.getElementById('tulosta3').innerHTML = "Luku on karkausvuosi";
  }
  else if(kluku%400 ==0) {
    document.getElementById('tulosta3').innerHTML = "Luku on karkausvuosi";
  }
  else {
    document.getElementById('tulosta3').innerHTML = "Luku ei ole karkausvuosi";
  }
}
