document.addEventListener('DOMContentLoaded', () => {
    //
    // الجزء الخاص بالقائمة المنسدلة (Navbar)
    //
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // فتح وإغلاق القائمة عند النقر على الزر
        menuToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر في أي مكان آخر بالصفحة
        document.addEventListener('click', (event) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    //
    // الجزء الخاص بتأثير الكتابة (Typing Effect)
    //
    const typingElement = document.getElementById('typing-text');
    const fullText = "Full Stack Developer & Graphic Designer, creating functional and visually appealing digital solutions";
    let textIndex = 0;

    function typeWriter() {
        if (textIndex < fullText.length) {
            typingElement.textContent += fullText.charAt(textIndex);
            textIndex++;
            setTimeout(typeWriter, 75);
        }
    }
    
    if (typingElement) {
        typeWriter();
    }
});