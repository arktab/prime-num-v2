'use strict';
(function () {

    var primeBtn = document.querySelector('.primeBtn');
    primeBtn.onclick = primeNumber;


})();
    var clearBtn = document.createElement('button');
    clearBtn.innerHTML = `<i class="fas fa-times"></i>`;
    clearBtn.classList.add("clear")
    clearBtn.onclick = clearFn;

function primeNumber() {

    var p = document.createElement("P");
    var form = document.forms.my;
    var text = '';
    var a = form.elements.one.value;
    var b = form.elements.two.value;
    var result = document.getElementById("result");



    var numbOne = 0;
    var numbTwo = 0;
    var primeList = [];
    //validation
    if (a > b) {
        numbOne = b;
        numbTwo = a;
    }
    if (a < b) {
        numbOne = a;
        numbTwo = b;
    }

    if (a == '' || '' == b || a == null || null == b) {
        text = document.createTextNode('Please Enter TWO numbers');
        p.appendChild(text);
        result.appendChild(p);
        return;
    }
    if (a == b) {
        text = document.createTextNode('Please enter non equal numbers');
        p.appendChild(text);
        result.appendChild(p);
        return;

    }

    prime:
        for (var i = numbOne; i < numbTwo; i++) {

            for (var primeNum = 2; primeNum < i; primeNum++) {
                if (i % primeNum == 0) continue prime;
            }

            if (i >= 2) {
                primeList.push(i);
            }

        }
    if (primeList != '') {
        text = document.createTextNode(`For range from ${numbOne} to ${numbTwo}\nPrime number list is:\n ${primeList}`);
        p.appendChild(text);
        result.appendChild(p);
    } else {
        text = document.createTextNode(`There is no prime number(s) between ${numbOne} and ${numbTwo}`);
        p.appendChild(text);
        result.appendChild(p);
    }

    if (result != '') {
        result.appendChild(clearBtn);
    }

}
function clearFn() {
            var resultDiv = document.getElementById("result");
            resultDiv.innerHTML = '';
        }


















