let doc = document

let diplom = doc.querySelector(".Diplom")
let Work = doc.querySelector(".Work")
let Diplom_modalka = doc.querySelector(".modalka_diplom")
let work_modalka = doc.querySelector(".modalka_work")
let img_pachka = doc.querySelectorAll(".imgg")
let i_pachke = doc.querySelectorAll(".i")

diplom.addEventListener('click', () => {
    Diplom_modalka.classList.toggle('modalka_diplom_active')
    for (let item of img_pachka) {
        item.classList.toggle("img_active")
        console.log(item);
    }
})

Work.addEventListener('click', () => {
    work_modalka.classList.toggle('work_modalka_active')
    for (let item of i_pachke) {
        item.classList.toggle("i_active")
        console.log(item);
    }
})

console.log(diplom);
console.log(Work);

