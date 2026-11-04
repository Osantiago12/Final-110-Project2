let error = document.getElementById("error")
let errorIn = document.getElementById("errorIn")
let success = document.getElementById("success")
let one = document.querySelector('.signUp')
let two = document.querySelector('.signIn')


let data = new Map()

function SignUp() {
    const user = document.getElementById("username").value
    const pass = document.getElementById("password").value

    if (pass.length < 6) {
        error.innerHTML = 'Password is too short... Please type a valid password.' // maybe get the text to fade out when it appears.
    } else if (pass.includes(' ')) {
        error.innerHTML = 'Password contains a space... Please type a valid password.'
    } else if (pass === pass.toLowerCase()) {
        error.innerHTML = 'Password does not contain an uppercase letter... Please type a valid password.'
    } else if (user.length <= 3) {
        error.innerHTML = 'Username is too short... Please type a valid username.'
    } else {
        data.set(user, pass)
        console.log(data)
        error.innerHTML = ''
        success.innerHTML = 'Account created!'
    }
}

function SignIn() {
    const user = document.getElementById("usernameIn").value
    const pass = document.getElementById("passwordIn").value

    if (user.length == 0 || pass.length == 0) {
        errorIn.innerHTML = 'Username or Password does not contain any characters... Please type something in.'
    } else if (!data.has(user) || data.get(user) !== pass) {
        errorIn.innerHTML = 'Username or Password is incorrect... Please type a valid User and Password.'
    } else {
        errorIn.innerHTML = ""
        window.location.href = "welcome.htm"
    }
}

function switchIn() {
    one.classList.toggle('hide')
    two.classList.toggle('show')
}

function switchUp() {
    one.classList.toggle('hide')
    two.classList.toggle('show')
}