const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveal.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
});
const imgs = document.querySelectorAll(".cursor-light");

imgs.forEach((img)=>{
    img.addEventListener("mousemove", (e)=>{

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        img.style.filter = "brightness(1)";

        img.style.background = `
        radial-gradient(circle 20px at ${x}px ${y}px,
        rgba(255,255,255,0.6),
        rgba(0,0,0,0.8) 120px)
        `;
    });

    img.addEventListener("mouseleave", ()=>{
        img.style.background = "none";
        img.style.filter = "brightness(0.4)";
    });
});
const card = document.querySelector(".flip-card");

card.addEventListener("click", () => {
    card.classList.toggle("active");
}); 

    