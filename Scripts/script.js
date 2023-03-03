function find_int(x) {
    let abc = 'abcdefghijklmnñopqrstuvwxyz';
    let n = abc.length;

    for (let i = 0; i < n; i++) {
        if (abc[i] == x) {
            return i;
        }
    }
}
function find_char(i) {
    let abc = 'abcdefghijklmnñopqrstuvwxyz';
    return abc[i];
}

function cipher(s, a, b) {
    let ans = "";
    let n = s.length;
    s = s.toLowerCase();
    a = parseInt(a);
    b = parseInt(b);

    for (let i = 0; i < n; i++) {
        if(s[i] == ' '){
            ans += s[i];
            continue;
        }
        let value = find_int(s[i]);
        value = ((value * a) + b) % 27;
        let my_char = find_char(value);
        ans = ans + my_char.toString();
    }
    return ans;
}
function show_answer() {
    let a = document.getElementById("key_a").value;
    let b = document.getElementById("key_b").value;
    let text = document.getElementById("text").value.toString();
    document.getElementById('cipher').value = cipher(text,a,b);
}

function handler_submit( event ){
    event.preventDefault();
}