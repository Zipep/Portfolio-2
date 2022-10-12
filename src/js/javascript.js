function myFunction(){
    
    let text = document.getElementById("nox-lumos"); 
    if(text.innerHTML == ' Nox!'){
        document.getElementById("nox-lumos").innerHTML = ' Lumos!';        
    } else if (text.innerHTML == ' Lumos!'){
        document.getElementById("nox-lumos").innerHTML = ' Nox!';
    }
    

   let page = document.body;
   page.classList.toggle("dark-mode");
}