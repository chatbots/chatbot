// Easier Chatbot Artificial Intelligence
// Copyright 2018 Thomas Joyce, All Rights Reserved.

  window.easy = new Array();
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
       {
       var record = this.responseText.split("\n\n");
       for (var i = 0, len = record.length; i < len; i++)
           {
           easy.push(record[i].split("\n"));
           }
        }
  };
  xhttp.open("GET", "script.txt", true);
  xhttp.send();

function main()
{
   var M="";
   var I="";
   var O="";
   var In="";
   var P="";

   I = document.getElementById("stimulus").value;
   H = document.getElementById("response").innerHTML;

   In = I.replace(/\bdon[']*t\b/gi, "do not");
   In = I.replace(/\bwon[']*t\b/gi, "will not");
   In = I.replace(/\bcan[']*t\b/gi, "can not");
   In = I.replace(/\bhow'd\b/gi, "how did");
   In = I.replace(/\Bn[']*t\b/gi, " not");
   In = I.replace(/'d\b/gi, " would");
   In = I.replace(/'s\b/gi, " is");
   In = I.replace(/'re\b/gi, " are");
   In = I.replace(/'ve\b/gi, " have");
   In = I.replace(/'ll\b/gi, " will");
   In = I.replace(/[.?!,;:"]/gi, "");

   I = I.replace(/\bf[uU]ck|shi[tT]|bi[tT]ch|bas[tT]ard\b/gi, "%$#");
   I = I.replace(/\Bf[uU]ck|shi[tT]|bi[tT]ch|bas[tT]ard\B/gi, "#$%");

   M += "<b>" + I +  '</b><br>\r' + "\n";

   for(i=0; i < easy.length; i++)
      {
      P=easy[i][0].replace(/\*/gi, "(.*)");
      P=P.replace(/\s+\(\.\*\)$/, "(.*)*");
      re = new RegExp ("\\b("+P+")\\b", "gi");
      if(re.test(In))
        {
        len = easy[i].length - 1;
        index = Math.ceil( len * Math.random());
        reply = easy[i][index];
        if (/\$\d/.test(reply)) 
           {
           O = In.replace(re, reply);
           }
        else
           {
           O = reply;
           }
        O = O.substr(0, 1).toUpperCase() + O.substr(1);

        O = O.replace(/\s+/gi, " ");
        O = O.replace(/\s+(\,|\?)/, "$1");

        M += "<i>" + O +  '</i><br>\r' + "\n";
        break;
        }
      }
   M +=  '<br>\r' + "\n";
   document.getElementById("response").innerHTML = M+H;
   document.getElementById("stimulus").value="";
}
