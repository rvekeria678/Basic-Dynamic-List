const add_btn = document.querySelector('#btn--add');
const remove_btn = document.querySelector('#btn--remove');
const list_wrap = document.querySelector("#list--wrapper");
const text_input = document.querySelector("#text--input");
var id = 0;

add_btn.addEventListener('click', (event) => {
    const new_card = createCard(text_input.value);
    list_wrap.append(new_card);
    document.querySelector('#text--input').select();
});

remove_btn.addEventListener('click', (event) => {
    alert('Im removing');
});

createCard = function (title) {
    let card_container = document.createElement('div');
    let card_title = document.createElement('h1');
    let card_text = document.createElement('p');
    let card_del = document.createElement('button');

    card_title.innerText = (title !== '') ? title : "Temp Title";
    card_text.innerText = "Some random text to get things going";
    card_del.innerText = "Delete";

    card_container.append(card_title);
    card_container.append(card_text);
    card_container.append(card_del);

    card_container.setAttribute('class', 'border-4 border-black p-5 bg-orange-300');
    card_title.setAttribute('class', 'font-bold text-2xl text-blue-600');
    card_text.setAttribute('class', 'font-thin');
    card_del.setAttribute('class', 'border border-black p-1 px-2 rounded-xl mt-4 md:hover:bg-orange-600 md:duration-200');
    card_del.setAttribute('id', 'btnid-' + id);
    card_del.setAttribute('onclick', 'delete_handler(this)');

    ++id;
    return card_container;
}

delete_handler = function (e) {
    e.parentElement.remove();
}