const input = document.querySelector('#input');
const inputTitle = document.querySelector('#input-title');
const board = document.querySelector('#board');
const save = document.querySelector('button');
const div = document.querySelector('user-note-edit');
const userNotes = document.querySelector('#user-notes');
let text = '';
let textTitle = '';

input.addEventListener('input', (e)=>{
  text = e.target.value;
  
  board.innerText = text;
});

inputTitle.addEventListener('input', (e)=>{
  textTitle = e.target.value;
});

save.addEventListener('click', ()=>{
  let notes = document.createElement('div');
  notes.setAttribute('class', 'note-tem');
  let title = document.createElement('h2');
  let value = document.createElement('p');
  
  if(text == '') return;
  
  title.innerText = textTitle + ' : ';
  value.innerText = text;
  notes.append(title);
  notes.append(value)
  userNotes.append(notes);
  textTitle = '';
  text = '';
  board.innerText = 'Enter the value inside the input to show text here. ';
  input.value = text;
  inputTitle.value = textTitle;
})

