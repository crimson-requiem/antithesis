function create() {
    var url = document.getElementById('input').value;
    var win = window.open('about:blank#blocked');
    win.document.body.style.margin = '0';
    win.document.body.style.height = '100vh';
    var iframe = win.document.createElement('iframe');
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.margin = '0';
    iframe.src = url;
    win.document.body.appendChild(iframe);
    window.location.replace("https://docs.google.com");
    document.getElementById("id").innerHTML = "Cloaked~"
}
function flavor() {
// don't question the variable name, alright?
let backshots = Math.floor(Math.random() * 11);
if(backshots == 0)
  document.getElementById("flavortext").innerHTML = "Krish needs a girl ngl"
if(backshots == 1)
  document.getElementById("flavortext").innerHTML = "CHROMAKOPIA IS SO GOOD THO???"
if(backshots == 2)
  document.getElementById("flavortext").innerHTML = "Go/jo vs Blobkuna: The Strongest KitKat of Today versus the Strongest Blob of History"
if(backshots == 3)
  document.getElementById("flavortext").innerHTML = "as autumn leaves fall, as the snow flutters, as the dew drips, as the sunlight beats down..."
if(backshots == 4)
  document.getElementById("flavortext").innerHTML = "the corpse still rots like a spoiled fruit."
if(backshots == 5)
  document.getElementById("flavortext").innerHTML = "ok but why jay a baddie"
if(backshots == 6)
  document.getElementById("flavortext").innerHTML = "nah but like why is youth so fleeting and the embrace of death ever so close to the human psyche, waiting for a chance to finally claim another grain of sand to it's ever-ticking desert of despair"
if(backshots == 7)
  document.getElementById("flavortext").innerHTML = "Would it be funny if i had an external js file purely to store the entirety of Ulysses and make it one of the flavor text thingies"
if(backshots == 8)
  document.getElementById("flavortext").innerHTML = "NODE.JS!!! I'VE LITERALLY NEVER USED IT CUZ IM A BUM!!!"
if(backshots == 9)
  document.getElementById("flavortext").innerHTML = "go go go go head so good she honor rool"
if(backshots == 10)
  document.getElementById("flavortext").innerHTML = "Breakcore is a good genre, if you disagree I will jump you (NOT ACTUALLY THIS IS NOT TRUE DON'T SUE ME PLEAS EPLEASE PLEASE)"
}
// if anyone's reading this code uhhh i like someone
// also "zing-zing" (not using ur actual name lmao) IM NOT GAY ONG I LIKE A GIRL ISTG
