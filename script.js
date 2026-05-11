(function() {
    'use strict';
    const prevent = (e) => e.preventDefault();
    document.addEventListener('contextmenu', prevent);
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && [67, 86, 85, 83].includes(e.keyCode))) {
            e.preventDefault();
            return false;
        }
    });
    document.addEventListener('dragstart', prevent);
})();
