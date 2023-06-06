function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    }catch(exception) {
        console.log(exception.message);
    }finally {
        console.log(s);
    }
}
    


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}