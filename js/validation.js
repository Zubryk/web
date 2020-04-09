function validation() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (name == "" || name == " ") {
        return alert("Enter name!");
    }

    for (var i = 0; i < name.length; i++) {
        if (name[i] == 0 || name[i] == 1 || name[i] == 2 || name[i] == 3 || name[i] == 4 || name[i] == 5 ||
            name[i] == 6 || name[i] == 7 || name[i] == 8 || name[i] == 9) {
            return alert("Name is incorect!");
        }
    }

    if (email == "" || email == " ") {
        return alert("Enter email!");
    }
    if (subject == "" || subject == " ") {
        return alert("Enter subject!");
    }
    if (message == "" || message == " ") {
        return alert("Enter message!");
    }
    alert("Sent!");
}