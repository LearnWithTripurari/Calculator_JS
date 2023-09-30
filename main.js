
// (function(){

    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {
        button.addEventListener("click", function (event) {
            console.log(event.target.innerText)
        })
    }

    console.log(buttons)


// })()
