window.onload = function(){
    
    const emailExp = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
    function subcribeAction(e){
        e.preventDefault();
        let emailInput = document.getElementById("email").value;
        console.log(emailExp.test(emailInput));
        console.log(emailInput);
        if ( emailInput == ""   ||  !emailInput.match(emailExp)){
            document.querySelector(".message").innerHTML = "Please enter a valid email address."; 
        }
        else {
            document.querySelector(".message").innerHTML = `Thank you! Your email address ${emailInput} has been added to our mailing list!`;
        }
    }
    
    var submitButton = document.querySelector("button");
    submitButton.addEventListener("click", subcribeAction);
}