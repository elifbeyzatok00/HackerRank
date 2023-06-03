// solution 1
//const s = "javascript";
const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "j", "k", "l", "m", "n", "p", "q", "s", "t", "v", "x", "z", "h", "r", "w", "y"];

for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (s[i] === vowels[j]) {
            console.log(s[i]);
        }
    }
}

for (let i = 0; i < s.length; i++) {
    for (let k = 0; k < consonants.length; k++) {
        if (s[i] === consonants[k]) {
            console.log(s[i]);
        }
    }
}

/*  çıktı
a
a
i
j
v
s
c
r
p
t
*/