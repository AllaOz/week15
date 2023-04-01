const form = document.querySelector(".form__task");
const commentsDiv = document.getElementById("show__tasks");
const btnSubmit = document.getElementById("submit");
const btnDelete = document.getElementById("delete");
btnDelete.setAttribute("disabled", true);
const msgNoTask = document.getElementById("notasks-msg");

 btnSubmit.addEventListener('click', function (event) {
   event.preventDefault();
   msgNoTask.innerHTML = '';
   btnDelete.removeAttribute("disabled")
   const taskList = document.getElementById('task').value;
   const commentElem = document.createElement('div');
   commentElem.classList.add('elem');
   commentElem.innerHTML = `
   <p>${taskList}</p>`;

 const checkbox = document.createElement('INPUT');
 checkbox.setAttribute('type', 'checkbox');

 document.body.appendChild(checkbox);
 commentElem.appendChild(checkbox);
 commentsDiv.appendChild(commentElem);
 document.getElementById('task').value = '';
});

btnDelete.addEventListener('click', function (event) {
 event.preventDefault();
 commentsDiv.innerHTML = '';
 msgNoTask.innerHTML = '';
});