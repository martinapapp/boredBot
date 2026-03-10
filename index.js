function getActivityIdea() {
  const randomId = Math.floor(Math.random() * 200) + 1

  fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("idea").textContent = data.title
      document.body.classList.add("fun")
      document.getElementById("title").textContent = "HappyBot"
    })
}

document.getElementById("get-activity").addEventListener("click", getActivityIdea)
