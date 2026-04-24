
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    if (a === 0) return b;
    if (b === 0) return a;

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calcGCD() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    document.getElementById("lcmResult").innerText = "";

    if (a === "" || b === "") {
        document.getElementById("gcdResult").innerText = "Enter both numbers!";
        return;
    }

    a = parseInt(a);
    b = parseInt(b);

    document.getElementById("gcdResult").innerText = "GCD: " + gcd(a, b);
}

function calcLCM() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    document.getElementById("gcdResult").innerText = "";

    if (a === "" || b === "") {
        document.getElementById("lcmResult").innerText = "Enter both numbers!";
        return;
    }

    a = parseInt(a);
    b = parseInt(b);

    let result = (Math.abs(a * b)) / gcd(a, b);
    document.getElementById("lcmResult").innerText = "LCM: " + result;
}


function checkPrime() {
    let n = parseInt(document.getElementById("primeInput").value);

    if (isNaN(n) || n < 2) {
        document.getElementById("primeResult").innerText = "Not Prime";
        return;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            document.getElementById("primeResult").innerText = "Not Prime";
            return;
        }
    }

    document.getElementById("primeResult").innerText = "Prime";
}


function modAdd() {
    let a = parseInt(document.getElementById("x").value);
    let b = parseInt(document.getElementById("y").value);
    let m = parseInt(document.getElementById("mod").value);

    if (isNaN(a) || isNaN(b) || isNaN(m)) {
        document.getElementById("modResult").innerText = "Enter valid inputs!";
        return;
    }

    document.getElementById("modResult").innerText = "Result: " + ((a + b) % m);
}


function modMul() {
    let a = parseInt(document.getElementById("x").value);
    let b = parseInt(document.getElementById("y").value);
    let m = parseInt(document.getElementById("mod").value);

    if (isNaN(a) || isNaN(b) || isNaN(m)) {
        document.getElementById("modResult").innerText = "Enter valid inputs!";
        return;
    }

    document.getElementById("modResult").innerText = "Result: " + ((a * b) % m);
}


function modPow() {
    let a = parseInt(document.getElementById("x").value);
    let b = parseInt(document.getElementById("y").value);
    let m = parseInt(document.getElementById("mod").value);

    if (isNaN(a) || isNaN(b) || isNaN(m)) {
        document.getElementById("modResult").innerText = "Enter valid inputs!";
        return;
    }

    let res = 1;
    a = a % m;

    while (b > 0) {
        if (b % 2 === 1) res = (res * a) % m;
        a = (a * a) % m;
        b = Math.floor(b / 2);
    }

    document.getElementById("modResult").innerText = "Result: " + res;
} 