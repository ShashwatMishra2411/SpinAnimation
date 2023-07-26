let box = document.querySelector(".box")
let nc = box.childElementCount
let i = 0;
let j = 0;

const features = [
    "Social Media Content",
    "Podcasting",
    "App Development Services",
    "Informative Content",
    "Web Development Services"
  ];
  box.children[0].innerHTML = `${features[0]}`
  i++;
  j++;
function set(){

}

setInterval(()=>{
    if(j == nc){
        j = 0;
    }
    if(i == features.length){
        i = 0;
    }
    let ani;
    box.children[j].innerHTML = `${features[i]}`
    if(j == 0){
    ani = `button_spin4`
}else{
    ani = `button_spin${j}`
}
    box.classList.add(ani)
    i++;
    j+=1;
    setTimeout(()=>{
        box.classList.remove(ani)
    }, 5000)
}, 5000)