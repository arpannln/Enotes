
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if( request.message === "clicked_browser_action" ) {
//       var firstHref = $("a[href^='http']").eq(0).attr("href");
//
//       console.log(firstHref);
//
//       // This line is new!
//       chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstHref});
//     }
//   }
// );

let body = document.querySelector('body');
console.log(body);
var child = document.createElement('div');
let modalStyles = `position: fixed;
                  display: flex;
                  width: 100px;
                  height: 100px;
                  z-index: 1000000;
                  top: 0;
                  left: 0;
                  background-color: red;`
child.style = modalStyles;
body.insertAdjacentElement('afterbegin', child);
console.log(child);
window.addEventListener('mouseup', getSelectionText);
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    console.log(text);
    return text;
}
