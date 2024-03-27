// tabs-1
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openPage(pageName,element,color) {
  var i,tabcontent,tablinks;
  tabcontent=document.getElementsByClassName("tabcontent");
  for(i=0;i<tabcontent.length;i++) {
    tabcontent[i].style.display="none";
  }
  tablinks=document.getElementsByClassName("tablink");
  for(i=0;i<tablinks.length;i++) {
    tablinks[i].style.backgroundColor="";
  }
  document.getElementById(pageName).style.display="block";
  element.style.backgroundColor=color;
}


// tabs-2
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})