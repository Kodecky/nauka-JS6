function drawTree(i) {
    var lvl = 10;
    
    for (i = 0; i < lvl; i++) {
        var star = '';
        var space = '';
        
        for (var s = 0; s < lvl-i; s++) {
            space += ' ';
        }
        
        for (var j = 0; j <= 2*i; j++) {
            star += '*';
        }
        console.log(space + star);
    }
}
drawTree();