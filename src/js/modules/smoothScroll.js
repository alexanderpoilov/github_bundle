const links = document.querySelectorAll(".smooth-link")
const form = document.getElementById("form")
for (let smoothLink of links) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault()
    form.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  })
}
