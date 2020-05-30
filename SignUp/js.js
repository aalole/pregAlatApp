// handle submit
function handleSubmit() {
    let firstname = document.getElementById('firstname').value
    let lastname = document.getElementById('lastname').value
    let pass = document.getElementById('password').value
    let email = document.getElementById('email').value
    let pass2 = document.getElementById('password2').value
    // validation
    if (firstname.length < 3) {
        document.getElementById('errorFirst').classList.remove('hide')
        document.getElementById('firstname').classList.add('errborder')

    } else if (lastname.length < 3) {

        document.getElementById('errorLast').classList.remove('hide')
        document.getElementById('lastname').classList.add('errborder')

    } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)) {
        document.getElementById('errorEmail').classList.remove('hide')
        document.getElementById('email').classList.add('errborder')

    }
    //  else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(pass)){
    else if (pass.length < 6) {

        document.getElementById('errorPass').classList.remove('hide')
        document.getElementById('password').classList.add('errborder')

    } else if (pass !== pass2) {
        document.getElementById('errorPass2').classList.remove('hide')
        document.getElementById('password2').classList.add('errborder')

    } else {
        setTimeout(() => {
            alert("COngrats!! You have successfully signed up")
            window.location.assign("../dashboard/dashboard.html")
        }, 300);
    }

}
// Error handling
function errhandling() {
    document.getElementById('errorFirst').classList.add('hide')
    document.getElementById('errorLast').classList.add('hide')
    document.getElementById('errorPass').classList.add('hide')
    document.getElementById('errorPass2').classList.add('hide')
    document.getElementById('errorEmail').classList.add('hide')
    document.getElementById('error').classList.add('hide')
    document.getElementById('firstname').classList.remove('errborder')
    document.getElementById('lastname').classList.remove('errborder')
    document.getElementById('email').classList.remove('errborder')
    document.getElementById('password').classList.remove('errborder')
    document.getElementById('password2').classList.remove('errborder')


}