function info(){

    var name = window.prompt("Enter your name: ")
    var email = window.prompt("Enter email : ")
    var phoneNumber = window.prompt("Enter phone number : ")
    var note = window.prompt("Enter a note : ")
    
    document.writeln("<p>" + name + "</p>")
    document.writeln("<p>" + email + "</p>")
    document.writeln("<p>" + phoneNumber + "</p>")
    document.writeln("<p>" + note + "</p>")

}