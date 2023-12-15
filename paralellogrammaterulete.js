// Paralelogramma területének számítása magasság és oldal alapján
function teruletMagassaggalEsOldallal(magassag, oldal) {
    return magassag * oldal;
}

// Paralelogramma területének számítása szög és két oldal alapján
function teruletSzoggelEsKetOldallal(szog, oldal1, oldal2) {
    return oldal1 * oldal2 * Math.sin(szog);
}

// Példa használat:
const terulet1 = teruletMagassaggalEsOldallal(4, 6); // Magasság: 4, Oldal: 6
console.log('Terület (magasság és oldal alapján):', terulet1);

const terulet2 = teruletSzoggelEsKetOldallal(Math.PI / 3, 5, 7); // Szög: 60 fok (Math.PI / 3 radián), Oldalak: 5 és 7
console.log('Terület (szög és két oldal alapján):', terulet2);