document.addEventListener('DOMContentLoader', () => {
    document.getElementById('data-editor-1').addEventListener('submit', handleForm);
});

function handleForm(ev) {
    ev.preventDefault();
    console.log(ev.target);
    //let myForm = ev.target;
}