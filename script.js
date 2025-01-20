let silteme = ('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/questions')
let cuerrentIndex = 0

let kelesBtn = document.querySelector('.next-btn')

async function YernarDate(){
    try{
        let response = await fetch(silteme)

        if(!response.ok){
            throw new error("Деректерді алу мүмкін болмады!")
        }

        let data = await response.json()

        return data
    }catch(err){
        console.error(err.message);
    }
}

// timer
let text = document.querySelector('.timer')

let sanaq = 15;
let intreval = setInterval(() => {
    text.textContent = sanaq;
    sanaq--;
    if(sanaq < 0){
        text.textContent = "loser🫵😂"
        clearInterval(intreval)
    }
}, 1000)


function jauapTekseru(jauapIndex){
    kelesBtn.classList.remove('hiden')

    console.log("Сіз тандаған индекс", jauapIndex);
    
}


async function showQuestions(){
    let aqparattar = await YernarDate()


    let syraq = document.querySelector('.text')
    let btns = document.querySelectorAll('.answer-button')
    console.log(aqparattar);

    console.log(btns);


    btns.forEach((button, index) => {
        // console.log(Button);
        // console.log(aqparattar[cuerrentIndex].options[index]);
        button.textContent = aqparattar[cuerrentIndex].options[index]
    });
    
    syraq.textContent = aqparattar[cuerrentIndex].question

}
showQuestions()