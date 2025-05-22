// Tab menu
let menu = document.querySelector(".propertyOptions");
let items = menu.querySelectorAll(".item");
let propertyContent = document.querySelectorAll('.propertyContent');

propertyContent.forEach(element =>{
    if (element.classList.contains('tabActive')) {
        element.style.display = "flex";
    }else{
        element.style.display = "none";
    }
})

items.forEach((element, place) => {
    element.addEventListener('click', () => {

        items.forEach(item => {
            item.classList.remove('active');
        });

        element.classList.add('active');

        propertyContent.forEach((content, index) => {
            if (place === index) {
                content.style.display = 'flex';
            } else {
                content.style.display = 'none';
            }
        });
    });
});