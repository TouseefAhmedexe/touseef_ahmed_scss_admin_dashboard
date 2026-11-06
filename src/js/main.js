document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle Management with System Dark Synchronization
    const themeToggle = document.getElementById('theme-toggle');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (themeToggle) {
            themeToggle.checked = (theme === 'dark');
        }
    }

    // Initialize Theme matching system settings or default
    if (systemPrefersDark.matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            setTheme(themeToggle.checked ? 'dark' : 'light');
        });
    }

    // 2. Accessible Modal Focus Management & Trapping
    const modal = document.getElementById('new-assignment');
    const openModalBtn = document.querySelector('a[href="#new-assignment"]');
    const closeModalBtns = document.querySelectorAll('.modal__backdrop, a[href="#main-content"]');
    let lastFocusedElement = null;

    function openModal() {
        if (!modal) return;
        lastFocusedElement = document.activeElement;
        modal.classList.add('modal--open');
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length) focusable[0].focus();
    }

    function closeModal() {
        if (!modal) return;
        modal.classList.remove('modal--open');
        if (window.location.hash === '#new-assignment') {
            history.pushState('', document.title, window.location.pathname + window.location.search);
        }
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    if (openModalBtn) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.hash = '#new-assignment';
            openModal();
        });
    }

    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    });

    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#new-assignment') {
            openModal();
        } else {
            closeModal();
        }
    });

    // Keyboard Focus Trap & Escape Handler
    window.addEventListener('keydown', (e) => {
        if (!modal || (!modal.classList.contains('modal--open') && window.location.hash !== '#new-assignment')) return;

        if (e.key === 'Escape') {
            closeModal();
            return;
        }

        if (e.key === 'Tab') {
            const focusables = Array.from(modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
            if (!focusables.length) return;
            
            const first = focusables[0];
            const last = focusables[focusables.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                last.focus();
                e.preventDefault();
            } else if (!e.shiftKey && document.activeElement === last) {
                first.focus();
                e.preventDefault();
            }
        }
    });

    // 3. Form Submission with Feedback Alert
    const form = document.getElementById('assignment-form');
    const alertBox = document.getElementById('form-alert');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (alertBox) {
                alertBox.classList.add('form__alert--active');
                alertBox.textContent = 'Assignment successfully saved!';
            }
            setTimeout(() => {
                closeModal();
                if (alertBox) alertBox.classList.remove('form__alert--active');
                form.reset();
            }, 1200);
        });
    }
});