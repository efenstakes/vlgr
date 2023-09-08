

// vulgar words that we want to block from sites
const vulgarWords = [
    "fuck",
    "Check if the 11 first characters of a string ends with",
    "Doe",
    "JavaScript",
]


// given a sentence, check if it has vulgar words 
// if it has vulgar words  return true, false otherwise
const checkIfSentenceContainsVulgars = (sentence)=> {
    let hasVulgar = false
    
    for ( vulgarWord of vulgarWords ) {
        // const wordToCheck = "Check if the 11 first characters of a string ends with";
    
        const regex = new RegExp("\\b" + vulgarWord + "\\b", "i");
        const isContained = regex.test(sentence);
        
        console.log("sentence ", sentence, " contains ", vulgarWord, " ", isContained); // true
        
        if( isContained ) {
            hasVulgar = true
            break
        }
    }

    return hasVulgar
}



// blacks out vulgar words in a node
function blackoutAllVulgars(element) {
    console.log("blackoutAllVulgars :::: textContent ", element.innerHTML, " element ", element)

    vulgarWords.forEach((vulgarWord)=> {

        const highlightedText = element.textContent.replace(new RegExp(`\\b${vulgarWord}\\b`, 'gi'), `<span class='vlgr_hidden'>$&</span>`);
        element.innerHTML = highlightedText;
    })
}



// returns all nodes in an html document
function getAllNodesWithVulgarWords(node, nodeList) {

    // Save the current node in the array
    if (node.nodeType !== Node.TEXT_NODE &&  node.childNodes.length === 1) {
  
        const hasVulgars = checkIfSentenceContainsVulgars(node.textContent)
    
        if( hasVulgars ) {
            nodeList.push(node)
        }

        // Save the current non-text node
        // nodeList.push(node);
    }
  
    // Recursively save child nodes if any
    if (node.childNodes.length > 0) {

        for (let i = 0; i < node.childNodes.length; i++) {
            getAllNodesWithVulgarWords(node.childNodes[i], nodeList);
        }
    }
}

// get all nodes with  vulgar words
let vulgarNodes = []
getAllNodesWithVulgarWords(document.body, vulgarNodes)

console.log(vulgarNodes)

// block all vulgar words in the html nodes
for (const node of vulgarNodes) {
    
    blackoutAllVulgars(node)
}
