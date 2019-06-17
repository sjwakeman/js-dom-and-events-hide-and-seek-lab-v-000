function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    const children = document.querySelectorAll( '.ranked-list' )
    for ( let i = 0, l = children.length; i < l; i++ ) {
        children[ i ].innerHTML = parseInt( children[ i ].innerHTML ) + n
    }
}

function deepestChild() {
    const deepChild = document.querySelector('#grand-node');
    return deepChild.children[0].children[0].children[0].children[0]
}



