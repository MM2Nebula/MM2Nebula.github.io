document.addEventListener('DOMContentLoaded', () => {
    // Initialize modal
    const modal = document.getElementById('modal');
    
    // Scroll to top button
    const topBtn = document.getElementById('topBtn');
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            topBtn.classList.add('visible');
        } else {
            topBtn.classList.remove('visible');
        }
    });
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            closeModal();
        }
    });
});

function copyScript(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            showToast('Script copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            showToast('Failed to copy script');
        });
}

function showModal() {
    const modal = document.getElementById('modal');
    modal.setAttribute('aria-hidden', 'false');
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('hidden', '');
    document.body.style.overflow = ''; // Re-enable scrolling
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('visible');
    
    setTimeout(() => {
        toast.classList.remove('visible');
    }, 3000);
