document.getElementById("get-activity").addEventListener("click", function() {
  const randomId = Math.floor(Math.random() * 200) + 1

  fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.title
      document.getElementById("title").textContent = "HappyBot"
      document.querySelector("main").classList.add("fun")
    })
})