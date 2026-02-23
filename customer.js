/* ============================================
   RoamR Customer Portal — Logic & Mock Data
   Logged-in as: Emma Richardson (CUS-001)
   ============================================ */

const CURRENT_USER = {
    id: 'CUS-001',
    name: 'Emma Richardson',
    email: 'emma.richardson@gmail.com',
    phone: '+44 7911 123456',
    country: 'United Kingdom',
    joinedDate: '2025-09-14',
};

const ORDERS = [
    { id: 'ORD-1047', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'active', amount: 14.99, orderDate: '2026-02-10', activationDate: '2026-02-12', expiryDate: '2026-02-26', esimId: 'ESIM-2047', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
    { id: 'ORD-1042', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Starter', tier: 'starter', duration: 7, data: '500 MB', mins: '30', texts: '30', status: 'expired', amount: 2.99, orderDate: '2025-12-20', activationDate: '2025-12-21', expiryDate: '2025-12-28', esimId: 'ESIM-2042', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
    { id: 'ORD-1038', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Pro', tier: 'pro', duration: 14, data: '15 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'expired', amount: 17.99, orderDate: '2025-11-10', activationDate: '2025-11-11', expiryDate: '2025-11-25', esimId: 'ESIM-2038', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
    { id: 'ORD-1024', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'expired', amount: 34.99, orderDate: '2025-10-01', activationDate: '2025-10-02', expiryDate: '2025-11-01', esimId: 'ESIM-2024', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
];

const ESIMS = [
    { id: 'ESIM-2047', orderId: 'ORD-1047', iccid: '8944110067234001234', status: 'active', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', activationDate: '2026-02-12', expiryDate: '2026-02-26', dataUsed: 1.8, dataTotal: 4, minsUsed: 42, minsTotal: 150, textsUsed: 18, textsTotal: 150, daysRemaining: 5, daysTotal: 14 },
    { id: 'ESIM-2042', orderId: 'ORD-1042', iccid: '8944110067234005678', status: 'expired', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Starter', tier: 'starter', activationDate: '2025-12-21', expiryDate: '2025-12-28', dataUsed: 0.5, dataTotal: 0.5, minsUsed: 30, minsTotal: 30, textsUsed: 12, textsTotal: 30, daysRemaining: 0, daysTotal: 7 },
    { id: 'ESIM-2038', orderId: 'ORD-1038', iccid: '8944110067234009012', status: 'expired', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Pro', tier: 'pro', activationDate: '2025-11-11', expiryDate: '2025-11-25', dataUsed: 15, dataTotal: 15, minsUsed: 0, minsTotal: 999, textsUsed: 0, textsTotal: 999, daysRemaining: 0, daysTotal: 14 },
    { id: 'ESIM-2024', orderId: 'ORD-1024', iccid: '8944110067234003456', status: 'expired', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Pro', tier: 'pro', activationDate: '2025-10-02', expiryDate: '2025-11-01', dataUsed: 20, dataTotal: 20, minsUsed: 0, minsTotal: 999, textsUsed: 0, textsTotal: 999, daysRemaining: 0, daysTotal: 30 },
];

const INVOICES = ORDERS.map(o => {
    const tax = +(o.amount * 0.2).toFixed(2);
    return {
        id: 'INV-' + o.id.split('-')[1],
        orderId: o.id,
        issueDate: o.orderDate,
        amount: o.amount,
        tax,
        total: +(o.amount + tax).toFixed(2),
        status: 'paid',
        items: [{ description: `${o.plan} Plan \u2014 ${o.destinationName}, ${o.duration} days`, qty: 1, unitPrice: o.amount }],
    };
});

const TICKETS = [
    {
        id: 'TKT-501', subject: 'Unable to activate eSIM on iPhone 15 Pro', category: 'Activation', status: 'resolved', createdDate: '2025-12-22', lastUpdated: '2025-12-23',
        messages: [
            { sender: 'customer', date: '22 Dec 2025, 10:30', text: 'I scanned the QR code for my UK Starter plan but my phone says "eSIM cannot be added". I\'ve restarted the phone and tried again but no luck.' },
            { sender: 'support', date: '22 Dec 2025, 11:15', text: 'Hi Emma, thanks for reaching out. This can happen if carrier lock is enabled. Could you check Settings > General > About and confirm your carrier? Also, make sure you\'re connected to WiFi when scanning.' },
            { sender: 'customer', date: '22 Dec 2025, 11:45', text: 'You were right \u2014 I needed to be on WiFi. It\'s working now. Thank you!' },
            { sender: 'support', date: '22 Dec 2025, 12:00', text: 'Great to hear! Your eSIM is now active. Have a wonderful trip. Don\'t hesitate to reach out if you need anything else.' },
        ],
    },
    {
        id: 'TKT-502', subject: 'Data usage seems higher than expected', category: 'Billing', status: 'open', createdDate: '2026-02-18', lastUpdated: '2026-02-19',
        messages: [
            { sender: 'customer', date: '18 Feb 2026, 14:20', text: 'I\'ve been using my Europe Explorer plan for 3 days and it shows 1.8 GB used already. I\'ve mostly just been using maps and messaging. Is this normal?' },
            { sender: 'support', date: '18 Feb 2026, 15:05', text: 'Hi Emma, some apps run background data sync which can consume data quickly. We recommend checking Settings > Cellular > Cellular Data to see which apps are using data on your RoamR line. You can disable background app refresh for non-essential apps to conserve data.' },
        ],
    },
];

const TOPUP_OPTIONS = [
    { id: 'top-1gb', label: '+1 GB', desc: 'Extra data', price: 2.99, type: 'data' },
    { id: 'top-5gb', label: '+5 GB', desc: 'Extra data', price: 9.99, type: 'data' },
    { id: 'top-100min', label: '+100 mins', desc: 'Extra calls', price: 3.99, type: 'minutes' },
    { id: 'top-50txt', label: '+50 texts', desc: 'Extra texts', price: 1.99, type: 'texts' },
    { id: 'top-7day', label: '+7 days', desc: 'Extend plan', price: 4.99, type: 'days' },
    { id: 'top-14day', label: '+14 days', desc: 'Extend plan', price: 7.99, type: 'days' },
];

// --- Helpers ---
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = n => '\u00a3' + n.toFixed(2);
const fmtDate = d => d ? new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '\u2014';

function usageLevel(used, total) {
    const pct = (used / total) * 100;
    if (pct >= 80) return 'critical';
    if (pct >= 50) return 'warning';
    return 'healthy';
}

function showToast(message, type = 'success') {
    const container = $('#toastContainer');
    const icons = {
        success: '<svg viewBox="0 0 20 20" fill="none"><path d="M16.667 5L7.5 14.167 3.333 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        error: '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><path d="M12.5 7.5l-5 5M7.5 7.5l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
        info: '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/><path d="M10 9v4M10 7h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `${icons[type] || icons.info}<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(40px)'; toast.style.transition = 'all 0.3s'; setTimeout(() => toast.remove(), 300); }, 3000);
}

const PAGE_TITLES = {
    dashboard: 'Dashboard',
    orders: 'Order History',
    topup: 'Top Up',
    billing: 'Invoices & Billing',
    settings: 'Account Settings',
    support: 'Support',
};

// --- Router ---
function navigate(hash) { window.location.hash = hash; }

function resolveRoute() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    const [page, id] = hash.split('/');

    $$('.portal-page').forEach(p => p.classList.add('hidden'));
    $$('.sidebar-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));

    const pageEl = $(`#page-${page}`);
    if (pageEl) {
        pageEl.classList.remove('hidden');
        $('#pageTitle').textContent = PAGE_TITLES[page] || page;
        document.title = `RoamR \u2014 ${PAGE_TITLES[page] || page}`;
        renderPage(page, id);
    }

    $('#sidebar').classList.remove('open');
    $('#sidebarOverlay').classList.remove('active');
}

function renderPage(page, id) {
    switch (page) {
        case 'dashboard': renderDashboard(); break;
        case 'orders': renderOrders(); break;
        case 'topup': renderTopup(); break;
        case 'billing': id ? renderInvoiceDetail(id) : renderBilling(); break;
        case 'settings': renderSettings(); break;
        case 'support': renderSupport(); break;
    }
}

// --- Dashboard ---
function renderDashboard() {
    const activeEsims = ESIMS.filter(e => e.status === 'active');
    const totalSpent = ORDERS.reduce((s, o) => s + o.amount, 0);
    const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    $('#page-dashboard').innerHTML = `
        <div class="welcome-header">
            <h1>Welcome back, <span>${CURRENT_USER.name.split(' ')[0]}</span></h1>
            <p>${today}</p>
        </div>
        <div class="stat-grid" style="margin-bottom:28px">
            <div class="stat-card"><div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v12a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 6h18" stroke="currentColor" stroke-width="2"/></svg></div><div class="stat-content"><div class="stat-label">Total Orders</div><div class="stat-value">${ORDERS.length}</div></div></div>
            <div class="stat-card"><div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="stat-content"><div class="stat-label">Active eSIMs</div><div class="stat-value">${activeEsims.length}</div></div></div>
            <div class="stat-card"><div class="stat-icon purple"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Total Spent</div><div class="stat-value">${fmt(totalSpent)}</div></div></div>
        </div>
        <h2 style="font-size:18px;font-weight:700;color:var(--gray-900);margin-bottom:16px">${activeEsims.length ? 'Your Active eSIMs' : 'No Active eSIMs'}</h2>
        ${activeEsims.length ? `<div class="esim-grid">${activeEsims.map(e => `
            <div class="esim-card">
                <div class="esim-card-header">
                    <div class="esim-card-dest"><span class="flag">${e.flag}</span><h3>${e.destinationName}</h3></div>
                    <div class="esim-card-badges"><span class="badge-plan ${e.tier}">${e.plan}</span><span class="badge badge-active">active</span></div>
                </div>
                <div class="esim-card-iccid">ICCID: ${e.iccid}</div>
                <div class="esim-card-usage">
                    <div class="usage-bar"><div class="usage-bar-label"><span>Data</span><span class="usage-value">${e.dataUsed} / ${e.dataTotal} GB</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${usageLevel(e.dataUsed, e.dataTotal)}" style="width:${(e.dataUsed/e.dataTotal*100).toFixed(0)}%"></div></div></div>
                    <div class="usage-bar"><div class="usage-bar-label"><span>Minutes</span><span class="usage-value">${e.minsUsed} / ${e.minsTotal === 999 ? '\u221e' : e.minsTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${e.minsTotal === 999 ? 'healthy' : usageLevel(e.minsUsed, e.minsTotal)}" style="width:${e.minsTotal === 999 ? 15 : (e.minsUsed/e.minsTotal*100).toFixed(0)}%"></div></div></div>
                    <div class="usage-bar"><div class="usage-bar-label"><span>Texts</span><span class="usage-value">${e.textsUsed} / ${e.textsTotal === 999 ? '\u221e' : e.textsTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${e.textsTotal === 999 ? 'healthy' : usageLevel(e.textsUsed, e.textsTotal)}" style="width:${e.textsTotal === 999 ? 10 : (e.textsUsed/e.textsTotal*100).toFixed(0)}%"></div></div></div>
                </div>
                <div class="esim-card-footer">
                    <div class="esim-days-left"><strong>${e.daysRemaining}</strong> days remaining</div>
                    <a href="#topup" class="btn btn-primary btn-sm">Top Up</a>
                </div>
            </div>
        `).join('')}</div>` : `
            <div class="empty-state" style="padding:40px">
                <svg viewBox="0 0 64 64" fill="none"><rect x="12" y="8" width="40" height="48" rx="6" stroke="currentColor" stroke-width="3"/><path d="M24 24h16M24 32h16M24 40h8" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
                <h3>No active eSIMs</h3>
                <p>Purchase an eSIM to get connected on your next trip.</p>
                <a href="index.html#pricing" class="btn btn-primary">Browse Plans</a>
            </div>
        `}
    `;
}

// --- Order History ---
let orderFilter = '';

function renderOrders() {
    let filtered = [...ORDERS].sort((a, b) => b.orderDate.localeCompare(a.orderDate));
    if (orderFilter) filtered = filtered.filter(o => o.status === orderFilter);

    $('#page-orders').innerHTML = `
        <div class="page-header"><h1>Order History</h1><p>All your past and current orders</p></div>
        <div class="filter-tabs">
            <button class="filter-tab ${orderFilter === '' ? 'active' : ''}" data-filter="">All</button>
            <button class="filter-tab ${orderFilter === 'active' ? 'active' : ''}" data-filter="active">Active</button>
            <button class="filter-tab ${orderFilter === 'expired' ? 'active' : ''}" data-filter="expired">Completed</button>
            <button class="filter-tab ${orderFilter === 'cancelled' ? 'active' : ''}" data-filter="cancelled">Cancelled</button>
        </div>
        <div class="order-cards">
            ${filtered.length ? filtered.map(o => `
                <div class="order-card" id="ocard-${o.id}">
                    <div class="order-card-main" onclick="toggleOrderCard('${o.id}')">
                        <div class="order-card-left">
                            <span class="order-card-flag">${o.flag}</span>
                            <div class="order-card-info">
                                <h4>${o.destinationName} \u2014 ${o.plan}</h4>
                                <p>${o.duration} days \u00b7 ${fmtDate(o.orderDate)}</p>
                            </div>
                        </div>
                        <div class="order-card-right">
                            <span class="badge badge-${o.status}">${o.status}</span>
                            <span class="order-card-amount">${fmt(o.amount)}</span>
                            <svg class="order-card-expand" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                    </div>
                    <div class="order-card-detail">
                        <ul class="info-list">
                            <li><span class="info-label">Order ID</span><span class="info-value">${o.id}</span></li>
                            <li><span class="info-label">Plan</span><span class="info-value"><span class="badge-plan ${o.tier}">${o.plan}</span></span></li>
                            <li><span class="info-label">Data</span><span class="info-value">${o.data}</span></li>
                            <li><span class="info-label">Calls</span><span class="info-value">${o.mins}${o.mins !== 'Unlimited' ? ' mins' : ''}</span></li>
                            <li><span class="info-label">Texts</span><span class="info-value">${o.texts}</span></li>
                            <li><span class="info-label">Device</span><span class="info-value">${o.device}</span></li>
                            <li><span class="info-label">Activated</span><span class="info-value">${fmtDate(o.activationDate)}</span></li>
                            <li><span class="info-label">Expires</span><span class="info-value">${fmtDate(o.expiryDate)}</span></li>
                            <li><span class="info-label">eSIM</span><span class="info-value" style="font-family:'JetBrains Mono',monospace;font-size:13px">${o.esimId || '\u2014'}</span></li>
                            <li><span class="info-label">Payment</span><span class="info-value">${o.paymentMethod}</span></li>
                        </ul>
                    </div>
                </div>
            `).join('') : '<div class="empty-state"><h3>No orders found</h3><p>No orders match this filter.</p></div>'}
        </div>
    `;

    $$('.filter-tab').forEach(btn => {
        btn.addEventListener('click', () => { orderFilter = btn.dataset.filter; renderOrders(); });
    });
}

function toggleOrderCard(id) {
    const card = $(`#ocard-${id}`);
    card.classList.toggle('expanded');
}

// --- Top Up ---
let topupStep = 1;
let selectedEsim = null;
let selectedTopup = null;

function renderTopup() {
    const activeEsims = ESIMS.filter(e => e.status === 'active');

    const stepClass = (n) => topupStep === n ? 'active' : (topupStep > n ? 'completed' : '');
    const connClass = (n) => topupStep > n ? 'completed' : '';

    $('#page-topup').innerHTML = `
        <div class="page-header"><h1>Top Up</h1><p>Add more data, minutes, or extend your plan</p></div>
        <div class="wizard-steps">
            <div class="wizard-step ${stepClass(1)}"><span class="wizard-step-num">${topupStep > 1 ? '\u2713' : '1'}</span><span>Select eSIM</span></div>
            <div class="wizard-connector ${connClass(1)}"></div>
            <div class="wizard-step ${stepClass(2)}"><span class="wizard-step-num">${topupStep > 2 ? '\u2713' : '2'}</span><span>Choose Top-Up</span></div>
            <div class="wizard-connector ${connClass(2)}"></div>
            <div class="wizard-step ${stepClass(3)}"><span class="wizard-step-num">3</span><span>Confirm</span></div>
        </div>
        <div class="wizard-content">
            <!-- Step 1 -->
            <div class="wizard-panel ${topupStep === 1 ? 'active' : ''}">
                ${activeEsims.length ? `
                    <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;color:var(--gray-900)">Select an eSIM to top up</h3>
                    <div class="wizard-esim-select">
                        ${activeEsims.map(e => `
                            <button class="wizard-esim-option ${selectedEsim === e.id ? 'selected' : ''}" data-esim="${e.id}">
                                <span class="flag">${e.flag}</span>
                                <div class="esim-opt-info">
                                    <h4>${e.destinationName} \u2014 ${e.plan}</h4>
                                    <p>${e.dataUsed}/${e.dataTotal} GB used \u00b7 ${e.daysRemaining} days left</p>
                                </div>
                                <span class="badge badge-active">active</span>
                            </button>
                        `).join('')}
                    </div>
                    <button class="btn btn-primary btn-lg" style="margin-top:24px" id="topupNext1" ${!selectedEsim ? 'disabled' : ''}>Continue</button>
                ` : `
                    <div class="empty-state">
                        <h3>No active eSIMs</h3>
                        <p>You need an active eSIM to top up.</p>
                        <a href="index.html#pricing" class="btn btn-primary">Buy an eSIM</a>
                    </div>
                `}
            </div>

            <!-- Step 2 -->
            <div class="wizard-panel ${topupStep === 2 ? 'active' : ''}">
                <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;color:var(--gray-900)">Choose a top-up option</h3>
                <div class="topup-option-grid">
                    ${TOPUP_OPTIONS.map(opt => `
                        <button class="topup-option ${selectedTopup === opt.id ? 'selected' : ''}" data-topup="${opt.id}">
                            <div class="topup-option-amount">${opt.label}</div>
                            <div class="topup-option-price">${fmt(opt.price)}</div>
                        </button>
                    `).join('')}
                </div>
                <div style="display:flex;gap:12px;margin-top:24px">
                    <button class="btn btn-outline btn-lg" onclick="topupStep=1;selectedTopup=null;renderTopup()">Back</button>
                    <button class="btn btn-primary btn-lg" id="topupNext2" ${!selectedTopup ? 'disabled' : ''}>Continue</button>
                </div>
            </div>

            <!-- Step 3 -->
            <div class="wizard-panel ${topupStep === 3 ? 'active' : ''}">
                ${selectedEsim && selectedTopup ? (() => {
                    const esim = ESIMS.find(e => e.id === selectedEsim);
                    const opt = TOPUP_OPTIONS.find(o => o.id === selectedTopup);
                    return `
                        <h3 style="font-size:16px;font-weight:700;margin-bottom:16px;color:var(--gray-900)">Confirm your top-up</h3>
                        <div class="topup-summary">
                            <div class="topup-summary-row"><span>eSIM</span><span>${esim.flag} ${esim.destinationName} \u2014 ${esim.plan}</span></div>
                            <div class="topup-summary-row"><span>Top-up</span><span>${opt.label}</span></div>
                            <div class="topup-summary-total"><span>Total</span><span>${fmt(opt.price)}</span></div>
                        </div>
                        <div style="display:flex;gap:12px">
                            <button class="btn btn-outline btn-lg" onclick="topupStep=2;renderTopup()">Back</button>
                            <button class="btn btn-primary btn-lg btn-block" id="confirmTopup">Confirm & Pay ${fmt(opt.price)}</button>
                        </div>
                    `;
                })() : ''}
            </div>
        </div>
    `;

    // Event listeners
    $$('.wizard-esim-option').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedEsim = btn.dataset.esim;
            renderTopup();
        });
    });

    if ($('#topupNext1')) {
        $('#topupNext1').addEventListener('click', () => { if (selectedEsim) { topupStep = 2; renderTopup(); } });
    }

    $$('.topup-option').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedTopup = btn.dataset.topup;
            renderTopup();
        });
    });

    if ($('#topupNext2')) {
        $('#topupNext2').addEventListener('click', () => { if (selectedTopup) { topupStep = 3; renderTopup(); } });
    }

    if ($('#confirmTopup')) {
        $('#confirmTopup').addEventListener('click', () => {
            const btn = $('#confirmTopup');
            btn.textContent = 'Processing...';
            btn.disabled = true;
            setTimeout(() => {
                showToast('Top-up successful! Your plan has been updated.');
                topupStep = 1;
                selectedEsim = null;
                selectedTopup = null;
                renderTopup();
            }, 1500);
        });
    }
}

// --- Billing ---
function renderBilling() {
    const totalSpent = INVOICES.reduce((s, i) => s + i.total, 0);

    $('#page-billing').innerHTML = `
        <div class="page-header"><h1>Invoices & Billing</h1><p>Your payment history and invoices</p></div>
        <div class="stat-grid" style="margin-bottom:28px">
            <div class="stat-card"><div class="stat-icon purple"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Total Spent</div><div class="stat-value">${fmt(totalSpent)}</div></div></div>
            <div class="stat-card"><div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/><path d="M2 10h20" stroke="currentColor" stroke-width="2"/></svg></div><div class="stat-content"><div class="stat-label">Invoices</div><div class="stat-value">${INVOICES.length}</div></div></div>
            <div class="stat-card"><div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="stat-content"><div class="stat-label">All Paid</div><div class="stat-value">\u2713</div></div></div>
        </div>
        <div class="data-table-wrap">
            <div class="table-toolbar"><h3 style="font-size:15px;font-weight:700;color:var(--gray-900)">Invoice History</h3></div>
            <div style="overflow-x:auto">
            <table class="data-table">
                <thead><tr><th>Invoice</th><th>Date</th><th>Description</th><th>Total</th><th>Status</th><th></th></tr></thead>
                <tbody>${INVOICES.sort((a, b) => b.issueDate.localeCompare(a.issueDate)).map(i => `<tr>
                    <td class="cell-bold">${i.id}</td>
                    <td class="cell-muted">${fmtDate(i.issueDate)}</td>
                    <td>${i.items[0].description}</td>
                    <td class="cell-bold">${fmt(i.total)}</td>
                    <td><span class="badge badge-${i.status}">${i.status}</span></td>
                    <td><a class="cell-link" onclick="navigate('billing/${i.id}')">View</a></td>
                </tr>`).join('')}</tbody>
            </table>
            </div>
        </div>
    `;
}

function renderInvoiceDetail(id) {
    const inv = INVOICES.find(i => i.id === id);
    if (!inv) { renderBilling(); return; }

    $('#page-billing').innerHTML = `
        <a class="back-link" onclick="navigate('billing')"><svg viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Back to invoices</a>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px">
            <div class="page-header" style="margin-bottom:0"><h1>Invoice ${inv.id}</h1><p>Issued ${fmtDate(inv.issueDate)}</p></div>
            <button class="btn btn-outline btn-sm" onclick="showToast('PDF download simulated','info')">Download PDF</button>
        </div>
        <div class="invoice-document">
            <div class="invoice-header">
                <div class="invoice-brand">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="currentColor"/><path d="M8 12C8 12 12 8 16 8C20 8 24 12 24 12" stroke="white" stroke-width="2.5" stroke-linecap="round"/><path d="M10 16C10 16 13 13 16 13C19 13 22 16 22 16" stroke="white" stroke-width="2.5" stroke-linecap="round"/><circle cx="16" cy="23" r="1.5" fill="white"/></svg>
                    RoamR
                </div>
                <div class="invoice-meta"><h2>${inv.id}</h2><p>Issued: ${fmtDate(inv.issueDate)}<br>Status: <span class="badge badge-${inv.status}">${inv.status}</span></p></div>
            </div>
            <div class="invoice-parties">
                <div class="invoice-party"><h4>From</h4><p><strong>RoamR Ltd</strong><br>123 Connectivity Street<br>London, EC1A 1BB<br>United Kingdom</p></div>
                <div class="invoice-party"><h4>Bill To</h4><p><strong>${CURRENT_USER.name}</strong><br>${CURRENT_USER.email}<br>${CURRENT_USER.phone}</p></div>
            </div>
            <table class="invoice-table">
                <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead>
                <tbody>${inv.items.map(item => `<tr><td>${item.description}</td><td>${item.qty}</td><td>${fmt(item.unitPrice)}</td><td>${fmt(item.unitPrice * item.qty)}</td></tr>`).join('')}</tbody>
            </table>
            <div class="invoice-totals">
                <div class="invoice-total-row"><span>Subtotal</span><span>${fmt(inv.amount)}</span></div>
                <div class="invoice-total-row"><span>VAT (20%)</span><span>${fmt(inv.tax)}</span></div>
                <div class="invoice-total-row grand"><span>Total</span><span>${fmt(inv.total)}</span></div>
            </div>
        </div>
    `;
}

// --- Settings ---
function renderSettings() {
    $('#page-settings').innerHTML = `
        <div class="page-header"><h1>Account Settings</h1><p>Manage your profile and preferences</p></div>
        <div class="tab-nav" id="settingsTabs">
            <button class="tab-btn active" data-tab="profile">Profile</button>
            <button class="tab-btn" data-tab="security">Security</button>
            <button class="tab-btn" data-tab="notifications">Notifications</button>
        </div>
        <div class="tab-pane active" id="tab-profile">
            <div class="settings-card">
                <div class="settings-section">
                    <h3>Personal Information</h3>
                    <div class="form-group" style="margin-bottom:16px"><label>Full Name</label><input type="text" value="${CURRENT_USER.name}"></div>
                    <div class="form-row" style="margin-bottom:16px">
                        <div class="form-group"><label>Email</label><input type="email" value="${CURRENT_USER.email}"></div>
                        <div class="form-group"><label>Phone</label><input type="tel" value="${CURRENT_USER.phone}"></div>
                    </div>
                    <div class="form-group" style="margin-bottom:24px">
                        <label>Country</label>
                        <select><option selected>United Kingdom</option><option>Germany</option><option>France</option><option>Italy</option><option>Spain</option><option>T\u00fcrkiye</option><option>Other</option></select>
                    </div>
                    <button class="btn btn-primary" onclick="showToast('Profile updated successfully')">Save Changes</button>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="tab-security">
            <div class="settings-card">
                <div class="settings-section">
                    <h3>Change Password</h3>
                    <div class="form-group" style="margin-bottom:16px"><label>Current Password</label><input type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"></div>
                    <div class="form-row" style="margin-bottom:24px">
                        <div class="form-group"><label>New Password</label><input type="password" placeholder="Min 8 characters"></div>
                        <div class="form-group"><label>Confirm Password</label><input type="password" placeholder="Repeat password"></div>
                    </div>
                    <button class="btn btn-primary" onclick="showToast('Password updated successfully')">Update Password</button>
                </div>
                <div class="settings-section" style="margin-top:32px">
                    <h3>Two-Factor Authentication</h3>
                    <div class="toggle-row">
                        <div class="toggle-label">Enable 2FA<small>Add an extra layer of security to your account</small></div>
                        <label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-pane" id="tab-notifications">
            <div class="settings-card">
                <div class="settings-section">
                    <h3>Email Notifications</h3>
                    <div class="toggle-row"><div class="toggle-label">Order confirmations<small>Receive email when you purchase an eSIM</small></div><label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
                    <div class="toggle-row"><div class="toggle-label">Usage alerts<small>Get notified when you reach 80% of your data</small></div><label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
                    <div class="toggle-row"><div class="toggle-label">Expiry reminders<small>Reminder 3 days before your plan expires</small></div><label class="toggle-switch"><input type="checkbox" checked><span class="toggle-slider"></span></label></div>
                    <div class="toggle-row"><div class="toggle-label">Promotional emails<small>Deals, new destinations, and product updates</small></div><label class="toggle-switch"><input type="checkbox"><span class="toggle-slider"></span></label></div>
                </div>
                <button class="btn btn-primary" style="margin-top:24px" onclick="showToast('Notification preferences saved')">Save Preferences</button>
            </div>
        </div>
    `;

    $$('#settingsTabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('#settingsTabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            $$('.tab-pane').forEach(p => p.classList.remove('active'));
            $(`#tab-${btn.dataset.tab}`).classList.add('active');
        });
    });
}

// --- Support ---
function renderSupport() {
    $('#page-support').innerHTML = `
        <div class="page-header"><h1>Support</h1><p>Get help or submit a ticket</p></div>
        <div class="support-grid">
            <div>
                <div class="detail-card" style="margin-bottom:24px">
                    <div class="detail-card-header"><h3>Create a Ticket</h3></div>
                    <div class="detail-card-body">
                        <form id="ticketForm">
                            <div class="form-group" style="margin-bottom:16px"><label>Subject</label><input type="text" id="ticketSubject" placeholder="Brief description of your issue" required></div>
                            <div class="form-row" style="margin-bottom:16px">
                                <div class="form-group">
                                    <label>Category</label>
                                    <select id="ticketCategory"><option>Activation</option><option>Billing</option><option>Coverage</option><option>Other</option></select>
                                </div>
                                <div class="form-group">
                                    <label>Priority</label>
                                    <select id="ticketPriority"><option>Low</option><option selected>Medium</option><option>High</option></select>
                                </div>
                            </div>
                            <div class="form-group" style="margin-bottom:16px"><label>Message</label><textarea id="ticketMessage" rows="4" style="padding:12px 16px;border:2px solid var(--gray-200);border-radius:var(--radius-sm);font-family:inherit;font-size:14px;width:100%;resize:vertical;color:var(--gray-900)" placeholder="Describe your issue in detail..." required></textarea></div>
                            <button type="submit" class="btn btn-primary">Submit Ticket</button>
                        </form>
                    </div>
                </div>

                <h3 style="font-size:16px;font-weight:700;color:var(--gray-900);margin-bottom:12px">Your Tickets</h3>
                ${TICKETS.map(t => `
                    <div class="ticket-card" id="ticket-${t.id}">
                        <div class="ticket-card-header" onclick="toggleTicket('${t.id}')">
                            <h4>${t.subject}</h4>
                            <span class="badge badge-${t.status === 'open' ? 'open' : t.status === 'in-progress' ? 'in-progress' : 'resolved'}">${t.status}</span>
                        </div>
                        <div class="ticket-card-meta">${t.id} \u00b7 ${t.category} \u00b7 Created ${fmtDate(t.createdDate)}</div>
                        <div class="ticket-card-thread">
                            <div class="message-thread">
                                ${t.messages.map(m => `
                                    <div class="message ${m.sender}">
                                        <div>${m.text}</div>
                                        <div class="message-meta">${m.sender === 'customer' ? 'You' : 'RoamR Support'} \u00b7 ${m.date}</div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div>
                <div class="detail-card">
                    <div class="detail-card-header"><h3>Quick Help</h3></div>
                    <div class="detail-card-body">
                        <div class="faq-quick-grid">
                            <a href="index.html#faq" class="faq-quick-link">What is an eSIM?</a>
                            <a href="index.html#faq" class="faq-quick-link">How do I activate?</a>
                            <a href="index.html#faq" class="faq-quick-link">Can I keep my number?</a>
                            <a href="index.html#faq" class="faq-quick-link">How does top-up work?</a>
                            <a href="index.html#compatibility" class="faq-quick-link">Compatible devices</a>
                            <a href="index.html#support" class="faq-quick-link">Contact us 24/7</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Ticket form
    $('#ticketForm').addEventListener('submit', e => {
        e.preventDefault();
        const subject = $('#ticketSubject').value;
        const category = $('#ticketCategory').value;
        const message = $('#ticketMessage').value;
        TICKETS.unshift({
            id: 'TKT-' + (500 + TICKETS.length + 1),
            subject,
            category,
            status: 'open',
            createdDate: new Date().toISOString().split('T')[0],
            lastUpdated: new Date().toISOString().split('T')[0],
            messages: [{ sender: 'customer', date: new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }), text: message }],
        });
        showToast('Ticket submitted successfully. We\'ll get back to you soon.');
        renderSupport();
    });
}

function toggleTicket(id) {
    const card = $(`#ticket-${id}`);
    card.classList.toggle('open');
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    $('#hamburgerBtn').addEventListener('click', () => {
        $('#sidebar').classList.toggle('open');
        $('#sidebarOverlay').classList.toggle('active');
    });
    $('#sidebarOverlay').addEventListener('click', () => {
        $('#sidebar').classList.remove('open');
        $('#sidebarOverlay').classList.remove('active');
    });

    window.addEventListener('hashchange', resolveRoute);
    resolveRoute();
});
