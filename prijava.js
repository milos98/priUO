var pitanjaPR = ['Zbog čega se prijavljuješ baš za KM tim i na koji način želiš da doprineseš radu ovog tima?',
    'Koja iskustva imaš, a misliš da će ti značiti u radu ovog tima',
    'Šta želiš da naučiš radom u ovom timu?',
    'Šta je najvažnije što mora postojati kako bi ovaj tim dobro funkcionisao i zašto?',
    'Koja su tvoja očekivanja od koordinatora tima?'
]

var pitanjaCR = ['Zbog čega se prijavljuješ baš za KM tim i na koji način želiš da doprineseš radu ovog tima?',
    'Koja iskustva imaš, a misliš da će ti značiti u radu ovog tima',
    'Šta želiš da naučiš radom u ovom timu?',
    'Šta je najvažnije što mora postojati kako bi ovaj tim dobro funkcionisao i zašto?',
    'Koja su tvoja očekivanja od koordinatora tima?'
]

var pitanjaHR = ['Zbog čega se prijavljuješ baš za KM tim i na koji način želiš da doprineseš radu ovog tima?',
    'Koja iskustva imaš, a misliš da će ti značiti u radu ovog tima',
    'Šta želiš da naučiš radom u ovom timu?',
    'Šta je najvažnije što mora postojati kako bi ovaj tim dobro funkcionisao i zašto?',
    'Koja su tvoja očekivanja od koordinatora tima?'
]

var pitanjaAR = ['Zbog čega se prijavljuješ baš za KM tim i na koji način želiš da doprineseš radu ovog tima?',
    'Koja iskustva imaš, a misliš da će ti značiti u radu ovog tima',
    'Šta želiš da naučiš radom u ovom timu?',
    'Šta je najvažnije što mora postojati kako bi ovaj tim dobro funkcionisao i zašto?',
    'Koja su tvoja očekivanja od koordinatora tima?'
]

var pitanjaKM = ['Zbog čega se prijavljuješ baš za KM tim i na koji način želiš da doprineseš radu ovog tima?',
    'Koja iskustva imaš, a misliš da će ti značiti u radu ovog tima',
    'Šta želiš da naučiš radom u ovom timu?',
    'Šta je najvažnije što mora postojati kako bi ovaj tim dobro funkcionisao i zašto?',
    'Koja su tvoja očekivanja od koordinatora tima?'
]

const form = document.forms['prijava'];
const scriptURL = 'https://script.google.com/macros/s/AKfycbwqYPK58ILeGylN23SeIwv5BsVzJAL7Zb-XIjWjzEE9CcqYa_k/exec';


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) }).then(response => console.log('Success!', response)).catch(error => console.error('Error!', error.message))
})

function change() {
    var tim = document.getElementById('tim').value;

    document.getElementById('change').innerText = tim;

    pitanja(tim);
    reset();

}

function pitanja(tim) {
    switch (tim) {
        case 'PR': document.getElementById('pitanje#1').innerText = pitanjaPR[0];
            document.getElementById('pitanje#2').innerText = pitanjaPR[1];
            document.getElementById('pitanje#3').innerText = pitanjaPR[2];
            document.getElementById('pitanje#4').innerText = pitanjaPR[3];
            document.getElementById('pitanje#5').innerText = pitanjaPR[4];
            document.getElementById('pitanje#6').style.display = 'none';
            document.getElementById('pitanje #6').style.display = 'none';
            document.getElementById('pitanje#7').style.display = 'none';
            document.getElementById('pitanje #7').style.display = 'none';
            break;
        case 'CR': document.getElementById('pitanje#1').innerText = pitanjaCR[0];
            document.getElementById('pitanje#2').innerText = pitanjaCR[1];
            document.getElementById('pitanje#3').innerText = pitanjaCR[2];
            document.getElementById('pitanje#4').innerText = pitanjaCR[3];
            document.getElementById('pitanje#5').innerText = pitanjaCR[4];
            document.getElementById('pitanje#6').style.display = 'none';
            document.getElementById('pitanje #6').style.display = 'none';
            document.getElementById('pitanje#7').style.display = 'none';
            document.getElementById('pitanje #7').style.display = 'none';
            break;
        case 'HR': document.getElementById('pitanje#1').innerText = pitanjaHR[0];
            document.getElementById('pitanje#2').innerText = pitanjaHR[1];
            document.getElementById('pitanje#3').innerText = pitanjaHR[2];
            document.getElementById('pitanje#4').innerText = pitanjaHR[3];
            document.getElementById('pitanje#5').innerText = pitanjaHR[4];
            document.getElementById('pitanje#6').style.display = 'none';
            document.getElementById('pitanje #6').style.display = 'none';
            document.getElementById('pitanje#7').style.display = 'none';
            document.getElementById('pitanje #7').style.display = 'none';
            break;
        case 'AR': document.getElementById('pitanje#1').innerText = pitanjaAR[0];
            document.getElementById('pitanje#2').innerText = pitanjaAR[1];
            document.getElementById('pitanje#3').innerText = pitanjaAR[2];
            document.getElementById('pitanje#4').innerText = pitanjaAR[3];
            document.getElementById('pitanje#5').innerText = pitanjaAR[4];
            document.getElementById('pitanje#6').style.display = 'none';
            document.getElementById('pitanje #6').style.display = 'none';
            document.getElementById('pitanje#7').style.display = 'none';
            document.getElementById('pitanje #7').style.display = 'none';
            break;
        case 'KM': document.getElementById('pitanje#1').innerText = pitanjaKM[0];
            document.getElementById('pitanje#2').innerText = pitanjaKM[1];
            document.getElementById('pitanje#3').innerText = pitanjaKM[2];
            document.getElementById('pitanje#4').innerText = pitanjaKM[3];
            document.getElementById('pitanje#5').innerText = pitanjaKM[4];
            document.getElementById('pitanje#6').style.display = 'none';
            document.getElementById('pitanje #6').style.display = 'none';
            document.getElementById('pitanje#7').style.display = 'none';
            document.getElementById('pitanje #7').style.display = 'none';
            break;
    }
    document.getElementById('pitanja').style.display = 'block';
}

function reset() {
    document.getElementById('pitanje #1').value = '';
    document.getElementById('pitanje #2').value = '';
    document.getElementById('pitanje #3').value = '';
    document.getElementById('pitanje #4').value = '';
    document.getElementById('pitanje #5').value = '';
    document.getElementById('pitanje #6').value = '';
    document.getElementById('pitanje #7').value = '';
}

function send() {
    document.getElementById('form').style.display = 'none';
    document.getElementById('poruka').style.display = 'block';
}

/* RESET

var pitanjaPR = ['',
    '',
    '',
    '',
    '',
    '',
    ''
]

var pitanjaCR = ['',
    '',
    '',
    '',
    '',
    '',
    ''
]

var pitanjaHR = ['',
    '',
    '',
    '',
    '',
    '',
    ''
]

var pitanjaAR = ['',
    '',
    '',
    '',
    '',
    '',
    ''
]

var pitanjaKM = ['',
    '',
    '',
    '',
    '',
    '',
    ''
]

switch (tim) {
        case 'PR': document.getElementById('pitanje#1').innerText = pitanjaPR[0];
            document.getElementById('pitanje#2').innerText = pitanjaPR[1];
            document.getElementById('pitanje#3').innerText = pitanjaPR[2];
            document.getElementById('pitanje#4').innerText = pitanjaPR[3];
            document.getElementById('pitanje#5').innerText = pitanjaPR[4];
            document.getElementById('pitanje#6').innerText = pitanjaPR[5];
            document.getElementById('pitanje#7').innerText = pitanjaPR[6];
            break;
        case 'CR': document.getElementById('pitanje#1').innerText = pitanjaCR[0];
            document.getElementById('pitanje#2').innerText = pitanjaCR[1];
            document.getElementById('pitanje#3').innerText = pitanjaCR[2];
            document.getElementById('pitanje#4').innerText = pitanjaCR[3];
            document.getElementById('pitanje#5').innerText = pitanjaCR[4];
            document.getElementById('pitanje#6').innerText = pitanjaCR[5];
            document.getElementById('pitanje#7').innerText = pitanjaCR[6];
            break;
        case 'HR': document.getElementById('pitanje#1').innerText = pitanjaHR[0];
            document.getElementById('pitanje#2').innerText = pitanjaHR[1];
            document.getElementById('pitanje#3').innerText = pitanjaHR[2];
            document.getElementById('pitanje#4').innerText = pitanjaHR[3];
            document.getElementById('pitanje#5').innerText = pitanjaHR[4];
            document.getElementById('pitanje#6').innerText = pitanjaHR[5];
            document.getElementById('pitanje#7').innerText = pitanjaHR[6];
            break;
        case 'AR': document.getElementById('pitanje#1').innerText = pitanjaAR[0];
            document.getElementById('pitanje#2').innerText = pitanjaAR[1];
            document.getElementById('pitanje#3').innerText = pitanjaAR[2];
            document.getElementById('pitanje#4').innerText = pitanjaAR[3];
            document.getElementById('pitanje#5').innerText = pitanjaAR[4];
            document.getElementById('pitanje#6').innerText = pitanjaAR[5];
            document.getElementById('pitanje#7').innerText = pitanjaAR[6];
            break;
        case 'KM': document.getElementById('pitanje#1').innerText = pitanjaKM[0];
            document.getElementById('pitanje#2').innerText = pitanjaKM[1];
            document.getElementById('pitanje#3').innerText = pitanjaKM[2];
            document.getElementById('pitanje#4').innerText = pitanjaKM[3];
            document.getElementById('pitanje#5').innerText = pitanjaKM[4];
            document.getElementById('pitanje#6').innerText = pitanjaKM[5];
            document.getElementById('pitanje#7').innerText = pitanjaKM[6];
            break;
    }

document.getElementById('pitanje#1').style.display = 'none';
document.getElementById('pitanje #1').style.display = 'none';
document.getElementById('pitanje#2').style.display = 'none';
document.getElementById('pitanje #2').style.display = 'none';
document.getElementById('pitanje#3').style.display = 'none';
document.getElementById('pitanje #3').style.display = 'none';
document.getElementById('pitanje#4').style.display = 'none';
document.getElementById('pitanje #4').style.display = 'none';
document.getElementById('pitanje#5').style.display = 'none';
document.getElementById('pitanje #5').style.display = 'none';
document.getElementById('pitanje#6').style.display = 'none';
document.getElementById('pitanje #6').style.display = 'none';
document.getElementById('pitanje#7').style.display = 'none';
document.getElementById('pitanje #7').style.display = 'none';
*/
