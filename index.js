const btn = document.querySelectorAll(".button button");
console.log(btn[1])


for(let i of btn){
  i.addEventListener("click", function(){
    console.log(this.textContent)
  });
}




