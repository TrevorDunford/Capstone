const form = document.getElementById('form');

form.addEventListener('submit', async function(e){
    e.preventDefault();

   const formData = new FormData(form);

   console.log([...formData])

   axios.post('https://httpbin.org/post',formData)
    .then(res => console.log(res))
    .catch(err => console.log(err))
})
