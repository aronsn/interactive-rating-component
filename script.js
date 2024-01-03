document.querySelectorAll('.radio-button').forEach(item => {
    const input = item.querySelector('input')
    const label = item.querySelector('label')

    label.addEventListener('click', event => {
        //handle click
        input.checked = true;

    })
})