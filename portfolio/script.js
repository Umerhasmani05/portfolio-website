 const words = ["Web Applications","User Experiences", "Web Development"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typeTarget = document.getElementById('typewriter-text');
        const cursor = document.getElementById('cursor');

        function type() {
            const currentWord = words[wordIndex];
            const displayWord = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);

            typeTarget.textContent = displayWord;

            if (!isDeleting) {
                charIndex++;
            } else {
                charIndex--;
            }

            if (!isDeleting && charIndex > currentWord.length) {
                // Done typing word, start deleting after a pause
                isDeleting = true;
                setTimeout(type, 1500); // Pause time
            } else if (isDeleting && charIndex === 0) {
                // Done deleting word, move to next word
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Time before starting next word
            } else {
                // Keep typing or deleting
                const speed = isDeleting ? 75 : 120; // Deletion speed vs typing speed
                setTimeout(type, speed);
            }
        }

        // Initialize the typewriter effect on window load
        window.onload = function() {
            // Start the typewriter effect
            type();

            // Set up smooth scrolling for internal links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        };
