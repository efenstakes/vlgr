
// window.addEventListener("DOMContentLoaded", ()=> {

//     const checkbox = document.getElementsByClassName('container_checkbox')[0]
//     const checkboxCheck = document.getElementsByClassName('container_checkbox__check')[0]
//     const checkText = document.getElementsByClassName('container_checkbox__check_text')[0]

//     console.log('====================================');
//     console.log("checkbox ", checkbox);
//     console.log('====================================');

//     checkbox.addEventListener('click', ()=> {

//         console.log('====================================');
//         console.log("clicked checkbox");
//         console.log('====================================');


//         const currentAlignSelf = window.getComputedStyle(checkboxCheck).alignSelf
//         const isFilterOn = (currentAlignSelf === 'flex-end') ? true : false

//         console.log('====================================');
//         console.log("checkText.textContent  ", checkText.innerText );
//         console.log('====================================');

//         // set it to opposite
//         checkboxCheck.style.alignSelf = (currentAlignSelf === 'flex-end') ? 'flex-start' : 'flex-end'
//         checkboxCheck.style.backgroundColor = (currentAlignSelf === 'flex-end') ? '#1e1e1e' : '#459451'
//         checkText.innerText = (checkText.innerText == "On") ? "Off" : "On"
//         checkText.style.color = (checkText.innerText == "Off") ? '#1e1e1e' : '#459451'

//         // if filter is enabled, disable
//         chrome.scripting.executeScript({
//             target: {
//               tabId: chrome.tabs.getCurrent()
//             },
//             func: function() {
              
//                 if( isFilterOn ) {

//                     console.log("turn off")
//                 } else {

//                     console.log("turn On")
//                 }
                
//             }
//         })
//         // chrome.runtime.sendMessage({ "update-filter": (currentAlignSelf === 'flex-end') ? "On" : "Off" })
//     }) 

// })




