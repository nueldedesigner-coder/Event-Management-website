const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.classList.toggle('open');
  });
const marqueeTrack = document.getElementById('marqueeTrack');
if (marqueeTrack) {
  marqueeTrack.innerHTML += marqueeTrack.innerHTML;
}
const chips = document.querySelectorAll('.chip');
const eventCards = document.querySelectorAll('.event-card');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const noResults = document.getElementById('noResults');

let activeCategory = 'all';
let activeQuery = '';

function applyFilters() {
  let visibleCount = 0;

  eventCards.forEach(card => {
    const matchesCategory = activeCategory === 'all' || card.dataset.cat === activeCategory;
    const matchesQuery = card.dataset.title.includes(activeQuery);
    const isVisible = matchesCategory && matchesQuery;
    card.style.display = isVisible ? '' : 'none';
    if (isVisible) visibleCount++;
  });

  if (noResults) {
    noResults.hidden = visibleCount !== 0;
  }
}

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    activeCategory = chip.dataset.cat;
    applyFilters();
  });
});

if (searchForm) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    activeQuery = searchInput.value.trim().toLowerCase();
    applyFilters();
    document.getElementById('discover').scrollIntoView({ behavior: 'smooth' });
  });
}
