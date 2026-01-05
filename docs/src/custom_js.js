function hide_all (list_of_elements){
    for (let i=0; i < list_of_elements.length; i++){
        list_of_elements[i].style.display = 'none';
    }
}

function unhide_all (list_of_elements){
    for (let i=0; i < list_of_elements.length; i++){
        list_of_elements[i].style.display = 'inline';
    }
}

function invisible_all (list_of_elements){
    for (let i=0; i < list_of_elements.length; i++){
        list_of_elements[i].style.visibility = 'hidden';
    }
}


document.addEventListener("DOMContentLoaded", () => {

    const aufgaben = document.querySelectorAll('.ltx_subsection');
    
    console.log(aufgaben);
    
    buttons_list = [];
    clicks_list = [];
    elements_list = [];
    
    for (let i = 0; i < aufgaben.length; i++) {
        console.log(aufgaben[i]);
        elements = aufgaben[i].querySelectorAll('.ltx_subsubsection');
        
        button = document.createElement('button');
        button.textContent = 'Aufgabe bearbeiten';
        button.style.cursor = 'pointer';
        button.classList.add('solution_button');
        button.classList.add('unvisited');
            
        buttons_list.push(button);
        clicks_list.push(0);
        elements_list.push(elements);
        
        hide_all(elements_list[i]);
        
        el = elements[0];
        el.parentNode.insertBefore(button, el);
        
        
        buttons_list[i].addEventListener('click', () => {
            
       
           if (clicks_list[i] == 0){
            unhide_all(elements_list[i]);
            invisible_all(elements_list[i]);
            buttons_list[i].textContent = 'Lösungsschritt anzeigen!';
            buttons_list[i].classList.remove('unvisited');
            buttons_list[i].classList.add('active');
            
            clicks_list[i] = clicks_list[i] + 1;
           
           (aufgaben[i]).scrollIntoView({ behavior: 'smooth', block: 'start' });
           }
           
           else if (clicks_list[i]> 0 && clicks_list[i] < elements_list[i].length){
              el = (elements_list[i])[clicks_list[i]-1];
              el.style.visibility = 'visible';
              clicks_list[i] = clicks_list[i] + 1;
           }
           else if (clicks_list[i] == elements_list[i].length){
            el = (elements_list[i])[clicks_list[i]-1];
              el.style.visibility = 'visible';
              clicks_list[i] = clicks_list[i] + 1;
            
            buttons_list[i].textContent = 'Lösung einklappen!';
            buttons_list[i].classList.add('done');
            buttons_list[i].classList.remove('active');
           }
           else if (clicks_list[i] == elements_list[i].length+1){
            clicks_list[i]=0;
            hide_all(elements_list[i]);
            buttons_list[i].textContent = 'Lösungsschritt anzeigen!';
            buttons_list[i].classList.remove('done');
            buttons_list[i].classList.add('active');
           }
           else{
              console.log('done');
           }
           
        });   
    }   
});


