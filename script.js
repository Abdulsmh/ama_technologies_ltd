// Services Data
const servicesData = [
    {
        icon: "fas fa-laptop-code",
        title: "Web & Software Dev",
        description: "Custom websites, web apps, business automation, front-end engineering, and legacy system upgrades.",
        tags: ["React", "Automation", "Databases"]
    },
    {
        icon: "fas fa-palette",
        title: "Creative Design Studio",
        description: "Invitation cards, wedding cards, business cards, banners, engagement cards, flyers & logos.",
        tags: ["Wedding cards", "Business cards", "Banners"]
    },
    {
        icon: "fas fa-credit-card",
        title: "POS Banking Services",
        description: "Fast and reliable cash withdrawal, fund transfer, and card transfer services. No long bank queues – access your money anytime through my trusted POS outlet.",
        tags: ["Cash Withdrawal", "Fund Transfer", "Card Transfer"]
    },
    {
        icon: "fas fa-mobile-alt",
        title: "Phone Settings & IT Support",
        description: "iPhone & Android setup (new/old devices), data transfer, iCloud/Google config, troubleshooting.",
        tags: ["iPhone/Android", "Data backup", "Optimization"]
    },
    {
        icon: "fas fa-print",
        title: "Internet Cafe Services",
        description: "Professional printing, photocopy, scanning, online registration (JAMB, WAEC, etc.), document formatting, and other cafe support services for students and professionals.",
        tags: ["Printing", "Photocopy", "Online Registration"]
    },
    {
        icon: "fas fa-chart-line",
        title: "Manual → Automatic Upgrade",
        description: "We analyze bottlenecks, digitize records, automate workflows, and build custom tools that save time.",
        tags: ["Workflow audit", "Custom tools", "Training"]
    }
];

// Testimonials Data
const testimonialsData = [
    {
        text: "AMA Technologies built our company website. Now we track sales automatically – it saved us hours every week!",
        name: "Muhammad Ibrahim",
        title: "Restaurant Owner"
    },
    {
        text: "The wedding cards they designed were absolutely beautiful. Everyone complimented them. Professional and fast service!",
        name: "Bashir Ammani",
        title: "Client"
    },
    {
        text: "From logo to banners, they handled all our branding needs. Creative and attention to detail is top-notch.",
        name: "Nura Muhammad",
        title: "Furnitures Seller"
    },
    {
        text: "The automation solution they provided transformed our inventory management. Highly recommended!",
        name: "Adamu Abubakar",
        title: "Retail Owner"
    },
    {
        text: "Fast, reliable, and creative. Their graphic design work exceeded my expectations for my business cards.",
        name: "Fatima Bello",
        title: "Entrepreneur"
    },
    {
        text: "Their POS banking service is unique and trustworthy. I even feel safe keeping my money with them. They're very reliable, and their charges are affordable.",
        name: "Aminu Kabir",
        title: "Business Owner"
    },
    {
        text: "Their web apps are excellent. They even designed a vehicle catalog for me, so I can easily showcase my available products to customers.",
        name: "Usman Ibrahim",
        title: "Motorcycle Seller"
    }
];

// FAQ Data
const faqData = [
    {
        question: "How long does it take to build a website?",
        answer: "Typical business websites take 7–14 days depending on complexity. We work closely with you to deliver fast and polished results."
    },
    {
        question: "Do you offer support after the project is delivered?",
        answer: "Absolutely. We provide 30 days free support and offer maintenance packages for ongoing assistance."
    },
    {
        question: "Can you design both digital and print invitations?",
        answer: "Yes! We create print-ready designs and also deliver high-resolution digital files for social media sharing."
    },
    {
        question: "What are your charges for POS banking services (withdrawal, transfer, etc.)?",
        answer: "Our charges are affordable and transparent. Withdrawal and transfer fees are clearly communicated before any transaction. Contact us for current rates or visit our shop for quick service."
    },
    {
        question: "Do you offer phone setup for both iPhone and Android?",
        answer: "Yes, we handle all brands – from basic setup to data transfer, cloud backup, and advanced configurations."
    },
    {
        question: "Can you help with existing business software?",
        answer: "Definitely! We specialize in upgrading manual systems to automated solutions, including integrating with your existing tools."
    }
];

// Populate Services
function populateServices() {
    const servicesGrid = document.getElementById('servicesGrid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(service => `
            <div class="service-card">
                <div class="service-icon"><i class="${service.icon}"></i></div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <div class="service-tags">
                    ${service.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
}

// Populate Testimonials
function populateTestimonials() {
    const swiperWrapper = document.querySelector('.testimonial-swiper .swiper-wrapper');
    if (swiperWrapper) {
        swiperWrapper.innerHTML = testimonialsData.map(testimonial => `
            <div class="swiper-slide">
                <div class="testimonial-card">
                    <i class="fas fa-quote-left"></i>
                    <p>“${testimonial.text}”</p>
                    <div class="client-name">${testimonial.name}</div>
                    <div class="client-title">${testimonial.title}</div>
                </div>
            </div>
        `).join('');
    }
}

// Populate FAQ
function populateFAQ() {
    const faqGrid = document.querySelector('.faq-grid');
    if (faqGrid) {
        faqGrid.innerHTML = faqData.map((faq, index) => `
            <div class="faq-item">
                <div class="faq-question">
                    ${faq.question}
                    <i class="fas fa-chevron-down"></i>
                </div>
                <div class="faq-answer">
                    ${faq.answer}
                </div>
            </div>
        `).join('');
        
        // Add click handlers for FAQ
        document.querySelectorAll('.faq-question').forEach((question, idx) => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('i');
                answer.classList.toggle('show');
                icon.style.transform = answer.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
            });
        });
    }
}

// Theme Toggle (Combined for both desktop and mobile)
function initTheme() {
    const themeToggleDesktop = document.getElementById('themeToggleDesktop');
    const themeToggleMobile = document.getElementById('themeToggleMobile');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    };
    
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
}

// Mobile Menu
function initMobileMenu() {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const getQuoteBtn = document.querySelector('.btn-glow');
    
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        navLinksItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
        });
        
        if (getQuoteBtn) {
            getQuoteBtn.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
        }
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Form Handling
function initForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert(`Thank you ${data.name}! Your message has been received. We'll get back to you within 24 hours.`);
                form.reset();
            } catch (error) {
                alert('There was an error sending your message. Please try again or contact us via WhatsApp.');
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .design-card, .faq-item, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Initialize Swiper
function initSwiper() {
    new Swiper('.testimonial-swiper', {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-prev', prevEl: '.swiper-button-next' },
        slidesPerView: 1,
        spaceBetween: 30,
        breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    populateServices();
    populateTestimonials();
    populateFAQ();
    initTheme();
    initMobileMenu();
    initSmoothScroll();
    initForm();
    initAnimations();
    initSwiper();
});