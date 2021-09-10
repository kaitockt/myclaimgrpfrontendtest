window.addEventListener('DOMContentLoaded', (e)=>{
    // Name Form Handler
    var submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', function(){
        var firstName = document.getElementById('firstName')
        var lastName = document.getElementById('lastName')

        var errMsg = document.getElementById('errMsg')
        if(firstName.value == "" || lastName.value == ""){
            errMsg.classList.remove('hidden')
            if(firstName.value == ""){
                firstName.className += " border-red-500"
            }
            if (lastName.value == ""){
                lastName.className += " border-red-500"
            }
        } else {
            document.getElementById('nameForm').classList.add('hidden')
            document.getElementById('signatureForm').classList.remove('hidden')
            resizeCanvas();
        }
    })

    //Signature Pad Ref. https://github.com/szimek/signature_pad
    var canvas = document.getElementById('signature');

    var signaturePad = new SignaturePad(canvas, {
        minWidth: 1,
        maxWidth: 4
    });

    function resizeCanvas() {
        var ratio =  Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
        signaturePad.clear(); // otherwise isEmpty() might return incorrect value
    }
    
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
})