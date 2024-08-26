let navbarscrolling =  document.querySelector(".navbar")
window.addEventListener("scroll",()=>{
    if(window.scrollY >= 0){
        navbarscrolling.style.backgroundColor= "black"

    }
    else{
        navbarscrolling.style.backgroundColor = "black"
    }
})
// document.addEventListener('DOMContentLoaded', function() {
//     const filterButtons = document.querySelectorAll('.filter-btn');
//     const projectItems = document.querySelectorAll('.project-item');

//     filterButtons.forEach(button => {
//         button.addEventListener('click', () => {
//             const filter = button.getAttribute('data-filter');

//             projectItems.forEach(item => {
//                 if (filter === 'all') {
//                     item.classList.add('show');
//                 } else if (item.classList.contains(filter)) {
//                     item.classList.add('show');
//                 } else {
//                     item.classList.remove('show');
//                 }
//             });
//         });
//     });

  
// });

//page animation
function applyAnimationOnVisible(elementSelector, animationClass) {
    window.addEventListener("scroll", () => {
        document.querySelectorAll(elementSelector).forEach((element) => {
            let rect = element.getBoundingClientRect();
            let isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible) {
                element.classList.add(animationClass);
            }
        });
    });
}

// Apply the animation to the specific elements
applyAnimationOnVisible(".about .large-text", "animationtext");
applyAnimationOnVisible(".skill-container .large-text", "animationtext");
applyAnimationOnVisible(".project-container .large-text", "animationtext");
applyAnimationOnVisible(".contact-container .large-text", "animationtext");

applyAnimationOnVisible(".contact-container .large-text","animationtext")

// view more btn
const viewMore = document.querySelector(".view-more-btn")
const displayBlockProject = document.querySelectorAll(".second-half-project")
viewMore.addEventListener("click",function(){
    displayBlockProject.forEach((project)=>{
        project.classList.remove("second-half-project")
    })
    viewMore.style.display = "none"
})
