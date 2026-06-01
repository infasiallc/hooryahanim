/* ===============================================
   HOORIYA HANIM — Site Scripts
   =============================================== */

// ---------- Product Catalog ----------
const PRODUCTS = {
  'noor-everyday-001': {
    name: 'Noor',
    subtitle: 'Ivory & Gold Daily Kurta',
    category: 'Everyday',
    price: 18500,
    image: 'fabric-2',
    description: 'A whisper of antique gold zardozi traces the neckline of this ivory handloom cotton kurta. Hand-embroidered by our master craftswoman Shahnaz, it carries the breath of a summer garden in Lahore and the ease of a piece you will reach for again and again.',
    artisan: 'Shahnaz',
    artisanQuote: 'I have been embroidering since I was nine. This piece took me eleven days.',
    fabric: 'Pure handloom cotton',
    embroidery: 'Hand-embroidered zardozi & resham',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'mahnoor-festive-002': {
    name: 'Mahnoor',
    subtitle: 'Indigo Silk Anarkali',
    category: 'Formal',
    price: 78000,
    image: 'fabric-1',
    description: 'A floor-length anarkali in deep ajrak-inspired indigo silk, hand-finished with antique-gold dabka. The bodice is fitted, the flare is generous — twelve meters of skirt that will turn at the door of every shaadi hall in the city.',
    artisan: 'Yasmeen',
    artisanQuote: 'Indigo is the colour of my mother\'s dupattas. I think of her every time I cut these joras.',
    fabric: 'Pure silk',
    embroidery: 'Dabka, naqshi, sequin work',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'gulnar-formal-003': {
    name: 'Gulnar',
    subtitle: 'Crimson Zardozi Formal',
    category: 'Formal',
    price: 185000,
    image: 'fabric-3',
    description: 'Our heaviest formal piece. Forty-five days in the making by our atelier of seven women. Hand-laid pearl and antique-gold zardozi, dori work along the daaman, and a dupatta cut from the same bolt of velvet. For the engagement, the valima, the wedding-season dinner that will be photographed.',
    artisan: 'Master Atelier — seven women',
    artisanQuote: 'The heavy joras are my favourite. Every stitch is a promise.',
    fabric: 'Pure silk velvet & raw silk',
    embroidery: 'Pearl, antique-gold zardozi, dori & dabka',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'zoya-pret-004': {
    name: 'Zoya',
    subtitle: 'Antique Gold Luxe Pret',
    category: 'Luxury Pret',
    price: 42000,
    image: 'fabric-4',
    description: 'A modern silhouette in antique-gold raw silk. Cut to be worn from a mehndi to a friend\'s milad without changing. The detail is in the cuff — hand-beaded with seed pearls over four days.',
    artisan: 'Fariha',
    artisanQuote: 'I love when a woman tells me her jora made her feel powerful.',
    fabric: 'Raw silk',
    embroidery: 'Hand-beaded cuff & neckline',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'sitara-eid-005': {
    name: 'Sitara',
    subtitle: 'Champagne Eid Edition',
    category: 'Eid',
    price: 32000,
    image: 'fabric-8',
    description: 'Soft champagne organza over silk, with hand-stitched paisley boteh motifs in resham — the curve that has lived on Pakistani dupattas for centuries. A piece for the second day of Eid, when family photographs are taken.',
    artisan: 'Sumaira',
    artisanQuote: 'My mother taught me this boteh stitch. I taught my sister. Now she works with me.',
    fabric: 'Silk organza over pure silk',
    embroidery: 'Hand-stitched paisley boteh in resham',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'saira-formal-006': {
    name: 'Saira',
    subtitle: 'Plum Velvet Gharara',
    category: 'Formal',
    price: 95000,
    image: 'fabric-6',
    description: 'A traditional gharara in deep plum velvet with a heavily-worked kameez. The gota work is done in our heritage Lucknowi style, passed down from our master craftswoman\'s grandmother.',
    artisan: 'Rabia',
    artisanQuote: 'Gota work is in my blood. My naani taught my ammi, and my ammi taught me.',
    fabric: 'Velvet & jamawar',
    embroidery: 'Lucknowi gota & marori',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'aleena-lawn-007': {
    name: 'Aleena',
    subtitle: 'Pearl & Rose Summer Lawn',
    category: 'Lawn',
    price: 16500,
    image: 'fabric-5',
    description: 'A breezy three-piece lawn in pearl with antique-gold border work and Sindhi mirror accents along the dupatta. Tailored for Islamabad summers — light, easy to layer, beautiful in photographs.',
    artisan: 'Hina',
    artisanQuote: 'Lawn season is the busiest. I am proud of every piece that leaves my hands.',
    fabric: 'Pure cotton lawn',
    embroidery: 'Border resham, Sindhi shisha & sequin',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  'mahira-formal-008': {
    name: 'Mahira',
    subtitle: 'Teal Velvet Sharara Jora',
    category: 'Formal',
    price: 68000,
    image: 'fabric-7',
    description: 'A sharara jora in deep teal velvet with hand-embroidered paisley boteh in antique gold along the neckline and hem. Designed for the woman who is the toast of her own table — the kind of jora your phupho will ask about by name.',
    artisan: 'Nazia',
    artisanQuote: 'I imagine where the woman will wear this. Then I stitch.',
    fabric: 'Pure silk velvet',
    embroidery: 'Hand-embroidered paisley in dori & sequin',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
};

// ---------- Cart Management ----------
function getCart() {
  try { return JSON.parse(localStorage.getItem('hh_cart') || '[]'); }
  catch (e) { return []; }
}

function saveCart(cart) {
  localStorage.setItem('hh_cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.querySelector('.cart-count');
  if (el) {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId, size, qty) {
  const cart = getCart();
  const key = `${productId}-${size}`;
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ key, productId, size, qty });
  }
  saveCart(cart);
}

function removeFromCart(key) {
  let cart = getCart();
  cart = cart.filter(item => item.key !== key);
  saveCart(cart);
}

function updateQty(key, qty) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function formatPKR(amount) {
  return 'PKR ' + new Intl.NumberFormat('en-PK').format(amount);
}

function calcTotals(cart) {
  const subtotal = cart.reduce((sum, item) => {
    const p = PRODUCTS[item.productId];
    return p ? sum + (p.price * item.qty) : sum;
  }, 0);
  const shipping = subtotal >= 50000 ? 0 : (subtotal > 0 ? 500 : 0);
  const total = subtotal + shipping;
  return { subtotal, shipping, total };
}

// ---------- Render Cart Table ----------
function renderCart() {
  const cart = getCart();
  const tbody = document.querySelector('.cart-table tbody');
  const empty = document.querySelector('.cart-empty');
  const wrapper = document.querySelector('.cart-table-wrap');

  if (!tbody) return;

  if (cart.length === 0) {
    if (empty) empty.style.display = 'block';
    if (wrapper) wrapper.style.display = 'none';
    return;
  }

  if (empty) empty.style.display = 'none';
  if (wrapper) wrapper.style.display = 'block';

  tbody.innerHTML = cart.map(item => {
    const p = PRODUCTS[item.productId];
    if (!p) return '';
    return `
      <tr data-key="${item.key}">
        <td>
          <div class="cart-item-info">
            <div class="cart-item-thumb"><div class="fabric-tile ${p.image}"></div></div>
            <div>
              <div class="cart-item-name">${p.name}</div>
              <div class="cart-item-meta">${p.subtitle} · Size ${item.size}</div>
              <button class="remove-link" onclick="removeFromCart('${item.key}'); renderCart(); renderSummary();">Remove</button>
            </div>
          </div>
        </td>
        <td style="font-family: var(--font-display); letter-spacing: 1.5px;">${formatPKR(p.price)}</td>
        <td>
          <div class="qty-controls" style="display:inline-flex;">
            <button onclick="updateQty('${item.key}', ${item.qty - 1}); renderCart(); renderSummary();">−</button>
            <input type="text" value="${item.qty}" readonly>
            <button onclick="updateQty('${item.key}', ${item.qty + 1}); renderCart(); renderSummary();">+</button>
          </div>
        </td>
        <td style="font-family: var(--font-display); letter-spacing: 1.5px; color: var(--burgundy);">${formatPKR(p.price * item.qty)}</td>
      </tr>
    `;
  }).join('');
}

function renderSummary() {
  const cart = getCart();
  const { subtotal, shipping, total } = calcTotals(cart);
  const setText = (sel, val) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = val;
  };
  setText('[data-summary="subtotal"]', formatPKR(subtotal));
  setText('[data-summary="shipping"]', shipping === 0 ? 'Complimentary' : formatPKR(shipping));
  setText('[data-summary="total"]', formatPKR(total));
  const itemsEl = document.querySelector('[data-summary="items"]');
  if (itemsEl) itemsEl.textContent = cart.reduce((s, i) => s + i.qty, 0) + ' items';
}

// ---------- Product Detail Page ----------
function initProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id') || 'mahnoor-formal-002';
  const p = PRODUCTS[productId];
  if (!p) return;

  const setText = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  setText('[data-product="name"]', p.name);
  setText('[data-product="subtitle"]', p.subtitle);
  setText('[data-product="price"]', formatPKR(p.price));
  setText('[data-product="description"]', p.description);
  setText('[data-product="artisan"]', p.artisan);
  setText('[data-product="artisanQuote"]', '"' + p.artisanQuote + '"');
  setText('[data-product="fabric"]', p.fabric);
  setText('[data-product="embroidery"]', p.embroidery);

  // Set fabric class
  const mainImg = document.querySelector('.main-img .fabric-tile');
  if (mainImg) mainImg.className = `fabric-tile ${p.image}`;
  document.querySelectorAll('.thumb .fabric-tile').forEach(el => el.className = `fabric-tile ${p.image}`);

  // Size buttons
  const sizeContainer = document.querySelector('.size-options');
  if (sizeContainer) {
    sizeContainer.innerHTML = p.sizes.map((s, i) => `<button class="size-btn ${i === 1 ? 'active' : ''}" data-size="${s}">${s}</button>`).join('');
    sizeContainer.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sizeContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  // Add to cart
  const addBtn = document.querySelector('[data-action="addToCart"]');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const sizeBtn = document.querySelector('.size-btn.active');
      const size = sizeBtn ? sizeBtn.dataset.size : p.sizes[0];
      const qty = parseInt(document.querySelector('[data-qty]').value) || 1;
      addToCart(productId, size, qty);
      addBtn.textContent = '✓ ADDED TO ATELIER';
      setTimeout(() => { addBtn.textContent = 'ADD TO ATELIER'; }, 1800);
    });
  }
}

// ---------- Shop Page Filter ----------
function initShopFilter() {
  const chips = document.querySelectorAll('.filter-chip');
  const cards = document.querySelectorAll('.product-card');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ---------- Checkout ----------
function initCheckout() {
  document.querySelectorAll('.payment-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
    });
  });

  const form = document.querySelector('#checkout-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cart = getCart();
      const { total } = calcTotals(cart);
      const orderNumber = 'HH' + Date.now().toString().slice(-8);
      const selectedPayment = document.querySelector('.payment-option.selected .payment-option-info .name');
      const paymentMethod = selectedPayment ? selectedPayment.textContent : 'Cash on Delivery';
      const name = document.querySelector('[name="firstName"]').value + ' ' + document.querySelector('[name="lastName"]').value;

      localStorage.setItem('hh_last_order', JSON.stringify({
        orderNumber, total, paymentMethod, name, items: cart, date: new Date().toLocaleDateString('en-PK'),
      }));
      localStorage.removeItem('hh_cart');
      window.location.href = 'confirmation.html';
    });
  }

  // Quick checkout via WhatsApp
  const whatsapp = document.querySelector('[data-whatsapp]');
  if (whatsapp) {
    whatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      const cart = getCart();
      let msg = "Assalam-o-Alaikum, I'd like to place an order with Hooriya Hanım:%0A%0A";
      cart.forEach(item => {
        const p = PRODUCTS[item.productId];
        if (p) msg += `• ${p.name} (${p.subtitle}) - Size ${item.size} - Qty ${item.qty} - ${formatPKR(p.price * item.qty)}%0A`;
      });
      const { total } = calcTotals(cart);
      msg += `%0ATotal: ${formatPKR(total)}%0A%0APlease confirm availability.`;
      window.open(`https://wa.me/923338213515?text=${msg}`, '_blank');
    });
  }
}

// ---------- Confirmation Page ----------
function initConfirmation() {
  const orderData = localStorage.getItem('hh_last_order');
  if (!orderData) return;
  const o = JSON.parse(orderData);
  const setText = (sel, val) => { const el = document.querySelector(sel); if (el) el.textContent = val; };
  setText('[data-order="number"]', o.orderNumber);
  setText('[data-order="total"]', formatPKR(o.total));
  setText('[data-order="payment"]', o.paymentMethod);
  setText('[data-order="name"]', o.name);
  setText('[data-order="date"]', o.date);
}

// ---------- Newsletter ----------
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const orig = btn.textContent;
      btn.textContent = '✓ Joined';
      form.querySelector('input').value = '';
      setTimeout(() => { btn.textContent = orig; }, 2400);
    });
  });
}

// ---------- Mobile Navigation ----------
function initMobileNav() {
  const navBar = document.querySelector('.nav-bar');
  if (!navBar || document.querySelector('.menu-toggle')) return;

  const links = [
    { label: 'Shop', href: 'shop.html' },
    { label: 'Formal &amp; Festive', href: 'shop.html#formal' },
    { label: 'The House', href: 'about.html' },
    { label: 'Contact', href: 'contact.html' },
    { label: 'Your Atelier (Cart)', href: 'cart.html' },
  ];

  // Hamburger button
  const toggle = document.createElement('button');
  toggle.className = 'menu-toggle';
  toggle.setAttribute('aria-label', 'Open menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.innerHTML = '<span></span><span></span><span></span>';

  // Drawer + overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-drawer-overlay';

  const drawer = document.createElement('nav');
  drawer.className = 'mobile-drawer';
  drawer.setAttribute('aria-label', 'Mobile menu');
  drawer.innerHTML =
    '<div class="mobile-drawer-head">' +
      '<span class="word">HOORIYA</span><span class="sub">Hanım</span>' +
      '<button class="mobile-drawer-close" aria-label="Close menu">&times;</button>' +
    '</div>' +
    '<div class="mobile-drawer-links">' +
      links.map(l => `<a href="${l.href}">${l.label}</a>`).join('') +
    '</div>';

  // Insert toggle as first item in the nav bar
  navBar.insertBefore(toggle, navBar.firstChild);
  document.body.appendChild(overlay);
  document.body.appendChild(drawer);

  const open = () => {
    drawer.classList.add('open');
    overlay.classList.add('open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', open);
  overlay.addEventListener('click', close);
  drawer.querySelector('.mobile-drawer-close').addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  initMobileNav();
  initNewsletter();
  if (document.body.dataset.page === 'product') initProductDetail();
  if (document.body.dataset.page === 'shop') initShopFilter();
  if (document.body.dataset.page === 'cart') { renderCart(); renderSummary(); }
  if (document.body.dataset.page === 'checkout') { renderSummary(); initCheckout(); }
  if (document.body.dataset.page === 'confirmation') initConfirmation();
});
