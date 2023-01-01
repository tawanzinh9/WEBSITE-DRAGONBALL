const email = document.querySelector("#login")
const password = document.querySelector("#password")
const msg = document.querySelector(".msg")
const button = document.querySelector("#btn")
button.addEventListener("click", () => {
    let e = email.value 
    let p = password.value


    if(e < 3 || p < 3) {

       Swal.fire (
        {
            text: "Something went wrong, please try again." ,
            icon: "warning", 
            background: "black",
            color: "white",
            iconColor: "red"
        }
       )

    } else {
        Swal.fire(
            {
                text: "Sucess, await..." ,
                background: "black", 
                icon: "success",
                color: "#1eff00",
                iconColor: "green",
                
            }
        )
    }
})