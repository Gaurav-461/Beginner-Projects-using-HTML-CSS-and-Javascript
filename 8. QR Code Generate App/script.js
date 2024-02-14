let imgBox = document.querySelector("#imageBox");
let qrImage = document.querySelector("#qrImage");
let qrText = document.querySelector("#qrText");
let error = document.querySelector("#error");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
} else {
    qrText.classList.add("error");
    
    setTimeout(() => {
        qrText.classList.remove("error");
    }, 500);
  }
}

