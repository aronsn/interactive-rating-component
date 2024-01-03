const addClickEventsToButtons = () => {
    // fetch all radio buttons
    document.querySelectorAll('.radio-button').forEach(item => {
        const input = item.querySelector('input')
        const label = item.querySelector('label')

        // add a click event listener
        label.addEventListener('click', event => {
            // handle click
            input.checked = true;

        })
    })
}

const retrieveAnswerValue = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const myParam = queryParams.get('answer');
    return myParam;
}

const appendToElement = () => {
    const target = document.getElementById('target-element');
    const value = retrieveAnswerValue();
    target.innerHTML = value;
}
