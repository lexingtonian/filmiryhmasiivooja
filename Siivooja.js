<script>
// Edit your script here


</script>
<!-- edit your html here -->
<p>Kirjoita aielmasi</p>


<form id="frm1" action="/action_page.php">
  <input type="button" onclick="myFunction()" value="Siivoa">
  <input name="inputTxt" type="text" maxlength="512" id="inputTxt" class="searchField"/>
</form>


<script>
function myFunction() {
  //document.write(document.getElementById("inputTxt").value);
  
  var strOriginal = document.getElementById("inputTxt").value;
  var str = strOriginal.toLowerCase();
  var res = str.split(" ");
 
  // Kirjoita alkuperäinen
  //document.write(res);
  
        var words = str.split(" ");
    //var words = str.match(/\b(\w+\W+)/g);
    //korjaa teksti
        for (var i = 0; i < words.length - 1; i++) {
            //words[i] += " ";
        //document.write(words[i]);
        //document.write("---");
        if (words[i]=="prässätä") words[i]="piinata";
        if (words[i]=="prässäys") words[i]="piinaus";
        if (words[i]=="digi") words[i]="ana";
        if (words[i]=="Ari") words[i]="Hänen Korkeutensa Ari"; 
        if (words[i]=="vittu") words[i]="YLLÄPITO";
        if (words[i]=="vittua") words[i]="YLLÄPITO!!!";
        if (words[i]=="vakavasti") words[i]="leikillään"; 
        if (words[i]=="jos") words[i]="joskopa tuota noin niin, he he, ";
        if (words[i]=="filmi") words[i]="mustavalkofilmi";
        if (words[i]=="facebook") words[i]="MySpace";
        if (words[i]=="kun") words[i]="jos";
        if (words[i]=="ja") words[i]="sikälimikäli";
        numero = Math.random();
        if (numero < 0.3) words[i]="anteeksi";
        if (numero < 0.1) words[i]="jos ylläpidon tyypeille vaan sopii";
        }
    var new_words = words.join(' ');
    words.join(" ");
        //document.write(words);
    document.write(new_words);
          //document.write(x);
          if (numero < 0.2) document.write(" ja ihan vaan leikilläni sanon, ei sarkasmia!");;
  
}
</script>


</body>
</html>