const coverUpload = document.getElementById('coverUpload');
const uploadPrompt = document.getElementById('uploadPrompt');
const uploadPreview = document.getElementById('uploadPreview');
const previewMedia = document.getElementById('previewMedia');

if (coverUpload) {
  coverUpload.addEventListener('change', () => {
    const file = coverUpload.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadPreview.src = e.target.result;
      uploadPreview.hidden = false;
      uploadPrompt.hidden = true;
      // Reflect the uploaded image in the live preview card too
      previewMedia.style.backgroundImage = `url(${e.target.result})`;
      previewMedia.style.backgroundSize = 'cover';
      previewMedia.style.backgroundPosition = 'center';
    };
    reader.readAsDataURL(file);
  });
}

// ===========================
// Ticket tier repeater
// ===========================
const tierList = document.getElementById('tierList');
const addTierBtn = document.getElementById('addTierBtn');

function createTierRow() {
  const row = document.createElement('div');
  row.className = 'tier-row';
  row.innerHTML = `
    <input type="text" placeholder="Tier name (e.g. VIP)" class="tier-name" required>
    <input type="number" placeholder="Price (₦)" class="tier-price" min="0" required>
    <input type="number" placeholder="Quantity" class="tier-qty" min="1" required>
    <button type="button" class="tier-remove" aria-label="Remove tier">&times;</button>
  `;
  return row;
}

if (addTierBtn) {
  addTierBtn.addEventListener('click', () => {
    const row = createTierRow();
    tierList.appendChild(row);
    bindTierRemove(row);
  });
}

function bindTierRemove(row) {
  const removeBtn = row.querySelector('.tier-remove');
  removeBtn.addEventListener('click', () => {
    if (tierList.children.length > 1) {
      row.remove();
      updatePreviewPrice();
    }
  });
}

document.querySelectorAll('.tier-row').forEach(bindTierRemove);

// ===========================
// Live preview card
// ===========================
const eventTitle = document.getElementById('eventTitle');
const eventCategory = document.getElementById('eventCategory');
const eventDate = document.getElementById('eventDate');
const eventTime = document.getElementById('eventTime');
const venueName = document.getElementById('venueName');

const previewTitle = document.getElementById('previewTitle');
const previewCategory = document.getElementById('previewCategory');
const previewMeta = document.getElementById('previewMeta');
const previewPrice = document.getElementById('previewPrice');
const previewDateBadge = document.getElementById('previewDateBadge');

const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function updatePreviewText() {
  previewTitle.textContent = eventTitle.value || 'Your event title';
  previewCategory.textContent = eventCategory.options[eventCategory.selectedIndex]?.text || 'Category';

  const venue = venueName.value || 'Venue';
  const time = eventTime.value ? formatTime(eventTime.value) : 'Time';
  previewMeta.textContent = `${venue} · ${time}`;

  if (eventDate.value) {
    const d = new Date(eventDate.value + 'T00:00:00');
    previewDateBadge.innerHTML = `<strong>${d.getDate()}</strong>${MONTHS[d.getMonth()]}`;
  }
}

function formatTime(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, '0')} ${period}`;
}

function updatePreviewPrice() {
  const prices = Array.from(document.querySelectorAll('.tier-price'))
    .map(input => Number(input.value))
    .filter(v => !isNaN(v) && v > 0);
  if (prices.length === 0) {
    previewPrice.textContent = 'Free';
  } else {
    previewPrice.textContent = `From ₦${Math.min(...prices).toLocaleString('en-NG')}`;
  }
}

[eventTitle, eventCategory, eventDate, eventTime, venueName].forEach(field => {
  if (field) field.addEventListener('input', updatePreviewText);
});
tierList.addEventListener('input', (e) => {
  if (e.target.classList.contains('tier-price')) updatePreviewPrice();
});

// ===========================
// Social promotion
// ===========================
function buildShareText() {
  const title = eventTitle.value || 'my event';
  const venue = venueName.value || 'campus';
  const dateStr = eventDate.value
    ? new Date(eventDate.value + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    : 'soon';
  return `${title} is happening at ${venue} on ${dateStr}! Grab your ticket on Ayo before it sells out.`;
}

const shareWhatsapp = document.getElementById('shareWhatsapp');
if (shareWhatsapp) {
  shareWhatsapp.addEventListener('click', () => {
    const text = encodeURIComponent(buildShareText());
    window.open(`https://wa.me/?text=${text}`, '_blank');
  });
}

const shareX = document.getElementById('shareX');
if (shareX) {
  shareX.addEventListener('click', () => {
    const text = encodeURIComponent(buildShareText());
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
  });
}

const copyCaption = document.getElementById('copyCaption');
if (copyCaption) {
  copyCaption.addEventListener('click', () => {
    const text = buildShareText() + '\n\n#Ayo #CampusEvents';
    navigator.clipboard.writeText(text).then(() => {
      const original = copyCaption.textContent;
      copyCaption.textContent = 'Copied!';
      setTimeout(() => { copyCaption.textContent = original; }, 1800);
    });
  });
}

// ===========================
// Form submit (placeholder until backend exists)
// ===========================
const createEventForm = document.getElementById('createEventForm');
if (createEventForm) {
  createEventForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Create event submitted — connect to POST /events + POST /events/:id/tiers here.');
    alert('Event publishing isn\'t connected to a backend yet. This will save and publish once that\'s ready.');
  });
}
