let cursor = document.getElementById("cursor");

const onMouseMove = (event) => {
    cursor.style.left = event.pageX + "px";
    cursor.style.top = event.pageY + "px";

    let cursorType = "";
    if (event.target.hasAttribute("cursor-type")) {
        cursorType = event.target.getAttribute("cursor-type");
    }

    cursor.className = cursorType;
};

const containers = document.querySelectorAll('.about-us, .projects, .services-initiative, .contacts');
containers.forEach(container => {
    const button = container.querySelector(".hover-link");
    button.addEventListener("mousemove", onMouseMove);
    button.addEventListener("mouseleave", () => {
        cursor.className = "";
    });
});