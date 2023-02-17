// Your code here


  let enterTrigg = document.querySelector("#addToDo");
  
  
  enterTrigg.addEventListener("keydown", (e) => {
    if(e.key==='Enter' && e.keyCode===13)
    {
      let listItem = document.createElement("li");
      listItem.innerHTML = `<span><i class="fa fa-trash"></i></span>${e.target.value}`;
  
      listItem.querySelector('i').addEventListener("click", (e) => {
        let granP = listItem.querySelector('i').parentNode.parentNode;
        document.querySelector("ul").removeChild(granP);
      });

      document.querySelector("ul").appendChild(listItem);

    }
    
  });


  let deleteTrigg = document.querySelectorAll("i");

  deleteTrigg.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      let granP = icon.parentNode.parentNode;
      document.querySelector("ul").removeChild(granP);
    });
  });





  
