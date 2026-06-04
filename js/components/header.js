export function Header() {
  return `
    <header class="header">
            <nav class="navbar">
                <a href="#" class="navbar__logo">
                    <img src="./assets/svg/logo.svg" alt="Meetup">
                </a>
                <div class="navbar__search">
                    <div class="navbar__search-events">
                        <img src="./assets/svg/search_logo-1.svg" alt="Search">
                        <input type="text" placeholder="Search events">
                    </div>
                    <div class="navbar__search-location">
                        <input type="text" value="Mountain View, CA">
                    </div>
                    <button class="navbar__search-btn">
                        <img src="./assets/svg/search_logo.svg" alt="Search">
                    </button>
                </div>
                <div class="navbar__actions">
                    <button class="navbar__lang-btn">
                        <img src="./assets/svg/internet.svg" alt="Language">
                        <span>English</span>
                    </button>
                    <a href="#">Log in</a>
                    <button type="submit" class="navbar__signup-btn">
                        Sign up
                    </button>
                </div>
            </nav>
    </header>
  `;
}