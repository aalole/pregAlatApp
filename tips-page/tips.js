const linkToClick = Array.from(document.querySelectorAll(".showbtn"));
const textToShow = Array.from(document.querySelectorAll(".para"));


const showMoreTips = () => {
    let i = 0;
    for (i = 0; i < linkToClick.length; i++) {
        textToShow.map(el => {
            linkToClick[i].addEventListener('click', () => {
                el.classList.toggle("text-hidden");
            })
        })
    }
}
showMoreTips()



//   linkToClick.addEventListener('click', () => {
//     textToShow.classList.toggle()
//   })