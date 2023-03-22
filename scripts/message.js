function Enviar() {
    let email = document.getElementById("email")
    let subject = document.getElementById("subject")
    let message = document.getElementById("message")
    if (email.value != "" && subject.value != "") {
        let sendBtn = document.querySelector('.send')
        sendBtn.value = 'Obrigado!!'
        email.value = ''
        subject.value = ''
        message.value = ''
    }else{
        alert('Os campos:Email e Assunto são obrigatórios')
    }
}
