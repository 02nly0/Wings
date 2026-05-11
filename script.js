// منع القائمة اليمنى (Right Click)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// منع اختصارات الكيبورد (نسخ، فحص، حفظ)
document.addEventListener('keydown', function(e) {
    if (
        // Ctrl+C, Ctrl+V, Ctrl+U, Ctrl+S
        (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 83)) ||
        // F12 (Dev Tools)
        (e.keyCode === 123) ||
        // Ctrl+Shift+I (Inspect)
        (e.ctrlKey && e.shiftKey && e.keyCode === 73)
    ) {
        e.preventDefault();
        return false;
    }
});

// منع سحب العناصر (Drag and Drop)
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
