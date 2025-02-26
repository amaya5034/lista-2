document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("task-title").value.trim();
        const desc = document.getElementById("task-desc").value.trim();
        const date = document.getElementById("task-date").value;

        if (!title || !date) {
            alert("El título y la fecha son obligatorios.");
            return;
        }

        addTask(title, desc, date);
        taskForm.reset();
    });

    function addTask(title, desc, date) {
        const li = document.createElement("li");

        li.innerHTML = `
            <div>
                <strong>${title}</strong> - ${date}
                <p>${desc}</p>
            </div>
            <div>
                <button class="complete-btn">✔</button>
                <button class="delete-btn">✖</button>
            </div>
        `;

        li.querySelector(".complete-btn").addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.querySelector(".delete-btn").addEventListener("click", () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
    }
});
