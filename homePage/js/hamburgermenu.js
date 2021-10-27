(() => {
    Array.from(document.getElementsByTagName('path')).map(path => {
        const debugPath = path.cloneNode();
        debugPath.classList.add('line--debug');
        if (path.parentNode)
            path.parentNode.insertBefore(debugPath.cloneNode(), path);
    });

})()
