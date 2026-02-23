/* ============================================
   RoamR — eSIM Provider App Logic
   Customer journey, pricing engine, interactions
   ============================================ */

// --- Pricing Data ---
const PLANS = {
    uk: {
        name: 'United Kingdom',
        flag: '🇬🇧',
        tiers: {
            starter: {
                7:  { price: 2.99,  data: '500 MB', mins: '30', texts: '30' },
                14: { price: 3.99,  data: '750 MB', mins: '40', texts: '40' },
                30: { price: 4.99,  data: '1 GB',   mins: '50', texts: '50' },
            },
            explorer: {
                7:  { price: 7.99,  data: '3 GB',  mins: '120', texts: '120' },
                14: { price: 9.99,  data: '4 GB',  mins: '150', texts: '150' },
                30: { price: 12.99, data: '5 GB',  mins: '200', texts: '200' },
            },
            pro: {
                7:  { price: 14.99, data: '10 GB',  mins: 'Unlimited', texts: 'Unlimited' },
                14: { price: 19.99, data: '15 GB',  mins: 'Unlimited', texts: 'Unlimited' },
                30: { price: 24.99, data: '20 GB',  mins: 'Unlimited', texts: 'Unlimited' },
            },
        },
    },
    europe: {
        name: 'Europe',
        flag: '🇪🇺',
        tiers: {
            starter: {
                7:  { price: 3.99,  data: '500 MB', mins: '30', texts: '30' },
                14: { price: 5.99,  data: '750 MB', mins: '40', texts: '40' },
                30: { price: 6.99,  data: '1 GB',   mins: '50', texts: '50' },
            },
            explorer: {
                7:  { price: 9.99,  data: '3 GB',  mins: '120', texts: '120' },
                14: { price: 14.99, data: '4 GB',  mins: '150', texts: '150' },
                30: { price: 17.99, data: '5 GB',  mins: '200', texts: '200' },
            },
            pro: {
                7:  { price: 19.99, data: '10 GB',  mins: 'Unlimited', texts: 'Unlimited' },
                14: { price: 27.99, data: '15 GB',  mins: 'Unlimited', texts: 'Unlimited' },
                30: { price: 34.99, data: '20 GB',  mins: 'Unlimited', texts: 'Unlimited' },
            },
        },
    },
    turkiye: {
        name: 'Türkiye',
        flag: '🇹🇷',
        tiers: {
            starter: {
                7:  { price: 2.49,  data: '500 MB', mins: '30', texts: '30' },
                14: { price: 3.49,  data: '750 MB', mins: '40', texts: '40' },
                30: { price: 3.99,  data: '1 GB',   mins: '50', texts: '50' },
            },
            explorer: {
                7:  { price: 5.99,  data: '3 GB',  mins: '120', texts: '120' },
                14: { price: 8.99,  data: '4 GB',  mins: '150', texts: '150' },
                30: { price: 10.99, data: '5 GB',  mins: '200', texts: '200' },
            },
            pro: {
                7:  { price: 12.99, data: '10 GB',  mins: 'Unlimited', texts: 'Unlimited' },
                14: { price: 17.99, data: '15 GB',  mins: 'Unlimited', texts: 'Unlimited' },
                30: { price: 22.99, data: '20 GB',  mins: 'Unlimited', texts: 'Unlimited' },
            },
        },
    },
};

// --- State ---
let selectedRegion = null;
let selectedDays = 30;
let selectedTier = null;

// --- DOM References ---
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// --- Navigation ---
const nav = $('#nav');
const mobileMenuBtn = $('#mobileMenuBtn');
const navLinks = $('#navLinks');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
});

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('open');
    navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

// --- Destination Selection ---
$$('.destination-card').forEach(card => {
    card.addEventListener('click', () => {
        const region = card.dataset.region;
        selectDestination(region);
    });
});

function selectDestination(region) {
    selectedRegion = region;

    // Update active state on cards
    $$('.destination-card').forEach(c => c.classList.remove('active'));
    $(`[data-region="${region}"]`).classList.add('active');

    // Show duration section
    const durationSection = $('#duration');
    durationSection.classList.remove('hidden');

    // Show pricing section
    const pricingSection = $('#pricing');
    pricingSection.classList.remove('hidden');

    // Update pricing
    updatePricing();

    // Smooth scroll to duration
    setTimeout(() => {
        durationSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// --- Duration Selection ---
$$('.duration-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        selectedDays = parseInt(btn.dataset.days);
        $$('.duration-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        updatePricing();

        // Scroll to pricing
        setTimeout(() => {
            $('#pricing').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
    });
});

// --- Update Pricing Display ---
function updatePricing() {
    if (!selectedRegion) return;

    const regionData = PLANS[selectedRegion];

    // Update region name in subtitle
    $('#region-name').textContent = regionData.name;

    // Update each tier
    ['starter', 'explorer', 'pro'].forEach(tier => {
        const plan = regionData.tiers[tier][selectedDays];
        if (!plan) return;

        $(`#price-${tier}`).textContent = plan.price.toFixed(2);
        $(`#data-${tier}`).textContent = plan.data;
        $(`#mins-${tier}`).textContent = plan.mins;
        $(`#texts-${tier}`).textContent = plan.texts;
    });

    // Update days display
    $$('.price-days').forEach(el => el.textContent = selectedDays);

    // Animate price change
    $$('.price-amount').forEach(el => {
        el.style.transform = 'scale(1.05)';
        el.style.transition = 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        setTimeout(() => { el.style.transform = 'scale(1)'; }, 300);
    });
}

// --- Plan CTA Buttons ---
$$('.plan-cta').forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.plan-card');
        selectedTier = card.dataset.tier;
        openOrderModal();
    });
});

// --- Order Modal ---
function openOrderModal() {
    if (!selectedRegion || !selectedTier) return;

    const regionData = PLANS[selectedRegion];
    const plan = regionData.tiers[selectedTier][selectedDays];
    const tierNames = { starter: 'Starter', explorer: 'Explorer', pro: 'Pro' };

    // Build summary
    const summaryHTML = `
        <div class="modal-summary-item">
            <span>Destination</span>
            <span>${regionData.flag} ${regionData.name}</span>
        </div>
        <div class="modal-summary-item">
            <span>Plan</span>
            <span>${tierNames[selectedTier]}</span>
        </div>
        <div class="modal-summary-item">
            <span>Duration</span>
            <span>${selectedDays} days</span>
        </div>
        <div class="modal-summary-item">
            <span>Data</span>
            <span>${plan.data}</span>
        </div>
        <div class="modal-summary-item">
            <span>Calls</span>
            <span>${plan.mins}${plan.mins !== 'Unlimited' ? ' mins' : ''}</span>
        </div>
        <div class="modal-summary-item">
            <span>Texts</span>
            <span>${plan.texts}${plan.texts !== 'Unlimited' ? ' texts' : ''}</span>
        </div>
        <div class="modal-summary-total">
            <span>Total</span>
            <span>£${plan.price.toFixed(2)}</span>
        </div>
    `;

    $('#modalSummary').innerHTML = summaryHTML;
    $('#modalPrice').textContent = `— £${plan.price.toFixed(2)}`;

    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    $('#orderStart').min = today;
    $('#orderStart').value = today;

    // Show modal
    $('#orderModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    $('#orderModal').classList.add('hidden');
    document.body.style.overflow = '';
}

$('#modalClose').addEventListener('click', closeOrderModal);
$('#orderModal').addEventListener('click', (e) => {
    if (e.target === $('#orderModal')) closeOrderModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeOrderModal();
});

// --- Form Submission ---
$('#orderForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = $('#orderEmail').value;
    const name = $('#orderName').value;
    const device = $('#orderDevice').value;
    const startDate = $('#orderStart').value;

    // In production, this would submit to a payment processor
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span style="display:inline-flex;align-items:center;gap:8px;">Processing...</span>';
    btn.disabled = true;

    setTimeout(() => {
        btn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="margin-right:8px;">
                <path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            eSIM sent to ${email}
        `;
        btn.style.background = 'var(--accent-dark)';
        btn.style.boxShadow = 'none';

        setTimeout(() => {
            closeOrderModal();
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.boxShadow = '';
            btn.disabled = false;
            e.target.reset();
        }, 3000);
    }, 1500);
});

// --- Scroll Reveal Animation ---
function initScrollReveal() {
    const revealElements = $$('.feature-card, .step-card, .coverage-region, .faq-item');

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
}

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// --- Stagger reveal animations ---
function staggerReveal() {
    const groups = [
        $$('.feature-card'),
        $$('.coverage-region'),
        $$('.faq-item'),
    ];

    groups.forEach(group => {
        group.forEach((el, i) => {
            el.style.transitionDelay = `${i * 80}ms`;
        });
    });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    staggerReveal();

    // Default the 30-day duration button as active
    $$('.duration-btn').forEach(b => {
        b.classList.toggle('active', parseInt(b.dataset.days) === 30);
    });
});
