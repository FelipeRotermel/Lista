function AddElemento(){
  if (!(document.getElementById('task').value)){
    alert("Preencha a caixa");
  } else {
    
    let li = document.createElement('LI');
    let input_value = document.formulario.task.value;
    let input_text = document.createTextNode(input_value);
  
    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.formulario.task.value = "";
  
    createCloseButton(li);
  }
}

function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode(' X');
  
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = () => span.parentElement.style.display = "none";
  }

  document.querySelectorAll('li').forEach(createCloseButton);

  document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI')
      e.target.classList.toggle('checado');
  });