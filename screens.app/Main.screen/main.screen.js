document.getElementById("ArrowDown").addEventListener("click", function() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else this.classList.add("active");
});
document.getElementById("InfoBoxShow").addEventListener("click", function() {
    if (this.classList.contains("InfoBoxAnimation")) {
      this.classList.remove("InfoBoxAnimation");
    } else this.classList.add("InfoBoxAnimation");
    document.getElementById('InfoBox').style.animation = 'infoboxanim 0.7s linear both';
});
document.getElementById("NotifyAction").addEventListener("click", function() {
    if (this.classList.contains("buttonActive1")) {
      document.getElementById('NotifyBox').style.display = 'none';
      this.classList.remove("buttonActive1");
    } else this.classList.add("buttonActive1");
    document.getElementById('NotifyBox').style.display = 'flex';
});
document.getElementById("FolderBox").addEventListener("click", function() {
    if (this.classList.contains("SelectedFolder")) {
      this.classList.remove("SelectedFolder");
    } else this.classList.add("SelectedFolder");
});
mainWindow.webContents.on('new-window',function(e, url){
  e.preventDefault();
  require('electron').shell.openExternal(url);
  mainWindow.removeMenu();
});


// Side Menu control
function ShowSideMenu() {
  document.getElementById('SideMenu').style.left = '0px';
  document.getElementById('ViewBlock').style.display = "flex";
}
function HideSideMenu() {
  document.getElementById('SideMenu').style.left = '-220px';
  document.getElementById('ViewBlock').style.display = "none";
}