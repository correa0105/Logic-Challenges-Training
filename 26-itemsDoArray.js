function removeNodes(listHead, x) {
    for(let i = 0; i <= listHead.length; i++) {
        if(listHead[i] > x) {
            listHead[listHead.length] = listHead[i]
            listHead.pop()
        }
    }
    
    return console.log(listHead)
}

removeNodes([1, 2, 3, 4, 5], 3)