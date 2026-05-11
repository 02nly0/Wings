/* Optimized Protection Script */
(function() {
    const prevent = (e) => e.preventDefault();
    
    // منع الكليك يمين
    document.addEventListener('contextmenu', prevent);
    
    // منع اختصارات الكيبورد (نسخ، فحص، حفظ)
    document.addEventListener('keydown', (e) => {
        if (
            e.keyCode === 123 || // F12
            (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Inspect
            (e.ctrlKey && [67, 86, 85, 83].includes(e.keyCode)) // C, V, U, S
        ) {
            e.preventDefault();
            return false;
        }
    });

    // منع السحب
    document.addEventListener('dragstart', prevent);
})();
