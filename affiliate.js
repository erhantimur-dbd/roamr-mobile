/* ============================================
   RoamR Affiliate & Partner Programme — Logic
   Calculator, tabs, form, scroll reveal
   ============================================ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ---------- Navigation ---------- */
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

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('open');
        navLinks.classList.remove('open');
    });
});

/* ---------- Calculator Tabs ---------- */
$$('.aff-calc-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        $$('.aff-calc-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.calc;
        $$('.aff-calc-panel').forEach(p => p.classList.remove('active'));
        const panelId = 'calc' + target.charAt(0).toUpperCase() + target.slice(1);
        $(`#${panelId}`).classList.add('active');
    });
});

/* ---------- Affiliate Calculator ---------- */
const AFFILIATE_TIERS = [
    { name: 'Standard', minSales: 0,  rate: 0.15 },
    { name: 'Silver',   minSales: 10, rate: 0.20 },
    { name: 'Gold',     minSales: 50, rate: 0.25 },
];

function getAffiliateTier(sales) {
    let tier = AFFILIATE_TIERS[0];
    for (const t of AFFILIATE_TIERS) {
        if (sales >= t.minSales) tier = t;
    }
    return tier;
}

function formatCurrency(value) {
    return '\u00a3' + value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateAffiliateCalc() {
    const referrals = parseInt($('#affReferrals').value);
    const avgValue = parseFloat($('#affAvgValue').value);
    const tier = getAffiliateTier(referrals);
    const monthly = referrals * avgValue * tier.rate;
    const yearly = monthly * 12;

    $('#affReferralsValue').textContent = referrals;
    $('#affAvgValueDisplay').textContent = avgValue.toFixed(2);
    $('#affTierName').textContent = tier.name;
    $('#affTierPct').textContent = Math.round(tier.rate * 100) + '%';
    $('#affEarnings').textContent = formatCurrency(monthly);
    $('#affYearly').textContent = formatCurrency(yearly);

    // Animate the result
    const resultEl = $('#affEarnings');
    resultEl.style.transform = 'scale(1.05)';
    setTimeout(() => { resultEl.style.transform = 'scale(1)'; }, 150);
}

$('#affReferrals').addEventListener('input', updateAffiliateCalc);
$('#affAvgValue').addEventListener('input', updateAffiliateCalc);

/* ---------- Partner Calculator ---------- */
const PARTNER_TIERS = [
    { name: 'Silver',   minSales: 0,   rate: 0.20 },
    { name: 'Gold',     minSales: 100, rate: 0.30 },
    { name: 'Platinum', minSales: 500, rate: 0.40 },
];

function getPartnerTier(sales) {
    let tier = PARTNER_TIERS[0];
    for (const t of PARTNER_TIERS) {
        if (sales >= t.minSales) tier = t;
    }
    return tier;
}

function updatePartnerCalc() {
    const sales = parseInt($('#partnerSales').value);
    const avgValue = parseFloat($('#partnerAvgValue').value);
    const tier = getPartnerTier(sales);
    const monthlySavings = sales * avgValue * tier.rate;
    const yearly = monthlySavings * 12;

    $('#partnerSalesValue').textContent = sales;
    $('#partnerAvgValueDisplay').textContent = avgValue.toFixed(2);
    $('#partnerTierName').textContent = tier.name;
    $('#partnerTierPct').textContent = Math.round(tier.rate * 100) + '%';
    $('#partnerSavings').textContent = formatCurrency(monthlySavings);
    $('#partnerYearly').textContent = formatCurrency(yearly);

    // Animate the result
    const resultEl = $('#partnerSavings');
    resultEl.style.transform = 'scale(1.05)';
    setTimeout(() => { resultEl.style.transform = 'scale(1)'; }, 150);
}

$('#partnerSales').addEventListener('input', updatePartnerCalc);
$('#partnerAvgValue').addEventListener('input', updatePartnerCalc);

/* ---------- Application Form Tabs ---------- */
$$('.aff-apply-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        $$('.aff-apply-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.form;
        $$('.aff-form').forEach(f => f.classList.remove('active'));
        $(`#${target}Form`).classList.add('active');
    });
});

/* ---------- Form Submission (simulated) ---------- */
$$('.aff-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Submitting...';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" style="display:inline;vertical-align:middle;margin-right:8px;"><path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Application submitted!';
            btn.style.background = 'var(--accent-dark)';
            btn.style.boxShadow = 'none';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.boxShadow = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        }, 1500);
    });
});

/* ---------- Smooth Scroll ---------- */
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

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
    const selectors = [
        '.aff-track-card',
        '.step-card',
        '.aff-tier-card',
        '.aff-partner-tier-card',
        '.feature-card',
        '.aff-testimonial-card',
        '.faq-item',
        '.aff-audience-card',
        '.aff-calc-card',
        '.aff-apply-card',
    ].join(', ');

    const revealElements = $$(selectors);
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

function staggerReveal() {
    const groups = [
        $$('.aff-track-card'),
        $$('.aff-tier-card'),
        $$('.aff-partner-tier-card'),
        $$('.feature-card'),
        $$('.aff-testimonial-card'),
        $$('.faq-item'),
        $$('.aff-audience-card'),
    ];
    groups.forEach(group => {
        group.forEach((el, i) => {
            el.style.transitionDelay = `${i * 80}ms`;
        });
    });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    staggerReveal();
    updateAffiliateCalc();
    updatePartnerCalc();
});
