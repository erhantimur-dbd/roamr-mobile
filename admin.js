/* ============================================
   RoamR Admin Portal — Logic & Mock Data
   ============================================ */

// --- Mock Data ---

const CUSTOMERS = [
    { id: 'CUS-001', name: 'Emma Richardson', email: 'emma.richardson@gmail.com', phone: '+44 7911 123456', joinedDate: '2025-09-14', totalSpent: 89.94, ordersCount: 4, status: 'active' },
    { id: 'CUS-002', name: 'James Wright', email: 'james.wright@outlook.com', phone: '+44 7700 900123', joinedDate: '2025-10-02', totalSpent: 52.97, ordersCount: 3, status: 'active' },
    { id: 'CUS-003', name: 'Sofia Mueller', email: 'sofia.mueller@web.de', phone: '+49 170 1234567', joinedDate: '2025-10-18', totalSpent: 34.99, ordersCount: 2, status: 'active' },
    { id: 'CUS-004', name: 'Mehmet Yilmaz', email: 'mehmet.y@gmail.com', phone: '+90 532 123 4567', joinedDate: '2025-11-05', totalSpent: 22.98, ordersCount: 2, status: 'active' },
    { id: 'CUS-005', name: 'Charlotte Davies', email: 'charlotte.d@yahoo.co.uk', phone: '+44 7911 654321', joinedDate: '2025-11-12', totalSpent: 17.99, ordersCount: 1, status: 'active' },
    { id: 'CUS-006', name: 'Liam O\'Brien', email: 'liam.obrien@gmail.com', phone: '+353 87 1234567', joinedDate: '2025-11-20', totalSpent: 44.97, ordersCount: 3, status: 'active' },
    { id: 'CUS-007', name: 'Anna Kowalski', email: 'anna.k@wp.pl', phone: '+48 501 234567', joinedDate: '2025-12-01', totalSpent: 27.98, ordersCount: 2, status: 'active' },
    { id: 'CUS-008', name: 'Oliver Bennett', email: 'oliver.b@proton.me', phone: '+44 7800 123456', joinedDate: '2025-12-10', totalSpent: 12.99, ordersCount: 1, status: 'active' },
    { id: 'CUS-009', name: 'Elif Demir', email: 'elif.demir@hotmail.com', phone: '+90 535 987 6543', joinedDate: '2025-12-18', totalSpent: 10.99, ordersCount: 1, status: 'active' },
    { id: 'CUS-010', name: 'Thomas Martin', email: 'thomas.m@gmail.com', phone: '+33 6 12 34 56 78', joinedDate: '2026-01-05', totalSpent: 62.97, ordersCount: 3, status: 'active' },
    { id: 'CUS-011', name: 'Isabella Rossi', email: 'isabella.r@libero.it', phone: '+39 347 1234567', joinedDate: '2026-01-10', totalSpent: 24.99, ordersCount: 1, status: 'active' },
    { id: 'CUS-012', name: 'William Taylor', email: 'w.taylor@gmail.com', phone: '+44 7912 345678', joinedDate: '2026-01-15', totalSpent: 9.99, ordersCount: 1, status: 'inactive' },
    { id: 'CUS-013', name: 'Chloe Dupont', email: 'chloe.dupont@orange.fr', phone: '+33 7 98 76 54 32', joinedDate: '2026-01-22', totalSpent: 34.99, ordersCount: 1, status: 'active' },
    { id: 'CUS-014', name: 'Ayse Kaya', email: 'ayse.kaya@gmail.com', phone: '+90 543 456 7890', joinedDate: '2026-02-01', totalSpent: 5.99, ordersCount: 1, status: 'active' },
    { id: 'CUS-015', name: 'George Harris', email: 'g.harris@outlook.com', phone: '+44 7723 456789', joinedDate: '2026-02-08', totalSpent: 17.99, ordersCount: 1, status: 'active' },
];

const ORDERS = [
    { id: 'ORD-1047', customerId: 'CUS-001', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'active', amount: 14.99, orderDate: '2026-02-10', activationDate: '2026-02-12', expiryDate: '2026-02-26', esimId: 'ESIM-2047', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
    { id: 'ORD-1046', customerId: 'CUS-002', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'active', amount: 24.99, orderDate: '2026-02-08', activationDate: '2026-02-09', expiryDate: '2026-03-11', esimId: 'ESIM-2046', device: 'Samsung Galaxy S24', paymentMethod: 'Mastercard ending 8891' },
    { id: 'ORD-1045', customerId: 'CUS-010', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'active', amount: 34.99, orderDate: '2026-02-05', activationDate: '2026-02-06', expiryDate: '2026-03-08', esimId: 'ESIM-2045', device: 'iPhone 16 Pro', paymentMethod: 'Visa ending 3312' },
    { id: 'ORD-1044', customerId: 'CUS-006', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 7, data: '3 GB', mins: '120', texts: '120', status: 'active', amount: 9.99, orderDate: '2026-02-14', activationDate: '2026-02-15', expiryDate: '2026-02-22', esimId: 'ESIM-2044', device: 'Pixel 9 Pro', paymentMethod: 'Visa ending 5567' },
    { id: 'ORD-1043', customerId: 'CUS-015', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'pending', amount: 14.99, orderDate: '2026-02-18', activationDate: null, expiryDate: null, esimId: 'ESIM-2043', device: 'iPhone 14', paymentMethod: 'Apple Pay' },
    { id: 'ORD-1042', customerId: 'CUS-001', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Starter', tier: 'starter', duration: 7, data: '500 MB', mins: '30', texts: '30', status: 'expired', amount: 2.99, orderDate: '2025-12-20', activationDate: '2025-12-21', expiryDate: '2025-12-28', esimId: 'ESIM-2042', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
    { id: 'ORD-1041', customerId: 'CUS-003', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Pro', tier: 'pro', duration: 7, data: '10 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'expired', amount: 19.99, orderDate: '2025-12-15', activationDate: '2025-12-16', expiryDate: '2025-12-23', esimId: 'ESIM-2041', device: 'Samsung Galaxy S23', paymentMethod: 'PayPal' },
    { id: 'ORD-1040', customerId: 'CUS-004', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'expired', amount: 8.99, orderDate: '2025-12-01', activationDate: '2025-12-02', expiryDate: '2025-12-16', esimId: 'ESIM-2040', device: 'iPhone 13', paymentMethod: 'Visa ending 2211' },
    { id: 'ORD-1039', customerId: 'CUS-006', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Explorer', tier: 'explorer', duration: 30, data: '5 GB', mins: '200', texts: '200', status: 'expired', amount: 12.99, orderDate: '2025-11-25', activationDate: '2025-11-26', expiryDate: '2025-12-26', esimId: 'ESIM-2039', device: 'Pixel 9 Pro', paymentMethod: 'Visa ending 5567' },
    { id: 'ORD-1038', customerId: 'CUS-001', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Pro', tier: 'pro', duration: 14, data: '15 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'expired', amount: 17.99, orderDate: '2025-11-10', activationDate: '2025-11-11', expiryDate: '2025-11-25', esimId: 'ESIM-2038', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
    { id: 'ORD-1037', customerId: 'CUS-002', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Starter', tier: 'starter', duration: 7, data: '500 MB', mins: '30', texts: '30', status: 'expired', amount: 3.99, orderDate: '2025-11-01', activationDate: '2025-11-02', expiryDate: '2025-11-09', esimId: 'ESIM-2037', device: 'Samsung Galaxy S24', paymentMethod: 'Mastercard ending 8891' },
    { id: 'ORD-1036', customerId: 'CUS-007', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'expired', amount: 14.99, orderDate: '2025-12-05', activationDate: '2025-12-06', expiryDate: '2025-12-20', esimId: 'ESIM-2036', device: 'iPhone 14', paymentMethod: 'BLIK' },
    { id: 'ORD-1035', customerId: 'CUS-004', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'expired', amount: 22.99, orderDate: '2025-11-15', activationDate: '2025-11-16', expiryDate: '2025-12-16', esimId: 'ESIM-2035', device: 'iPhone 13', paymentMethod: 'Visa ending 2211' },
    { id: 'ORD-1034', customerId: 'CUS-005', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'expired', amount: 14.99, orderDate: '2025-11-20', activationDate: '2025-11-21', expiryDate: '2025-12-05', esimId: 'ESIM-2034', device: 'iPhone 12', paymentMethod: 'Mastercard ending 4455' },
    { id: 'ORD-1033', customerId: 'CUS-011', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'active', amount: 24.99, orderDate: '2026-01-28', activationDate: '2026-01-29', expiryDate: '2026-02-28', esimId: 'ESIM-2033', device: 'iPhone 15', paymentMethod: 'Apple Pay' },
    { id: 'ORD-1032', customerId: 'CUS-013', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'active', amount: 34.99, orderDate: '2026-01-25', activationDate: '2026-01-26', expiryDate: '2026-02-25', esimId: 'ESIM-2032', device: 'Samsung Galaxy Z Flip', paymentMethod: 'Visa ending 7788' },
    { id: 'ORD-1031', customerId: 'CUS-010', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Starter', tier: 'starter', duration: 7, data: '500 MB', mins: '30', texts: '30', status: 'expired', amount: 2.99, orderDate: '2026-01-10', activationDate: '2026-01-11', expiryDate: '2026-01-18', esimId: 'ESIM-2031', device: 'iPhone 16 Pro', paymentMethod: 'Visa ending 3312' },
    { id: 'ORD-1030', customerId: 'CUS-008', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'expired', amount: 9.99, orderDate: '2025-12-15', activationDate: '2025-12-16', expiryDate: '2025-12-30', esimId: 'ESIM-2030', device: 'Pixel 8', paymentMethod: 'Google Pay' },
    { id: 'ORD-1029', customerId: 'CUS-009', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'expired', amount: 8.99, orderDate: '2025-12-20', activationDate: '2025-12-21', expiryDate: '2026-01-04', esimId: 'ESIM-2029', device: 'Samsung Galaxy S23', paymentMethod: 'Visa ending 9900' },
    { id: 'ORD-1028', customerId: 'CUS-002', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'active', amount: 24.99, orderDate: '2026-02-01', activationDate: '2026-02-02', expiryDate: '2026-03-04', esimId: 'ESIM-2028', device: 'Samsung Galaxy S24', paymentMethod: 'Mastercard ending 8891' },
    { id: 'ORD-1027', customerId: 'CUS-014', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Explorer', tier: 'explorer', duration: 7, data: '3 GB', mins: '120', texts: '120', status: 'pending', amount: 5.99, orderDate: '2026-02-19', activationDate: null, expiryDate: null, esimId: 'ESIM-2027', device: 'iPhone 14', paymentMethod: 'Apple Pay' },
    { id: 'ORD-1026', customerId: 'CUS-012', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'cancelled', amount: 9.99, orderDate: '2026-01-18', activationDate: null, expiryDate: null, esimId: null, device: 'iPhone XR', paymentMethod: 'Visa ending 1122' },
    { id: 'ORD-1025', customerId: 'CUS-006', destination: 'turkiye', destinationName: 'T\u00fcrkiye', flag: '\u{1F1F9}\u{1F1F7}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'expired', amount: 22.99, orderDate: '2025-10-15', activationDate: '2025-10-16', expiryDate: '2025-11-15', esimId: 'ESIM-2025', device: 'Pixel 9 Pro', paymentMethod: 'Visa ending 5567' },
    { id: 'ORD-1024', customerId: 'CUS-001', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Pro', tier: 'pro', duration: 30, data: '20 GB', mins: 'Unlimited', texts: 'Unlimited', status: 'expired', amount: 34.99, orderDate: '2025-10-01', activationDate: '2025-10-02', expiryDate: '2025-11-01', esimId: 'ESIM-2024', device: 'iPhone 15 Pro', paymentMethod: 'Visa ending 4242' },
    { id: 'ORD-1023', customerId: 'CUS-010', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'expired', amount: 14.99, orderDate: '2025-12-20', activationDate: '2025-12-21', expiryDate: '2026-01-04', esimId: 'ESIM-2023', device: 'iPhone 16 Pro', paymentMethod: 'Visa ending 3312' },
    { id: 'ORD-1022', customerId: 'CUS-003', destination: 'europe', destinationName: 'Europe', flag: '\u{1F1EA}\u{1F1FA}', plan: 'Explorer', tier: 'explorer', duration: 14, data: '4 GB', mins: '150', texts: '150', status: 'active', amount: 14.99, orderDate: '2026-02-12', activationDate: '2026-02-13', expiryDate: '2026-02-27', esimId: 'ESIM-2022', device: 'Samsung Galaxy S23', paymentMethod: 'PayPal' },
    { id: 'ORD-1021', customerId: 'CUS-007', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Explorer', tier: 'explorer', duration: 30, data: '5 GB', mins: '200', texts: '200', status: 'active', amount: 12.99, orderDate: '2026-02-03', activationDate: '2026-02-04', expiryDate: '2026-03-06', esimId: 'ESIM-2021', device: 'iPhone 14', paymentMethod: 'BLIK' },
    { id: 'ORD-1020', customerId: 'CUS-015', destination: 'uk', destinationName: 'United Kingdom', flag: '\u{1F1EC}\u{1F1E7}', plan: 'Starter', tier: 'starter', duration: 7, data: '500 MB', mins: '30', texts: '30', status: 'expired', amount: 2.99, orderDate: '2026-01-20', activationDate: '2026-01-21', expiryDate: '2026-01-28', esimId: 'ESIM-2020', device: 'iPhone 14', paymentMethod: 'Apple Pay' },
];

const ESIMS = ORDERS.filter(o => o.esimId).map(o => {
    const isActive = o.status === 'active';
    const dataNum = parseFloat(o.data) || 20;
    return {
        id: o.esimId,
        orderId: o.id,
        customerId: o.customerId,
        iccid: '89441100' + Math.random().toString().slice(2, 13),
        status: o.status === 'cancelled' ? 'available' : o.status,
        destination: o.destination,
        destinationName: o.destinationName,
        flag: o.flag,
        plan: o.plan,
        tier: o.tier,
        activationDate: o.activationDate,
        expiryDate: o.expiryDate,
        dataUsed: isActive ? +(dataNum * (0.2 + Math.random() * 0.5)).toFixed(1) : dataNum,
        dataTotal: dataNum,
        minsUsed: isActive ? Math.floor((parseInt(o.mins) || 200) * (0.15 + Math.random() * 0.5)) : (parseInt(o.mins) || 200),
        minsTotal: parseInt(o.mins) || 999,
        textsUsed: isActive ? Math.floor((parseInt(o.texts) || 200) * (0.1 + Math.random() * 0.4)) : (parseInt(o.texts) || 200),
        textsTotal: parseInt(o.texts) || 999,
        daysRemaining: isActive ? Math.floor(Math.random() * 20) + 2 : 0,
        daysTotal: o.duration,
    };
});

const INVOICES = ORDERS.filter(o => o.status !== 'cancelled').map(o => {
    const tax = +(o.amount * 0.2).toFixed(2);
    return {
        id: 'INV-' + o.id.split('-')[1],
        orderId: o.id,
        customerId: o.customerId,
        customerName: CUSTOMERS.find(c => c.id === o.customerId)?.name || 'Unknown',
        issueDate: o.orderDate,
        amount: o.amount,
        tax,
        total: +(o.amount + tax).toFixed(2),
        status: o.status === 'pending' ? 'pending' : 'paid',
        items: [{ description: `${o.plan} Plan — ${o.destinationName}, ${o.duration} days`, qty: 1, unitPrice: o.amount }],
    };
});

const ACTIVITY = [
    { type: 'order', message: 'New order <strong>ORD-1043</strong> from George Harris', time: '2 minutes ago', dot: '' },
    { type: 'order', message: 'New order <strong>ORD-1027</strong> from Ayse Kaya', time: '18 minutes ago', dot: '' },
    { type: 'activation', message: '<strong>ESIM-2044</strong> activated for Liam O\'Brien', time: '1 hour ago', dot: 'green' },
    { type: 'activation', message: '<strong>ESIM-2022</strong> activated for Sofia Mueller', time: '3 hours ago', dot: 'green' },
    { type: 'payment', message: 'Payment received for <strong>INV-1045</strong> — \u00a334.99', time: '5 hours ago', dot: 'green' },
    { type: 'expiry', message: '<strong>ESIM-2042</strong> expired for Emma Richardson', time: '8 hours ago', dot: 'orange' },
    { type: 'cancellation', message: 'Order <strong>ORD-1026</strong> cancelled by William Taylor', time: '1 day ago', dot: 'red' },
    { type: 'topup', message: 'Top-up completed for <strong>ORD-1046</strong> — +5 GB', time: '1 day ago', dot: '' },
    { type: 'activation', message: '<strong>ESIM-2047</strong> activated for Emma Richardson', time: '2 days ago', dot: 'green' },
    { type: 'order', message: 'New order <strong>ORD-1047</strong> from Emma Richardson', time: '2 days ago', dot: '' },
];

// --- Helpers ---
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = n => '\u00a3' + n.toFixed(2);
const fmtDate = d => d ? new Date(d + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '\u2014';
const getCustomer = id => CUSTOMERS.find(c => c.id === id);
const getOrder = id => ORDERS.find(o => o.id === id);
const getEsim = id => ESIMS.find(e => e.id === id);
const getInvoice = id => INVOICES.find(i => i.id === id);

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

// --- Page Titles ---
const PAGE_TITLES = {
    dashboard: 'Dashboard',
    orders: 'Orders',
    customers: 'Customers',
    billing: 'Billing & Invoices',
    inventory: 'eSIM Inventory',
    analytics: 'Analytics',
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
        document.title = `RoamR Admin \u2014 ${PAGE_TITLES[page] || page}`;
        renderPage(page, id);
    }

    // Close mobile sidebar
    $('#sidebar').classList.remove('open');
    $('#sidebarOverlay').classList.remove('active');
}

function renderPage(page, id) {
    switch (page) {
        case 'dashboard': renderDashboard(); break;
        case 'orders': id ? renderOrderDetail(id) : renderOrders(); break;
        case 'customers': id ? renderCustomerDetail(id) : renderCustomers(); break;
        case 'billing': id ? renderInvoiceDetail(id) : renderBilling(); break;
        case 'inventory': renderInventory(); break;
        case 'analytics': renderAnalytics(); break;
    }
}

// --- Dashboard ---
function renderDashboard() {
    const activeEsims = ESIMS.filter(e => e.status === 'active').length;
    const monthOrders = ORDERS.filter(o => o.orderDate >= '2026-02-01');
    const monthRevenue = monthOrders.reduce((s, o) => s + o.amount, 0);
    const recentOrders = [...ORDERS].sort((a, b) => b.orderDate.localeCompare(a.orderDate)).slice(0, 5);

    $('#page-dashboard').innerHTML = `
        <div class="page-header"><h1>Dashboard</h1><p>Overview of your eSIM business</p></div>
        <div class="stat-grid">
            <div class="stat-card">
                <div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v12a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 6h18" stroke="currentColor" stroke-width="2"/></svg></div>
                <div class="stat-content"><div class="stat-label">Total Orders</div><div class="stat-value">${ORDERS.length}</div><div class="stat-change up">\u2191 12% vs last month</div></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none"><path d="M2 12C2 12 6 4 12 4s10 8 10 8-4 8-10 8S2 12 2 12z" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/></svg></div>
                <div class="stat-content"><div class="stat-label">Active eSIMs</div><div class="stat-value">${activeEsims}</div><div class="stat-change up">\u2191 8% vs last month</div></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon purple"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                <div class="stat-content"><div class="stat-label">Revenue (MTD)</div><div class="stat-value">${fmt(monthRevenue)}</div><div class="stat-change up">\u2191 18% vs last month</div></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon orange"><svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div>
                <div class="stat-content"><div class="stat-label">Total Customers</div><div class="stat-value">${CUSTOMERS.length}</div><div class="stat-change up">\u2191 5% vs last month</div></div>
            </div>
        </div>
        <div class="grid-6-4 dashboard-row">
            <div class="detail-card">
                <div class="detail-card-header"><h3>Recent Orders</h3></div>
                <table class="mini-table">
                    <thead><tr><th>Order</th><th>Customer</th><th>Destination</th><th>Status</th><th>Amount</th></tr></thead>
                    <tbody>${recentOrders.map(o => `<tr>
                        <td><a class="cell-link" onclick="navigate('orders/${o.id}')">${o.id}</a></td>
                        <td>${getCustomer(o.customerId)?.name || '\u2014'}</td>
                        <td><span class="cell-flag">${o.flag} ${o.destinationName}</span></td>
                        <td><span class="badge badge-${o.status}">${o.status}</span></td>
                        <td class="cell-bold">${fmt(o.amount)}</td>
                    </tr>`).join('')}</tbody>
                </table>
                <a href="#orders" class="view-all-link">View all orders \u2192</a>
            </div>
            <div class="detail-card">
                <div class="detail-card-header"><h3>Recent Activity</h3></div>
                <div class="detail-card-body">
                    <div class="timeline">${ACTIVITY.slice(0, 8).map(a => `
                        <div class="timeline-item">
                            <div class="timeline-dot ${a.dot}"></div>
                            <div class="timeline-content">
                                <div class="timeline-title">${a.message}</div>
                                <div class="timeline-time">${a.time}</div>
                            </div>
                        </div>`).join('')}
                    </div>
                </div>
            </div>
        </div>
        <div class="chart-placeholder">
            <svg viewBox="0 0 48 48" fill="none"><path d="M44 36H4V12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M4 28l10-8 8 6 12-10 10-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h4>Revenue Over Time</h4>
            <p>Integrate Chart.js or similar library to render revenue trends</p>
        </div>
    `;
}

// --- Orders ---
let orderSearch = '';
let orderStatusFilter = '';
let orderDestFilter = '';
let orderPage = 1;
const ORDER_PER_PAGE = 10;

function renderOrders() {
    let filtered = [...ORDERS];
    if (orderSearch) {
        const q = orderSearch.toLowerCase();
        filtered = filtered.filter(o => o.id.toLowerCase().includes(q) || (getCustomer(o.customerId)?.name || '').toLowerCase().includes(q) || (getCustomer(o.customerId)?.email || '').toLowerCase().includes(q));
    }
    if (orderStatusFilter) filtered = filtered.filter(o => o.status === orderStatusFilter);
    if (orderDestFilter) filtered = filtered.filter(o => o.destination === orderDestFilter);
    filtered.sort((a, b) => b.orderDate.localeCompare(a.orderDate));

    const totalPages = Math.ceil(filtered.length / ORDER_PER_PAGE);
    if (orderPage > totalPages) orderPage = 1;
    const start = (orderPage - 1) * ORDER_PER_PAGE;
    const paged = filtered.slice(start, start + ORDER_PER_PAGE);

    $('#page-orders').innerHTML = `
        <div class="page-header"><h1>Order Management</h1><p>View and manage all customer orders</p></div>
        <div class="data-table-wrap">
            <div class="table-toolbar">
                <div class="table-search">
                    <svg viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    <input type="text" placeholder="Search orders..." value="${orderSearch}" id="orderSearchInput">
                </div>
                <div class="table-filters">
                    <select id="orderStatusFilter">
                        <option value="">All Statuses</option>
                        <option value="pending" ${orderStatusFilter === 'pending' ? 'selected' : ''}>Pending</option>
                        <option value="active" ${orderStatusFilter === 'active' ? 'selected' : ''}>Active</option>
                        <option value="expired" ${orderStatusFilter === 'expired' ? 'selected' : ''}>Expired</option>
                        <option value="cancelled" ${orderStatusFilter === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                    </select>
                    <select id="orderDestFilter">
                        <option value="">All Destinations</option>
                        <option value="uk" ${orderDestFilter === 'uk' ? 'selected' : ''}>United Kingdom</option>
                        <option value="europe" ${orderDestFilter === 'europe' ? 'selected' : ''}>Europe</option>
                        <option value="turkiye" ${orderDestFilter === 'turkiye' ? 'selected' : ''}>T\u00fcrkiye</option>
                    </select>
                </div>
            </div>
            <div style="overflow-x:auto">
            <table class="data-table">
                <thead><tr><th>Order ID</th><th>Customer</th><th>Destination</th><th>Plan</th><th>Duration</th><th>Status</th><th>Date</th><th>Amount</th></tr></thead>
                <tbody>${paged.map(o => `<tr>
                    <td><a class="cell-link" onclick="navigate('orders/${o.id}')">${o.id}</a></td>
                    <td>${getCustomer(o.customerId)?.name || '\u2014'}</td>
                    <td><span class="cell-flag">${o.flag} ${o.destinationName}</span></td>
                    <td><span class="badge-plan ${o.tier}">${o.plan}</span></td>
                    <td>${o.duration} days</td>
                    <td><span class="badge badge-${o.status}">${o.status}</span></td>
                    <td class="cell-muted">${fmtDate(o.orderDate)}</td>
                    <td class="cell-bold">${fmt(o.amount)}</td>
                </tr>`).join('')}</tbody>
            </table>
            </div>
            <div class="table-footer">
                <span>Showing ${start + 1}\u2013${Math.min(start + ORDER_PER_PAGE, filtered.length)} of ${filtered.length} orders</span>
                <div class="table-pagination">
                    <button onclick="orderPage--;renderOrders()" ${orderPage <= 1 ? 'disabled' : ''}>Prev</button>
                    <span class="page-info">${orderPage} / ${totalPages || 1}</span>
                    <button onclick="orderPage++;renderOrders()" ${orderPage >= totalPages ? 'disabled' : ''}>Next</button>
                </div>
            </div>
        </div>
    `;

    $('#orderSearchInput').addEventListener('input', e => { orderSearch = e.target.value; orderPage = 1; renderOrders(); });
    $('#orderStatusFilter').addEventListener('change', e => { orderStatusFilter = e.target.value; orderPage = 1; renderOrders(); });
    $('#orderDestFilter').addEventListener('change', e => { orderDestFilter = e.target.value; orderPage = 1; renderOrders(); });
}

function renderOrderDetail(id) {
    const o = getOrder(id);
    if (!o) { renderOrders(); return; }
    const c = getCustomer(o.customerId);
    const e = o.esimId ? getEsim(o.esimId) : null;
    const inv = INVOICES.find(i => i.orderId === o.id);

    $('#page-orders').innerHTML = `
        <a class="back-link" onclick="navigate('orders')"><svg viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Back to orders</a>
        <div class="page-header"><h1>Order ${o.id}</h1><p>Placed on ${fmtDate(o.orderDate)}</p></div>
        <div class="order-detail-grid">
            <div class="detail-card">
                <div class="detail-card-header"><h3>Order Details</h3><span class="badge badge-${o.status}">${o.status}</span></div>
                <div class="detail-card-body">
                    <ul class="info-list">
                        <li><span class="info-label">Destination</span><span class="info-value">${o.flag} ${o.destinationName}</span></li>
                        <li><span class="info-label">Plan</span><span class="info-value"><span class="badge-plan ${o.tier}">${o.plan}</span></span></li>
                        <li><span class="info-label">Duration</span><span class="info-value">${o.duration} days</span></li>
                        <li><span class="info-label">Data</span><span class="info-value">${o.data}</span></li>
                        <li><span class="info-label">Calls</span><span class="info-value">${o.mins}${o.mins !== 'Unlimited' ? ' mins' : ''}</span></li>
                        <li><span class="info-label">Texts</span><span class="info-value">${o.texts}${o.texts !== 'Unlimited' ? '' : ''}</span></li>
                        <li><span class="info-label">Device</span><span class="info-value">${o.device}</span></li>
                        <li><span class="info-label">Payment</span><span class="info-value">${o.paymentMethod}</span></li>
                        <li><span class="info-label">Activation</span><span class="info-value">${fmtDate(o.activationDate)}</span></li>
                        <li><span class="info-label">Expiry</span><span class="info-value">${fmtDate(o.expiryDate)}</span></li>
                        <li><span class="info-label">Amount</span><span class="info-value">${fmt(o.amount)}</span></li>
                    </ul>
                    <div class="status-select-row">
                        <select id="statusSelect">
                            <option value="pending" ${o.status === 'pending' ? 'selected' : ''}>Pending</option>
                            <option value="active" ${o.status === 'active' ? 'selected' : ''}>Active</option>
                            <option value="expired" ${o.status === 'expired' ? 'selected' : ''}>Expired</option>
                            <option value="cancelled" ${o.status === 'cancelled' ? 'selected' : ''}>Cancelled</option>
                        </select>
                        <button class="btn btn-primary btn-sm" onclick="updateOrderStatus('${o.id}')">Update</button>
                    </div>
                </div>
            </div>
            <div>
                <div class="detail-card" style="margin-bottom:16px">
                    <div class="detail-card-header"><h3>Customer</h3></div>
                    <div class="detail-card-body">
                        ${c ? `<div class="profile-header" style="margin-bottom:12px">
                            <div class="profile-avatar" style="width:40px;height:40px;font-size:14px">${c.name.split(' ').map(n => n[0]).join('')}</div>
                            <div><strong style="color:var(--gray-900)">${c.name}</strong><div style="font-size:13px;color:var(--gray-500)">${c.email}</div></div>
                        </div>
                        <a class="cell-link" onclick="navigate('customers/${c.id}')" style="font-size:13px">View customer profile \u2192</a>` : '\u2014'}
                    </div>
                </div>
                ${e ? `<div class="detail-card" style="margin-bottom:16px">
                    <div class="detail-card-header"><h3>eSIM Usage</h3></div>
                    <div class="detail-card-body">
                        <p style="font-size:12px;color:var(--gray-400);margin-bottom:12px;font-family:'JetBrains Mono',monospace">${e.iccid}</p>
                        ${e.status === 'active' ? `
                        <div class="usage-bar"><div class="usage-bar-label"><span>Data</span><span class="usage-value">${e.dataUsed} / ${e.dataTotal} GB</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${usageLevel(e.dataUsed, e.dataTotal)}" style="width:${(e.dataUsed / e.dataTotal * 100).toFixed(0)}%"></div></div></div>
                        <div class="usage-bar"><div class="usage-bar-label"><span>Minutes</span><span class="usage-value">${e.minsUsed} / ${e.minsTotal === 999 ? '\u221e' : e.minsTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${e.minsTotal === 999 ? 'healthy' : usageLevel(e.minsUsed, e.minsTotal)}" style="width:${e.minsTotal === 999 ? 15 : (e.minsUsed / e.minsTotal * 100).toFixed(0)}%"></div></div></div>
                        <div class="usage-bar"><div class="usage-bar-label"><span>Texts</span><span class="usage-value">${e.textsUsed} / ${e.textsTotal === 999 ? '\u221e' : e.textsTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${e.textsTotal === 999 ? 'healthy' : usageLevel(e.textsUsed, e.textsTotal)}" style="width:${e.textsTotal === 999 ? 10 : (e.textsUsed / e.textsTotal * 100).toFixed(0)}%"></div></div></div>
                        ` : `<p style="font-size:14px;color:var(--gray-500)">${e.status === 'pending' ? 'Awaiting activation' : 'eSIM ' + e.status}</p>`}
                    </div>
                </div>` : ''}
                ${inv ? `<div class="detail-card">
                    <div class="detail-card-header"><h3>Invoice</h3></div>
                    <div class="detail-card-body">
                        <ul class="info-list">
                            <li><span class="info-label">Invoice</span><span class="info-value"><a class="cell-link" onclick="navigate('billing/${inv.id}')">${inv.id}</a></span></li>
                            <li><span class="info-label">Total</span><span class="info-value">${fmt(inv.total)}</span></li>
                            <li><span class="info-label">Status</span><span class="info-value"><span class="badge badge-${inv.status}">${inv.status}</span></span></li>
                        </ul>
                    </div>
                </div>` : ''}
            </div>
        </div>
    `;
}

function updateOrderStatus(id) {
    const newStatus = $('#statusSelect').value;
    const order = getOrder(id);
    if (order) {
        order.status = newStatus;
        showToast(`Order ${id} updated to ${newStatus}`);
        renderOrderDetail(id);
    }
}

// --- Customers ---
let custSearch = '';
let custStatusFilter = '';

function renderCustomers() {
    let filtered = [...CUSTOMERS];
    if (custSearch) {
        const q = custSearch.toLowerCase();
        filtered = filtered.filter(c => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q));
    }
    if (custStatusFilter) filtered = filtered.filter(c => c.status === custStatusFilter);

    $('#page-customers').innerHTML = `
        <div class="page-header"><h1>Customer Management</h1><p>View and manage your customer base</p></div>
        <div class="data-table-wrap">
            <div class="table-toolbar">
                <div class="table-search">
                    <svg viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l-3.5-3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
                    <input type="text" placeholder="Search customers..." value="${custSearch}" id="custSearchInput">
                </div>
                <div class="table-filters">
                    <select id="custStatusFilter">
                        <option value="">All Statuses</option>
                        <option value="active" ${custStatusFilter === 'active' ? 'selected' : ''}>Active</option>
                        <option value="inactive" ${custStatusFilter === 'inactive' ? 'selected' : ''}>Inactive</option>
                    </select>
                </div>
            </div>
            <div style="overflow-x:auto">
            <table class="data-table">
                <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Orders</th><th>Total Spent</th><th>Joined</th><th>Status</th></tr></thead>
                <tbody>${filtered.map(c => `<tr>
                    <td class="cell-muted">${c.id}</td>
                    <td><a class="cell-link" onclick="navigate('customers/${c.id}')">${c.name}</a></td>
                    <td>${c.email}</td>
                    <td class="cell-bold">${c.ordersCount}</td>
                    <td class="cell-bold">${fmt(c.totalSpent)}</td>
                    <td class="cell-muted">${fmtDate(c.joinedDate)}</td>
                    <td><span class="badge badge-${c.status}">${c.status}</span></td>
                </tr>`).join('')}</tbody>
            </table>
            </div>
            <div class="table-footer"><span>${filtered.length} customers</span></div>
        </div>
    `;

    $('#custSearchInput').addEventListener('input', e => { custSearch = e.target.value; renderCustomers(); });
    $('#custStatusFilter').addEventListener('change', e => { custStatusFilter = e.target.value; renderCustomers(); });
}

function renderCustomerDetail(id) {
    const c = CUSTOMERS.find(cu => cu.id === id);
    if (!c) { renderCustomers(); return; }
    const custOrders = ORDERS.filter(o => o.customerId === id).sort((a, b) => b.orderDate.localeCompare(a.orderDate));
    const custEsims = ESIMS.filter(e => e.customerId === id && e.status === 'active');
    const custInvoices = INVOICES.filter(i => i.customerId === id);

    $('#page-customers').innerHTML = `
        <a class="back-link" onclick="navigate('customers')"><svg viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Back to customers</a>
        <div class="customer-detail-top">
            <div class="detail-card">
                <div class="detail-card-body">
                    <div class="profile-header">
                        <div class="profile-avatar">${c.name.split(' ').map(n => n[0]).join('')}</div>
                        <div class="profile-info"><h2>${c.name}</h2><p>${c.email}</p></div>
                    </div>
                    <ul class="info-list">
                        <li><span class="info-label">Customer ID</span><span class="info-value">${c.id}</span></li>
                        <li><span class="info-label">Phone</span><span class="info-value">${c.phone}</span></li>
                        <li><span class="info-label">Joined</span><span class="info-value">${fmtDate(c.joinedDate)}</span></li>
                        <li><span class="info-label">Total Spent</span><span class="info-value">${fmt(c.totalSpent)}</span></li>
                        <li><span class="info-label">Orders</span><span class="info-value">${c.ordersCount}</span></li>
                        <li><span class="info-label">Status</span><span class="info-value"><span class="badge badge-${c.status}">${c.status}</span></span></li>
                    </ul>
                </div>
            </div>
            <div>
                <div class="tab-nav" id="custTabs">
                    <button class="tab-btn active" data-tab="orders">Orders (${custOrders.length})</button>
                    <button class="tab-btn" data-tab="usage">Active eSIMs (${custEsims.length})</button>
                    <button class="tab-btn" data-tab="billing">Billing (${custInvoices.length})</button>
                </div>
                <div class="tab-pane active" id="tab-orders">
                    ${custOrders.length ? `<table class="mini-table"><thead><tr><th>Order</th><th>Destination</th><th>Plan</th><th>Status</th><th>Amount</th></tr></thead>
                    <tbody>${custOrders.map(o => `<tr>
                        <td><a class="cell-link" onclick="navigate('orders/${o.id}')">${o.id}</a></td>
                        <td><span class="cell-flag">${o.flag} ${o.destinationName}</span></td>
                        <td><span class="badge-plan ${o.tier}">${o.plan}</span></td>
                        <td><span class="badge badge-${o.status}">${o.status}</span></td>
                        <td class="cell-bold">${fmt(o.amount)}</td>
                    </tr>`).join('')}</tbody></table>` : '<div class="empty-state"><h3>No orders yet</h3></div>'}
                </div>
                <div class="tab-pane" id="tab-usage">
                    ${custEsims.length ? custEsims.map(e => `
                        <div style="margin-bottom:16px">
                            <p style="font-size:13px;font-weight:600;color:var(--gray-900);margin-bottom:8px">${e.flag} ${e.destinationName} \u2014 ${e.plan} <span class="badge badge-active" style="margin-left:4px">active</span></p>
                            <div class="usage-bar"><div class="usage-bar-label"><span>Data</span><span class="usage-value">${e.dataUsed} / ${e.dataTotal} GB</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${usageLevel(e.dataUsed, e.dataTotal)}" style="width:${(e.dataUsed / e.dataTotal * 100).toFixed(0)}%"></div></div></div>
                            <div class="usage-bar"><div class="usage-bar-label"><span>Days remaining</span><span class="usage-value">${e.daysRemaining} / ${e.daysTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${usageLevel(e.daysTotal - e.daysRemaining, e.daysTotal)}" style="width:${((e.daysTotal - e.daysRemaining) / e.daysTotal * 100).toFixed(0)}%"></div></div></div>
                        </div>
                    `).join('') : '<div class="empty-state"><h3>No active eSIMs</h3></div>'}
                </div>
                <div class="tab-pane" id="tab-billing">
                    ${custInvoices.length ? `<table class="mini-table"><thead><tr><th>Invoice</th><th>Date</th><th>Total</th><th>Status</th></tr></thead>
                    <tbody>${custInvoices.map(i => `<tr>
                        <td><a class="cell-link" onclick="navigate('billing/${i.id}')">${i.id}</a></td>
                        <td class="cell-muted">${fmtDate(i.issueDate)}</td>
                        <td class="cell-bold">${fmt(i.total)}</td>
                        <td><span class="badge badge-${i.status}">${i.status}</span></td>
                    </tr>`).join('')}</tbody></table>` : '<div class="empty-state"><h3>No invoices</h3></div>'}
                </div>
            </div>
        </div>
    `;

    // Tab switching
    $$('#custTabs .tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('#custTabs .tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            $$('.tab-pane').forEach(p => p.classList.remove('active'));
            $(`#tab-${btn.dataset.tab}`).classList.add('active');
        });
    });
}

// --- Billing ---
function renderBilling() {
    const totalRev = INVOICES.filter(i => i.status === 'paid').reduce((s, i) => s + i.total, 0);
    const monthRev = INVOICES.filter(i => i.status === 'paid' && i.issueDate >= '2026-02-01').reduce((s, i) => s + i.total, 0);
    const outstanding = INVOICES.filter(i => i.status === 'pending').reduce((s, i) => s + i.total, 0);
    const avgOrder = totalRev / INVOICES.filter(i => i.status === 'paid').length || 0;

    $('#page-billing').innerHTML = `
        <div class="page-header"><h1>Billing & Invoices</h1><p>Track payments and manage invoices</p></div>
        <div class="stat-grid">
            <div class="stat-card"><div class="stat-icon purple"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Total Revenue</div><div class="stat-value">${fmt(totalRev)}</div></div></div>
            <div class="stat-card"><div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="stat-content"><div class="stat-label">Revenue (MTD)</div><div class="stat-value">${fmt(monthRev)}</div></div></div>
            <div class="stat-card"><div class="stat-icon orange"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Outstanding</div><div class="stat-value">${fmt(outstanding)}</div></div></div>
            <div class="stat-card"><div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none"><path d="M16 8v8M12 11v5M8 14v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Avg Order Value</div><div class="stat-value">${fmt(avgOrder)}</div></div></div>
        </div>
        <div class="data-table-wrap">
            <div class="table-toolbar"><h3 style="font-size:15px;font-weight:700;color:var(--gray-900)">All Invoices</h3></div>
            <div style="overflow-x:auto">
            <table class="data-table">
                <thead><tr><th>Invoice</th><th>Customer</th><th>Date</th><th>Subtotal</th><th>Tax</th><th>Total</th><th>Status</th></tr></thead>
                <tbody>${INVOICES.sort((a, b) => b.issueDate.localeCompare(a.issueDate)).map(i => `<tr>
                    <td><a class="cell-link" onclick="navigate('billing/${i.id}')">${i.id}</a></td>
                    <td>${i.customerName}</td>
                    <td class="cell-muted">${fmtDate(i.issueDate)}</td>
                    <td class="cell-mono">${fmt(i.amount)}</td>
                    <td class="cell-mono cell-muted">${fmt(i.tax)}</td>
                    <td class="cell-bold">${fmt(i.total)}</td>
                    <td><span class="badge badge-${i.status}">${i.status}</span></td>
                </tr>`).join('')}</tbody>
            </table>
            </div>
            <div class="table-footer"><span>${INVOICES.length} invoices</span></div>
        </div>
    `;
}

function renderInvoiceDetail(id) {
    const inv = getInvoice(id);
    if (!inv) { renderBilling(); return; }
    const c = getCustomer(inv.customerId);

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
                <div class="invoice-meta">
                    <h2>${inv.id}</h2>
                    <p>Issued: ${fmtDate(inv.issueDate)}<br>Status: <span class="badge badge-${inv.status}">${inv.status}</span></p>
                </div>
            </div>
            <div class="invoice-parties">
                <div class="invoice-party"><h4>From</h4><p><strong>RoamR Ltd</strong><br>123 Connectivity Street<br>London, EC1A 1BB<br>United Kingdom</p></div>
                <div class="invoice-party"><h4>Bill To</h4><p><strong>${c?.name || 'Customer'}</strong><br>${c?.email || ''}<br>${c?.phone || ''}</p></div>
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

// --- Inventory ---
function renderInventory() {
    const active = ESIMS.filter(e => e.status === 'active');
    const expired = ESIMS.filter(e => e.status === 'expired');
    const available = ESIMS.filter(e => e.status === 'available');
    const pending = ESIMS.filter(e => e.status === 'pending');

    $('#page-inventory').innerHTML = `
        <div class="page-header"><h1>eSIM Inventory</h1><p>Monitor and manage all eSIM profiles</p></div>
        <div class="stat-grid">
            <div class="stat-card"><div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div class="stat-content"><div class="stat-label">Active</div><div class="stat-value">${active.length}</div></div></div>
            <div class="stat-card"><div class="stat-icon orange"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Pending</div><div class="stat-value">${pending.length}</div></div></div>
            <div class="stat-card"><div class="stat-icon red"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/><path d="M15 9l-6 6M9 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Expired</div><div class="stat-value">${expired.length}</div></div></div>
            <div class="stat-card"><div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="2"/><path d="M9 7h6M9 11h6M9 15h3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Available</div><div class="stat-value">${available.length}</div></div></div>
        </div>
        <div class="data-table-wrap">
            <div class="table-toolbar"><h3 style="font-size:15px;font-weight:700;color:var(--gray-900)">All eSIMs</h3></div>
            <div style="overflow-x:auto">
            <table class="data-table">
                <thead><tr><th>eSIM ID</th><th>ICCID</th><th>Order</th><th>Customer</th><th>Destination</th><th>Plan</th><th>Status</th><th>Expiry</th></tr></thead>
                <tbody>${ESIMS.sort((a, b) => (b.activationDate || '').localeCompare(a.activationDate || '')).map(e => {
                    const c = getCustomer(e.customerId);
                    return `<tr class="esim-row" data-esim="${e.id}" style="cursor:pointer">
                        <td class="cell-bold">${e.id}</td>
                        <td class="cell-mono cell-muted">${e.iccid}</td>
                        <td><a class="cell-link" onclick="event.stopPropagation();navigate('orders/${e.orderId}')">${e.orderId}</a></td>
                        <td>${c?.name || '\u2014'}</td>
                        <td><span class="cell-flag">${e.flag} ${e.destinationName}</span></td>
                        <td><span class="badge-plan ${e.tier}">${e.plan}</span></td>
                        <td><span class="badge badge-${e.status}">${e.status}</span></td>
                        <td class="cell-muted">${fmtDate(e.expiryDate)}</td>
                    </tr>
                    <tr class="inventory-expand-row" id="expand-${e.id}"><td colspan="8"><div class="inventory-expand" id="expandContent-${e.id}">
                        ${e.status === 'active' ? `<div class="inventory-expand usage-bars" style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px">
                            <div class="usage-bar"><div class="usage-bar-label"><span>Data</span><span class="usage-value">${e.dataUsed}/${e.dataTotal} GB</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${usageLevel(e.dataUsed, e.dataTotal)}" style="width:${(e.dataUsed/e.dataTotal*100).toFixed(0)}%"></div></div></div>
                            <div class="usage-bar"><div class="usage-bar-label"><span>Minutes</span><span class="usage-value">${e.minsUsed}/${e.minsTotal === 999 ? '\u221e' : e.minsTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill healthy" style="width:${e.minsTotal === 999 ? 15 : (e.minsUsed/e.minsTotal*100).toFixed(0)}%"></div></div></div>
                            <div class="usage-bar"><div class="usage-bar-label"><span>Texts</span><span class="usage-value">${e.textsUsed}/${e.textsTotal === 999 ? '\u221e' : e.textsTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill healthy" style="width:${e.textsTotal === 999 ? 10 : (e.textsUsed/e.textsTotal*100).toFixed(0)}%"></div></div></div>
                            <div class="usage-bar"><div class="usage-bar-label"><span>Days Left</span><span class="usage-value">${e.daysRemaining}/${e.daysTotal}</span></div><div class="usage-bar-track"><div class="usage-bar-fill ${usageLevel(e.daysTotal - e.daysRemaining, e.daysTotal)}" style="width:${((e.daysTotal-e.daysRemaining)/e.daysTotal*100).toFixed(0)}%"></div></div></div>
                        </div>` : `<p style="padding:16px 20px;font-size:14px;color:var(--gray-500)">eSIM is ${e.status}</p>`}
                    </div></td></tr>`;
                }).join('')}</tbody>
            </table>
            </div>
            <div class="table-footer"><span>${ESIMS.length} eSIMs total</span></div>
        </div>
    `;

    // Expandable rows
    $$('.esim-row').forEach(row => {
        row.addEventListener('click', () => {
            const id = row.dataset.esim;
            const content = $(`#expandContent-${id}`);
            const isOpen = content.classList.contains('open');
            $$('.inventory-expand').forEach(e => e.classList.remove('open'));
            if (!isOpen) content.classList.add('open');
        });
    });
}

// --- Analytics ---
function renderAnalytics() {
    const totalRev = ORDERS.reduce((s, o) => s + o.amount, 0);
    const monthOrders = ORDERS.filter(o => o.orderDate >= '2026-02-01');
    const monthRev = monthOrders.reduce((s, o) => s + o.amount, 0);
    const avgOrder = totalRev / ORDERS.length;
    const activeEsims = ESIMS.filter(e => e.status === 'active').length;

    const byDest = { uk: 0, europe: 0, turkiye: 0 };
    const byPlan = { starter: 0, explorer: 0, pro: 0 };
    ORDERS.forEach(o => { byDest[o.destination] = (byDest[o.destination] || 0) + o.amount; byPlan[o.tier] = (byPlan[o.tier] || 0) + o.amount; });
    const maxDest = Math.max(...Object.values(byDest));
    const maxPlan = Math.max(...Object.values(byPlan));

    $('#page-analytics').innerHTML = `
        <div class="page-header"><h1>Analytics</h1><p>Business performance overview</p></div>
        <div class="stat-grid">
            <div class="stat-card"><div class="stat-icon purple"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Total Revenue</div><div class="stat-value">${fmt(totalRev)}</div><div class="stat-change up">\u2191 24% all time</div></div></div>
            <div class="stat-card"><div class="stat-icon blue"><svg viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v12a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M3 6h18" stroke="currentColor" stroke-width="2"/></svg></div><div class="stat-content"><div class="stat-label">Total Orders</div><div class="stat-value">${ORDERS.length}</div><div class="stat-change up">\u2191 12%</div></div></div>
            <div class="stat-card"><div class="stat-icon green"><svg viewBox="0 0 24 24" fill="none"><path d="M16 8v8M12 11v5M8 14v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="stat-content"><div class="stat-label">Avg Order Value</div><div class="stat-value">${fmt(avgOrder)}</div></div></div>
            <div class="stat-card"><div class="stat-icon orange"><svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/></svg></div><div class="stat-content"><div class="stat-label">Active eSIMs</div><div class="stat-value">${activeEsims}</div><div class="stat-change up">\u2191 8%</div></div></div>
        </div>
        <div class="chart-placeholder" style="margin-bottom:24px">
            <svg viewBox="0 0 48 48" fill="none"><path d="M44 36H4V12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/><path d="M4 28l10-8 8 6 12-10 10-4" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <h4>Revenue Over Time</h4>
            <p>Integrate Chart.js or similar to render revenue trends by day, week, or month</p>
        </div>
        <div class="breakdown-grid">
            <div class="detail-card">
                <div class="detail-card-header"><h3>Revenue by Destination</h3></div>
                <div class="detail-card-body">
                    <table class="breakdown-table">
                        <thead><tr><th>Destination</th><th>Distribution</th><th>Revenue</th></tr></thead>
                        <tbody>
                            <tr><td>\u{1F1EC}\u{1F1E7} United Kingdom</td><td><div class="breakdown-bar-cell"><div class="breakdown-bar"><div class="breakdown-bar-fill" style="width:${(byDest.uk/maxDest*100).toFixed(0)}%"></div></div></div></td><td>${fmt(byDest.uk)}</td></tr>
                            <tr><td>\u{1F1EA}\u{1F1FA} Europe</td><td><div class="breakdown-bar-cell"><div class="breakdown-bar"><div class="breakdown-bar-fill" style="width:${(byDest.europe/maxDest*100).toFixed(0)}%"></div></div></div></td><td>${fmt(byDest.europe)}</td></tr>
                            <tr><td>\u{1F1F9}\u{1F1F7} T\u00fcrkiye</td><td><div class="breakdown-bar-cell"><div class="breakdown-bar"><div class="breakdown-bar-fill" style="width:${(byDest.turkiye/maxDest*100).toFixed(0)}%"></div></div></div></td><td>${fmt(byDest.turkiye)}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="detail-card">
                <div class="detail-card-header"><h3>Revenue by Plan</h3></div>
                <div class="detail-card-body">
                    <table class="breakdown-table">
                        <thead><tr><th>Plan</th><th>Distribution</th><th>Revenue</th></tr></thead>
                        <tbody>
                            <tr><td><span class="badge-plan starter">Starter</span></td><td><div class="breakdown-bar-cell"><div class="breakdown-bar"><div class="breakdown-bar-fill" style="width:${(byPlan.starter/maxPlan*100).toFixed(0)}%;background:var(--gray-400)"></div></div></div></td><td>${fmt(byPlan.starter)}</td></tr>
                            <tr><td><span class="badge-plan explorer">Explorer</span></td><td><div class="breakdown-bar-cell"><div class="breakdown-bar"><div class="breakdown-bar-fill" style="width:${(byPlan.explorer/maxPlan*100).toFixed(0)}%"></div></div></div></td><td>${fmt(byPlan.explorer)}</td></tr>
                            <tr><td><span class="badge-plan pro">Pro</span></td><td><div class="breakdown-bar-cell"><div class="breakdown-bar"><div class="breakdown-bar-fill" style="width:${(byPlan.pro/maxPlan*100).toFixed(0)}%;background:#8B5CF6"></div></div></div></td><td>${fmt(byPlan.pro)}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    // Sidebar mobile toggle
    $('#hamburgerBtn').addEventListener('click', () => {
        $('#sidebar').classList.toggle('open');
        $('#sidebarOverlay').classList.toggle('active');
    });
    $('#sidebarOverlay').addEventListener('click', () => {
        $('#sidebar').classList.remove('open');
        $('#sidebarOverlay').classList.remove('active');
    });

    // Route
    window.addEventListener('hashchange', resolveRoute);
    resolveRoute();
});
