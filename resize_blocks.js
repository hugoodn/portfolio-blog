document.addEventListener("DOMContentLoaded", function() {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(block => {
        block.addEventListener('input', function() {
            adjustHeight(block);
        });
    });

    function adjustHeight(block) {
        block.style.height = 'auto';
        block.style.height = block.scrollHeight + 'px';
    }
});
