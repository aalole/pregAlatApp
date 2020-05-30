function handleSubmit() {
    //sample user
    const email = 'johndoe@mailinator.com';
    const password = 'johndoe';
    let user = document.getElementById('email').value
    let pass = document.getElementById('password').value
    if (email == user && password == pass) {
        // window.location = 'index.html';
        setTimeout(()=>{
            alert("Log in successful")
            window.location.assign("../dashboard/dashboard.html")
        }, 300);
    } else if (user == "") {
        document.getElementById('errorUser').classList.remove('hide')
        document.getElementById('email').classList.add('errborder')

    } else if (pass == "") {
        document.getElementById('errorPass').classList.remove('hide')
        document.getElementById('password').classList.add('errborder')
    } else {
        document.getElementById('error').classList.remove('hide')
    }
}

function errhandling() {
    document.getElementById('errorUser').classList.add('hide')
    document.getElementById('errorPass').classList.add('hide')
    document.getElementById('error').classList.add('hide')
    document.getElementById('email').classList.remove('errborder')
    document.getElementById('password').classList.remove('errborder')
}