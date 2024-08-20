

// Update Feutere
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-me")) {
        let user = prompt("Enter desired new text")
        axios.post('/update-item', { text: user, id: e.target.getAttribute("data-id") }).then(function () {
            e.target.parentElement.parentElement.querySelector(".item-text").innerHtml = user
        }).catch(function () {
            console.log("Please try again later")
        })
    }
})
