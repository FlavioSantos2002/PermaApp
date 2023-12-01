function generateQRCode() {
    var amount = document.getElementById('amount').value;

    var qrText = "Pix no Valor de : "+ encodeURIComponent(amount);

    // Criação do QR code
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: qrText,
        width: 128,
        height: 128
    });
}

function formatarMoeda() {
    var elemento = document.getElementById('amount');
    var valor = elemento.value;

    valor = 'R$ '+valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = 'R$ '+ valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
}