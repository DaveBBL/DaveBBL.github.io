const buttons = document.getElementsByTagName("button");

const buttonPressed = e => {
  const eName = e.target.getAttribute('name');
  const newSection = document.getElementById(eName);
  const sectionCollection = document.getElementsByTagName("section");
  for(let section of sectionCollection) {
    section.style.display = "none";
  }
  newSection.style.display = "block";

}

for(let button of buttons) {
  button.addEventListener("click",buttonPressed);
}