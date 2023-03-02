function find_int(x) {
    var abc = 'abcdefghijklmnñopqrstuvwxyz';
    var n = abc.length;

    for (var i = 0; i < n; i++) {
        if (abc[i] == x) {
            return i;
        }
    }
}
function find_char(i) {
    var abc = 'abcdefghijklmnñopqrstuvwxyz';
    return abc[i];
}

function cipher(s, a, b) {
    var ans = "";
    var n = s.length;
    s = s.toLowerCase();
    a = parseInt(a);
    b = parseInt(b);

    for (var i = 0; i < n; i++) {
        var value = find_int(s[i]);
        value = ((value * a) + b) % 27;
        var my_char = find_char(value);
        ans = ans + my_char.toString();
    }
    return ans;
}
function show_answer() {
    var a = document.getElementById("key_a").value;
    var b = document.getElementById("key_b").value;
    var text = document.getElementById("text").value.toString();
    document.getElementById('cipher').value = cipher(text,a,b);
}

function handler_submit( event ){
    event.preventDefault();
}