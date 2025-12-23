// 側邊選單切換功能
const toggleBtn = document.getElementById('toggleMenu');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// 點擊選單項目後關閉側邊欄（在小螢幕上）
const menuItems = document.querySelectorAll('.menu-item a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
        }
    });
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 視窗調整時的響應
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('collapsed');
    }
});
