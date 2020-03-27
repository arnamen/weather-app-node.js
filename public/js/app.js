console.log('Client side javascript file is loaded!')

const form = document.forms[0];

const btn_search = document.getElementById('btn_search');
btn_search.addEventListener('click',(e) => {
    e.preventDefault();
    const location = form.elements.input_location.value;
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
            document.querySelector('.forecast-data').innerHTML = data.location + '<br>' + data.forecast;
        }
    })
})
});





