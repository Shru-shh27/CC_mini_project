#include <bits/stdc++.h>
using namespace std;

// GCD (Euclidean Algorithm)
int gcd(int a, int b) {
    a = abs(a);
    b = abs(b);

    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

//  LCM
int lcm(int a, int b) {
    return (abs(a * b)) / gcd(a, b);
}

//  Prime Check
bool isPrime(int n) {
    if (n < 2) return false;

    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

//  Modular Addition
int modAdd(int a, int b, int m) {
    return ((a % m) + (b % m)) % m;
}

//  Modular Multiplication
int modMul(int a, int b, int m) {
    return ((a % m) * (b % m)) % m;
}

//  Fast Exponentiation (Binary Exponentiation)
long long modPow(long long a, long long b, long long m) {
    long long res = 1;
    a = a % m;

    while (b > 0) {
        if (b % 2 == 1)
            res = (res * a) % m;

        a = (a * a) % m;
        b /= 2;
    }
    return res;
}


int main() {
    int a, b, m;

    cout << "Enter two numbers: ";
    cin >> a >> b;

    cout << "GCD: " << gcd(a, b) << endl;
    cout << "LCM: " << lcm(a, b) << endl;

    cout << "\nEnter number to check prime: ";
    int n;
    cin >> n;

    if (isPrime(n))
        cout << "Prime\n";
    else
        cout << "Not Prime\n";

    cout << "\nEnter a, b, mod: ";
    cin >> a >> b >> m;

    cout << "Mod Add: " << modAdd(a, b, m) << endl;
    cout << "Mod Mul: " << modMul(a, b, m) << endl;
    cout << "Mod Power: " << modPow(a, b, m) << endl;

    return 0;
}