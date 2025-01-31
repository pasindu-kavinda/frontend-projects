const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(title => {
    title.addEventListener('click', () => {
        accordionTitles.forEach(item => {
            if (item !== title) {
                item.nextElementSibling.classList.remove('active');
            }
        });
        const content = title.nextElementSibling;
        content.classList.toggle('active');
    });
});