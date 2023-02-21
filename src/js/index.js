const add_btn = document.querySelector('#btn--add');
const remove_btn = document.querySelector('#btn--remove');
const list_wrap = document.querySelector("#list--wrapper");
const text_input = document.querySelector("#text--input");
var id = 0;

add_btn.addEventListener('click', (event) => {
    const card_container = document.createElement('div');
    const card_title = document.createElement('h1');
    const card_text = document.createElement('p');
    const card_del = document.createElement('button');

    card_title.innerText = (text_input !== null) ? text_input.value : "Temp Title";
    card_text.innerText = "Some random text to get things going";
    card_del.innerText = "Delete";

    card_container.append(card_title);
    card_container.append(card_text);
    card_container.append(card_del);

    list_wrap.append(card_container);

    card_container.setAttribute('class', 'bg-orange-200 text-center');

    document.querySelector('#text--input').select();
});

remove_btn.addEventListener('click', (event) => {
    alert('Im removing');
});

function deleteHandler(e) {
    console.log(e.parentElement.remove());
}