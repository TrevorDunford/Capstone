const FactBtn = document.getElementById("factButton")

const getFact = () => {
    axios.get("http://localhost:4000/api/fact/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

FactBtn.addEventListener('click', getFact)