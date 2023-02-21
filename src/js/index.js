const add_btn = document.querySelector('#btn--add');
const remove_btn = document.querySelector('#btn--remove');
const list_wrap = document.querySelector("#list--wrapper");
const text_input = document.querySelector("#text--input");
var id = 0;

add_btn.addEventListener('click', (event) => {
    list_wrap.innerHTML +=
        `<div class="bg-orange-200 h-[200px] border border-black p-4">
            <h1 class="text-blue-600 font-bold">`+ text_input.value + `</h1>    
            <p font-md>Item can be found somewhere is this world</p>
            <button onclick="deleteHandler(this)" class="mt-10 border rounded-lg bg-white md:hover:bg-gray-300 md:duration:200 px-2" id="del-`+ id + `">Delete</button>
        </div>`;
    console.log(list_wrap);

    ++id;
    document.querySelector('#text--input').select();
});

remove_btn.addEventListener('click', (event) => {
    alert('Im removing');
});

function deleteHandler(e) {
    console.log(e.parentElement.remove());
}