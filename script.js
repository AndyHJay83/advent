// Advent calendar content for each day
const adventContent = {
    1: {
        title: "Day 1: The Journey Begins",
        content: "<p>Welcome to The Magician's Desk. Each day reveals a new mystery, a new secret, a new wonder.</p><blockquote>'The real magic is believing in yourself.'</blockquote>"
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
        content: "<p>There are moments when time stands still, when the impossible becomes possible, when magic happens.</p><blockquote>'Time is a created thing. To say 'I don't have time' is to say 'I don't want to.'</blockquote>"
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
        content: "<p>Congratulations, seeker. You have journeyed through all the mysteries of The Magician's Desk. The greatest secret of all is this: you were the magic all along. Every card you opened, every mystery you uncovered—it was your curiosity, your wonder, your belief that made it real.</p><blockquote>'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.'</blockquote><p>May your days be filled with wonder, your nights with dreams, and your heart with the magic that was always yours.</p>"
    },
    25: {
        title: "Christmas Day: The Greatest Gift",
        content: "<p>🎄 Merry Christmas! 🎄</p><p>On this special day, may the magic you've discovered throughout December fill your heart and home with joy, love, and wonder. The greatest gift is not in the cards you've opened, but in the moments shared, the memories made, and the love that surrounds you.</p><blockquote>'The best gift is a portion of thyself.'</blockquote><p>Thank you for joining The Magician's Desk this December. May your Christmas be magical in every way.</p><p>✨ With love and magic ✨</p>"
    }
};

// Initialize the calendar
document.addEventListener('DOMContentLoaded', function() {
    initializeCalendar();
    initializeAudio();
    initializeModal();
});

// Check if a date is unlocked (current date or past in December)
// Set to true to unlock all cards for testing
const UNLOCK_ALL_CARDS = true;

function isDateUnlocked(day) {
    // Unlock all cards if testing mode is enabled
    if (UNLOCK_ALL_CARDS) {
        return true;
    }
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-11, where 11 is December
    const currentDay = today.getDate();
    
    // Only unlock cards in December
    if (currentMonth !== 11) {
        // Day 25 (Christmas) can also unlock on December 25th
        return false;
    }
    
    // Unlock if the day has arrived or passed
    // Day 25 unlocks on December 25th
    return day <= currentDay || (day === 25 && currentDay >= 25);
}

// Get opened cards from localStorage
function getOpenedCards() {
    const opened = localStorage.getItem('magiciansDeskOpened');
    return opened ? JSON.parse(opened) : [];
}

// Save opened card to localStorage
function saveOpenedCard(day) {
    const opened = getOpenedCards();
    if (!opened.includes(day)) {
        opened.push(day);
        localStorage.setItem('magiciansDeskOpened', JSON.stringify(opened));
    }
}

// Create a card element
function createCard(day, isSpecial = false) {
    const card = document.createElement('div');
    card.className = 'card';
    if (isSpecial) {
        card.classList.add('card-special');
    }
    card.dataset.day = day;
    
    const opened = getOpenedCards();
    const unlocked = isDateUnlocked(day);
    const isOpened = opened.includes(day);
    
    if (!unlocked) {
        card.classList.add('locked');
    }
    
    if (isOpened) {
        card.classList.add('flipped');
    }
    
    // Extract plain text from HTML for preview
    const getPreviewText = (html) => {
        const temp = document.createElement('div');
        temp.innerHTML = html;
        return temp.textContent || temp.innerText || '';
    };
    
    const preview = adventContent[day] 
        ? getPreviewText(adventContent[day].content).substring(0, 60) + '...'
        : 'A mystery awaits...';
    
    const cardTitle = day === 25 ? '🎄' : `Day ${day}`;
    
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <div class="card-number">${day}</div>
            </div>
            <div class="card-back">
                <div class="card-content">
                    <h3>${cardTitle}</h3>
                    <p>${preview}</p>
                </div>
            </div>
        </div>
    `;
    
    // Add click handler
    card.addEventListener('click', function() {
        if (!card.classList.contains('locked')) {
            openCard(card, day);
        }
    });
    
    return card;
}

// Open a card with animation and effects
function openCard(card, day) {
    if (card.classList.contains('flipped')) {
        // Card is already open, show modal
        showModal(day);
        return;
    }
    
    // Add sparkle effect
    card.classList.add('sparkle', 'opening');
    
    // Flip the card
    setTimeout(() => {
        card.classList.add('flipped');
    }, 100);
    
    // Remove animation classes after animation completes
    setTimeout(() => {
        card.classList.remove('sparkle', 'opening');
    }, 1000);
    
    // Save to localStorage
    saveOpenedCard(day);
    
    // Show modal with full content
    setTimeout(() => {
        showModal(day);
    }, 600);
}

// Show modal with card content
function showModal(day) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    const content = adventContent[day];
    if (content) {
        modalBody.innerHTML = `
            <h2>${content.title}</h2>
            <div>${content.content}</div>
        `;
    } else {
        modalBody.innerHTML = `
            <h2>Day ${day}</h2>
            <p>A mystery awaits... Content for this day will be revealed soon.</p>
        `;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal - make it globally accessible
function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.height = '';
    }
}

// Make closeModal globally accessible
window.closeModal = closeModal;

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize the calendar grid
function initializeCalendar() {
    const grid = document.getElementById('cardsGrid');
    
    // Create array of days 1-24 and shuffle them
    const days = Array.from({ length: 24 }, (_, i) => i + 1);
    const shuffledDays = shuffleArray(days);
    
    // Add shuffled cards 1-24
    shuffledDays.forEach(day => {
        const card = createCard(day);
        grid.appendChild(card);
    });
    
    // Add special card 25 at the bottom (will span full width)
    const card25 = createCard(25, true);
    grid.appendChild(card25);
}

// Initialize modal
function initializeModal() {
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    const modalContent = document.querySelector('.modal-content');
    
    // Close button - use capture phase to ensure it fires first
    if (modalClose) {
        modalClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            closeModal();
            return false;
        }, true); // Use capture phase
    }
    
    // Close on background click (but not on modal-content clicks)
    if (modal) {
        modal.addEventListener('click', function(e) {
            // Only close if clicking directly on the modal background, not on modal-content
            if (e.target === modal && !modalContent.contains(e.target)) {
                closeModal();
            }
        });
    }
    
    // Close on Escape key - attach to document
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            if (modal && modal.classList.contains('active')) {
                e.preventDefault();
                closeModal();
            }
        }
    });
}

// Initialize audio
function initializeAudio() {
    const audioToggle = document.getElementById('audioToggle');
    const audio = document.getElementById('backgroundAudio');
    const audioIcon = audioToggle.querySelector('.audio-icon');
    
    let audioPlaying = false;
    
    // Try to load audio (will fail silently if file doesn't exist)
    audio.load().catch(() => {
        // Audio file doesn't exist - hide toggle or disable it
        audioToggle.style.display = 'none';
    });
    
    audioToggle.addEventListener('click', function() {
        if (audioPlaying) {
            audio.pause();
            audioIcon.textContent = '🔇';
            audioToggle.classList.remove('playing');
            audioPlaying = false;
        } else {
            // Try to play audio
            audio.play().then(() => {
                audioIcon.textContent = '🔊';
                audioToggle.classList.add('playing');
                audioPlaying = true;
            }).catch(() => {
                // Audio failed to play (file doesn't exist or autoplay blocked)
                audioToggle.style.opacity = '0.5';
                audioToggle.style.cursor = 'not-allowed';
                audioToggle.title = 'Audio file not available';
            });
        }
    });
}

