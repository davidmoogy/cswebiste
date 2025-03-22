document.addEventListener("DOMContentLoaded", function () {
    let profile = document.querySelector(".profile"); 
    let dropdown = document.querySelector(".dropdown-menu"); 
    let isDropdownVisible = false; 

    
    dropdown.style.display = "none";

   
    function toggleDropdown() {
        
        if (isDropdownVisible) {
            dropdown.style.display = "none"; 
        } else {
            dropdown.style.display = "block"; 
        }
        isDropdownVisible = !isDropdownVisible; 
    }

    
    profile.addEventListener("click", function (event) {
        
        event.stopPropagation();
        
        if (!isDropdownVisible) {
            toggleDropdown();
        }
    });

    
    document.addEventListener("click", function (event) {
        
        if (!profile.contains(event.target) && !dropdown.contains(event.target) && isDropdownVisible) {
            dropdown.style.display = "none"; 
            isDropdownVisible = false; 
        }
    });

    
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && isDropdownVisible) {
            dropdown.style.display = "none";
            isDropdownVisible = false;
        }
    });
});
