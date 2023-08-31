// const sing = async () => {
//     throw "this an error"
//     return "ho ho hooo!";

// }

// sing()
//     .then((data) => {
//         console.log("this is my song: ", data)
//     })
//     .catch(err => {
//         console.log("didn't love this error", err)
//     })

// fetch("https://swapi.dev/api/people/1")
//     .then((res) => {
//         console.log("resolved", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })

//     .catch((err) => {
//         console.log("this is an error!: ", err);
//     });

// const getperson = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (e) {
//         console.log("error!", e)
//     }

// };

// getperson(13);



const button = document.querySelector("#btn-1");

const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } };
    const res = await axios.get(`https://icanhazdadjoke.com/`, config);
    return res.data.joke;

}

const addNewJoke = async () => {
    const textJoke = await getDadJoke()
    const jokes = document.querySelector("#jokes");
    const newLi = document.createElement("LI");
    newLi.append(textJoke);
    jokes.append(newLi);
}

button.addEventListener("click", addNewJoke);

const form = document.querySelector("#formi");
form.addEventListener('submit', async function (x) {
    x.preventDefault();
    console.log("submited");
    const inputData = form.elements.query.value;
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${inputData}`);
    makeList(result.data);

})

const makeList = (show) => {
    for (let i of show) {
        if (i.show.image) {
            const img = document.createElement("img");
            img.src = i.show.image.medium;
            document.body.append(img);
        }
    }

}

