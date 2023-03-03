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

function gcd(a,b){
    if(b == 0){
        return a;
    }
    return gcd(b,a%b);
}
function inverse(x){
    for(let i=0;i<27;i++){
        let value = i*x;
        if(value % 27 == 1){
            return i;
        }
    }
}
function decipher(s,a,b){
    let ans = "";
    let n = s.length;
    s = s.toLowerCase();
    a = parseInt(a);
    b = parseInt(b);

    if(gcd(a,27) != 1){
        return "Impossible to Decipher";
    }

    for(let i = 0;i < n;i++){
        if(s[i] == ' '){
            ans += s[i];
            continue;
        }
        let value = find_int(s[i]);
        value = (value - b + 27)%27;
        value = (value * inverse(a))%27;
        let my_char = find_char(value);
        ans += my_char.toString();
    }
    return ans;
}
function show_answer() {
    let a = document.getElementById("key_a").value;
    let b = document.getElementById("key_b").value;
    let text = document.getElementById("text").value.toString();
    document.getElementById('cipher').value = cipher(text,a,b);
}
function show_answer1(){
    let a = document.getElementById("key_a_des").value;
    let b = document.getElementById("key_b_des").value;
    let text = document.getElementById("text_des").value.toString();
    document.getElementById('decipher').value = decipher(text,a,b);
    if(decipher(text,a,b) == "Impossible to Decipher"){
        document.getElementById("decipher").style.color="red";
    }
    else {
        document.getElementById("decipher").style.color="black";
    }

}

function handler_submit( event ){
    event.preventDefault();
}
function display_cipher(){
    let option_cipher = document.getElementById("option1");
    let option_decipher = document.getElementById("option2");

    option_cipher.style.backgroundColor = "white";
    option_decipher.style.backgroundColor = "#ccc";

    let for_cipher = document.getElementById("for_cipher");
    let for_decipher = document.getElementById("for_decipher");

    for_decipher.style.display = "none";
    for_cipher.style.display = "contents";

}

function display_decipher(){
    let option_cipher = document.getElementById("option1");
    let option_decipher = document.getElementById("option2");

    option_cipher.style.backgroundColor = "#ccc";
    option_decipher.style.backgroundColor = "white";

    let for_cipher = document.getElementById("for_cipher");
    let for_decipher = document.getElementById("for_decipher");

    for_decipher.style.display = "contents";
    for_cipher.style.display = "none";

}
