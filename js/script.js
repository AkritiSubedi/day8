console.log("hello");
var fname = document.getElementById('name')
var addr = document.getElementById('addr')
var email = document.getElementById('email')
var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var btn = document.getElementById('btn')
var invalid = document.getElementById('invalid')


btn.addEventListener("click", display)
// window.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
//     // alert('right click')
// })
function display() {



    for (let a = 1; a <= 3; a++) {
        console.log(a);
    }

    console.log('out from loop ' + a);



    // console.log(fname);
    // if (fname.value.length < 3 || fname.value.length > 9 || fname.value.length <= 0) {
    //     // alert('invalid name')
    //     invalid.innerText = 'invalid'
    //     console.log(invalid);
    // }
    // else {

    //     invalid.innerHTML = 'its all ok'
    //     alert(fname.value +
    //         addr.value +
    //         email.value +
    //         num1.value)
    // }
    // if (invalid.innerText == 'invalid') {
    //     invalid.style.color = 'red'
    // }
    // else {
    //     invalid.style.color = 'green'

    // }

    // if (num1 > num2) {
    //     alert('num1 s greater')
    // }
    // else {
    //     alert('num2 s greater')

    // }
    //     invalid.style.color = 'red'
    // invalid.innerText == 'invalid' ? invalid.style.color = 'red' : invalid.style.color = 'green'
    // num1.value > num2.value ? alert('num1 is great') : alert('num2 is great')
    // num1.value > num2.value && alert(num1.value)


}

