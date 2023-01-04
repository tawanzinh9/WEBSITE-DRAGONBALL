const nick = document.querySelector("#nickname")
const msg = document.querySelector(".msg")
const button = document.querySelector("#btn")

button.addEventListener("click", () => {
    
    let n = nick.value
    let nome = n
    
    


    if(n == "") {

       Swal.fire (
        {
            text: "Something went wrong, please try again." ,
            icon: "warning", 
            background: "black",
            color: "white",
            iconColor: "red",
            showConfirmButton: false
        }
       )

    } else {
       
        Swal.fire(
            {
                 
                html: `Sucess <span style="color:  rgb(0, 255, 0);">${nome}</span>, await...`,
                background: "black", 
                icon: "success",
                color: "rgb(255, 0, 234)",
                iconColor: "green",
                showConfirmButton: false,
                
                
            }
        )

        setTimeout(() => {
            location.href = "./main/index.html"
        }, 2500)
        
    }
    
})