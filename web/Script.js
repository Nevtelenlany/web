var akadbavane=false;
function akadaly()
{
    if(!akadbavane)
    {
      document.body.style.fontSize = "x-large";
      document.body.style.backgroundImage="none";
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      akadbavane=true;
    }
    else{
      document.body.style.fontSize = "";
      document.body.style.backgroundImage='url("hatter.png")';
      document.body.style.color = "";
      document.body.style.backgroundColor = "";
      akadbavane=false;
    }
}