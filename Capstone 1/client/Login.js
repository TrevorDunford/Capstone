const form = document.getElementById('form');

form.addEventListener('submit', async function(e){
    e.preventDefault();

   const formData = new FormData(form);

   console.log([...formData])

   axios.post('http://localhost:4000/api/signIn',(req, res) => {
    console.log(req)
   req.body = {
        first_name: "Andrew",
        last_name: "Westenskow",
    }
   })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})

