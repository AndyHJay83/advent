// Advent calendar content for each day
const adventContent = {
    1: {
        title: "Day 1: Preview Door",
        content: "<p>🎁 This is a placeholder reveal so you can preview the animation and modal content. Replace this with your real Day 1 surprise!</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis turpis vel turpis dignissim varius.</p>"
    },
    2: {
        title: "Day 2: Ancient Wisdom",
        content: "<p>In the depths of time, knowledge has been preserved for those who seek it.</p><blockquote>'Knowledge speaks, but wisdom listens.'</blockquote>"
    },
    3: {
        title: "Day 3: The First Spell",
        content: "<p>Every great magician started with a single word, a single gesture, a single moment of understanding.</p><blockquote>'Magic is believing in yourself. If you can do that, you can make anything happen.'</blockquote>"
    },
    4: {
        title: "Day 4: Hidden Realms",
        content: "<p>Beyond what we see lies a world of infinite possibility. Open your mind, and it opens to you.</p><blockquote>'There are things known and things unknown, and in between are the doors.'</blockquote>"
    },
    5: {
        title: "Day 5: The Power Within",
        content: "<p>True magic doesn't come from wands or words—it comes from within. You hold more power than you know.</p><blockquote>'The magic you're looking for is in the work you're avoiding.'</blockquote>"
    },
    6: {
        title: "Day 6: Mysteries Unfold",
        content: "<p>Each day brings new questions, and with them, new answers waiting to be discovered.</p><blockquote>'The mystery of life is not a problem to be solved, but a reality to be experienced.'</blockquote>"
    },
    7: {
        title: "Day 7: Ancient Artifacts",
        content: "<p>Some secrets are written in stone, others whispered on the wind. Both carry equal weight.</p><blockquote>'The past is never dead. It's not even past.'</blockquote>"
    },
    8: {
        title: "Day 8: The Enchanted Path",
        content: "<p>Your journey is unique. Follow the path that calls to your heart, and magic will find you.</p><blockquote>'It does not do to dwell on dreams and forget to live.'</blockquote>"
    },
    9: {
        title: "Day 9: Starlight Secrets",
        content: "<p>Under the starlit sky, all things are possible. The universe holds infinite mysteries.</p><blockquote>'We are all in the gutter, but some of us are looking at the stars.'</blockquote>"
    },
    10: {
        title: "Day 10: The Turning Point",
        content: "<p>Midway through our journey, we pause to reflect on how far we've come and how far we'll go.</p><blockquote>'The only way to do great work is to love what you do.'</blockquote>"
    },
    11: {
        title: "Day 11: Wisdom of Ages",
        content: "<p>Ancient texts speak of powers long forgotten, waiting to be rediscovered by those who believe.</p><blockquote>'The best time to plant a tree was 20 years ago. The second best time is now.'</blockquote>"
    },
    12: {
        title: "Day 12: The Hidden Key",
        content: "<p>Some doors require no key—they open for those who understand that the lock was always inside them.</p><blockquote>'The cave you fear to enter holds the treasure you seek.'</blockquote>"
    },
    13: {
        title: "Day 13: Beyond the Veil",
        content: "<p>There is a thin veil between the ordinary and the extraordinary. You've crossed it many times without knowing.</p><blockquote>'Magic is just science we don't understand yet.'</blockquote>"
    },
    14: {
        title: "Day 14: The Enchanted Hour",
        content: "<p>There are moments when time stands still, when the impossible becomes possible, when magic happens.</p><blockquote>'Time is a created thing. To say \"I don't have time\" is to say \"I don't want to.\"'</blockquote>"
    },
    15: {
        title: "Day 15: The Gathering",
        content: "<p>As we approach the heart of December, energies converge. Something wonderful is building.</p><blockquote>'Alone we can do so little; together we can do so much.'</blockquote>"
    },
    16: {
        title: "Day 16: Ancient Echoes",
        content: "<p>The whispers of the past carry forward, their messages timeless and true.</p><blockquote>'Those who cannot remember the past are condemned to repeat it.'</blockquote>"
    },
    17: {
        title: "Day 17: The Great Awakening",
        content: "<p>With each passing day, you awaken more fully to your own potential. The transformation has begun.</p><blockquote>'You have been assigned this mountain to show others it can be moved.'</blockquote>"
    },
    18: {
        title: "Day 18: The Final Stretch",
        content: "<p>We near the culmination of our journey. The mysteries deepen, the magic intensifies.</p><blockquote>'The journey of a thousand miles begins with one step.'</blockquote>"
    },
    19: {
        title: "Day 19: Convergence",
        content: "<p>All paths begin to converge. What seemed separate is revealed as one great tapestry.</p><blockquote>'Everything is connected. No one thing can change by itself.'</blockquote>"
    },
    20: {
        title: "Day 20: The Revelation",
        content: "<p>Great truths reveal themselves to those who are ready to receive them. Are you ready?</p><blockquote>'The truth will set you free, but first it will piss you off.'</blockquote>"
    },
    21: {
        title: "Day 21: The Solstice",
        content: "<p>On the longest night, the deepest magic stirs. From darkness comes light, from winter comes spring.</p><blockquote>'In the depth of winter, I finally learned that within me there lay an invincible summer.'</blockquote>"
    },
    22: {
        title: "Day 22: Almost There",
        content: "<p>The final mysteries are near. Hold fast, for the greatest revelations are yet to come.</p><blockquote>'It is during our darkest moments that we must focus to see the light.'</blockquote>"
    },
    23: {
        title: "Day 23: The Eve of Eves",
        content: "<p>Anticipation fills the air. Tomorrow holds something special, something magical, something transformative.</p><blockquote>'Hope is being able to see that there is light despite all of the darkness.'</blockquote>"
    },
    24: {
        title: "Day 24: The Final Mystery",
        type: "youtube",
        videoId: "qffoCxD_BvY"
    },
    25: {
        title: "Christmas Day: The Greatest Gift",
        content: "<p>🎄 Merry Christmas! 🎄</p><p>On this special day, may the magic you've discovered throughout December fill your heart and home with joy, love, and wonder.</p><blockquote>'The best gift is a portion of thyself.'</blockquote><p>Thank you for joining The Magician's Desk this December. May your Christmas be magical in every way.</p><p>✨ With love and magic ✨</p>"
    }
};

const TOTAL_DAYS = 25;
const OPENED_STORAGE_KEY = 'magiciansDeskOpened_v3';
const FORCE_UNLOCK_DAYS = new Set([24]);

const countdownContainer = document.getElementById('countdownContainer');
const countdownText = document.getElementById('countdownText');
const countdownClock = document.getElementById('countdownClock');
const countdownProgress = document.getElementById('countdownProgress');
const footerMessage = document.getElementById('footerMessage');

function formatTimeFromMilliseconds(ms) {
    const clamped = Math.max(0, ms);
    const totalSeconds = Math.floor(clamped / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initialise calendar on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    initializeCalendar();
    refreshCardLockStates();
    initializeModal();
    initializeCountdown();
});

// Helpers
function getOpenedCards() {
    const opened = localStorage.getItem(OPENED_STORAGE_KEY);
    return opened ? JSON.parse(opened) : [];
}

function saveOpenedCard(day) {
    const opened = new Set(getOpenedCards());
    opened.add(day);
    localStorage.setItem(OPENED_STORAGE_KEY, JSON.stringify([...opened]));
}

function hasOpenedDay(day) {
    return getOpenedCards().includes(day);
}

function isDateUnlocked(day) {
    if (FORCE_UNLOCK_DAYS.has(day)) {
        return true;
    }
    const now = new Date();
    const year = now.getUTCFullYear();
    const currentMonth = now.getUTCMonth();
    const unlockTime = Date.UTC(year, 11, day, 0, 0, 0); // December (11) at 00:00 GMT

    if (currentMonth < 11) {
        return false;
    }

    if (currentMonth > 11) {
        return true;
    }

    return now.getTime() >= unlockTime;
}

function getNextUnlockDay() {
    const now = new Date();
    const year = now.getUTCFullYear();

    for (let day = 1; day <= TOTAL_DAYS; day++) {
        if (FORCE_UNLOCK_DAYS.has(day)) {
            continue;
        }
        const unlockTime = Date.UTC(year, 11, day, 0, 0, 0);
        if (now.getTime() < unlockTime) {
            return { day, unlockTime };
        }
    }
    return null;
}

function initializeCountdown() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    refreshCardLockStates();

    const openedCards = getOpenedCards();

    if (openedCards.includes(25)) {
        countdownContainer.style.display = 'none';
        footerMessage.textContent = 'Merry Christmas, from the Mag!';
        return;
    }

    countdownContainer.style.display = 'flex';

    const now = new Date();
    const nextUnlock = getNextUnlockDay();

    if (!nextUnlock) {
        countdownText.textContent = 'Next door unlocks in';
        countdownClock.textContent = '00:00:00';
        countdownProgress.style.width = '100%';
        return;
    }

    const { day, unlockTime } = nextUnlock;
    const timeRemaining = unlockTime - now.getTime();

    countdownText.textContent = 'Next door unlocks in';

    if (timeRemaining <= 0) {
        countdownClock.textContent = '00:00:00';
        countdownProgress.style.width = '100%';
        return;
    }

    const year = now.getUTCFullYear();
    const previousUnlockTime = Date.UTC(year, 11, day - 1, 0, 0, 0);
    const interval = Math.max(1, unlockTime - previousUnlockTime);
    const progress = Math.max(0, Math.min(1, 1 - timeRemaining / interval));
    countdownProgress.style.width = `${progress * 100}%`;

    countdownClock.textContent = formatTimeFromMilliseconds(timeRemaining);
}

function refreshCardLockStates() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const day = Number(card.dataset.day);
        const unlocked = isDateUnlocked(day);

        if (unlocked) {
            card.classList.remove('locked');
        } else {
            card.classList.add('locked');
        }
    });
}

// Card creation
function initializeCalendar() {
    const grid = document.getElementById('cardsGrid');
    const days = shuffleArray(Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1));

    days.forEach(day => {
        const card = createCard(day);
        grid.appendChild(card);
    });
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function createCard(day) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.day = day;

    const unlocked = isDateUnlocked(day);
    const opened = hasOpenedDay(day);

    if (!unlocked) {
        card.classList.add('locked');
    } else {
        card.classList.remove('locked');
    }

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="card-number">${day}</div>
            </div>
            <div class="card-back">
            </div>
        </div>
    `;

    if (opened) {
        card.classList.add('flipped');
    }

    card.addEventListener('click', () => {
        if (card.classList.contains('locked')) {
            return;
        }
        openCard(card, day);
    });

    return card;
}

function openCard(card, day) {
    if (!card.classList.contains('flipped')) {
        card.classList.add('opening');
        setTimeout(() => card.classList.remove('opening'), 600);
    }

    card.classList.add('flipped');
    saveOpenedCard(day);

    setTimeout(() => {
        showModal(day);
        updateCountdown();
    }, 450);
}

// Modal handling
function showModal(day) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    const content = adventContent[day];

    if (content) {
        let html = `<h2 id="modalTitle">${content.title}</h2>`;

        if (content.description) {
            html += `<p class="content-description">${content.description}</p>`;
        }

        if (content.type === 'youtube' && content.videoId) {
            html += `
                <div class="modal-video">
                    <iframe 
                        src="https://www.youtube.com/embed/${content.videoId}" 
                        title="Day ${day} reveal" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            `;
        } else if (content.type === 'pdf' && content.fileUrl) {
            html += `
                <div class="modal-pdf">
                    <a href="${content.fileUrl}" class="pdf-link" target="_blank" rel="noopener">Download PDF</a>
                    <iframe src="${content.fileUrl}" class="pdf-embed" title="Day ${day} PDF"></iframe>
                </div>
            `;
        } else if (content.content) {
            html += `<div>${content.content}</div>`;
        } else {
            html += `<p>A special reveal awaits.</p>`;
        }

        modalBody.innerHTML = html;
    } else {
        modalBody.innerHTML = `
            <h2 id="modalTitle">Day ${day}</h2>
            <p>A mystery awaits. Check back soon.</p>
        `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (day === 25) {
        footerMessage.textContent = 'Merry Christmas, from the Mag!';
        countdownContainer.style.display = 'none';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

window.closeModal = closeModal;

function initializeModal() {
    const modalClose = document.getElementById('modalClose');
    const modal = document.getElementById('modal');

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

