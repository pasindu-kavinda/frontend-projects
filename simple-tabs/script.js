const tabs = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.content-item');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        document.querySelector('.tab-item.active')?.classList.remove('active');
        document.querySelector('.content-item.active')?.classList.remove('active');

        tab.classList.add('active');
        tabContent[index].classList.add('active');
    });
});
