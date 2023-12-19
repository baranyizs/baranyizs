
function szamolTeruletMagassaggal() {
    const oldalHossz = parseFloat(document.getElementById('oldalHossz').value);
    const magassag = parseFloat(document.getElementById('magassag').value);
    const terulet = oldalHossz * magassag;
    kiirEredmeny(terulet);
  }

function szamolTeruletSzoggel() {
    const eszog = parseFloat(document.getElementById('eszog').value);
    const oldalA = parseFloat(document.getElementById('oldalA').value);
    const oldalB = parseFloat(document.getElementById('oldalB').value);
    const szinusz = Math.sin(eszog * Math.PI / 180);
    const terulet = oldalA * oldalB * szinusz;
    kiirEredmeny(terulet);
  }

function kiirEredmeny(terulet) {
    const eredmenyDiv = document.getElementById('eredmeny');
    eredmenyDiv.innerText = `A paralelogramma területe: ${terulet.toFixed(2)}`;
  }

console.log(`A paralelogramma területe magassággal és oldallal: ${teruletMagassagAlapjan}`);
console.log(`A paralelogramma területe szöggel és két oldallal: ${teruletSzoggelAlapjan}`);

