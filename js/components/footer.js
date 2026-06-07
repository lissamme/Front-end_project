export function Footer() {
  return `
    <footer class="footer">
      <div class="container">

        <div class="footer__top">
          <p class="footer__text">
            Create your own Meetup group.
          </p>

          <button class="footer__button">
            Get Started
          </button>
        </div>

        <div class="footer__divider"></div>

        <div class="footer__content">

          <div class="footer__column">
            <h3 class="footer__title">Your Account</h3>

            <a href="#">Sign up</a>
            <a href="#">Log in</a>
            <a href="#">Help</a>
            <a href="#">Become an Affiliate</a>
          </div>

          <div class="footer__column">
            <h3 class="footer__title">Discover</h3>

            <a href="#">Groups</a>
            <a href="#">Calendar</a>
            <a href="#">Topics</a>
            <a href="#">Cities</a>
            <a href="#">Online Events</a>
            <a href="#">Local Guides</a>
            <a href="#">Make Friends</a>
          </div>

          <div class="footer__column">
            <h3 class="footer__title">Meetup</h3>

            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Meetup Pro</a>
            <a href="#">Careers</a>
            <a href="#">Apps</a>
            <a href="#">Podcast</a>
          </div>

        </div>

        <div class="footer__social">

          <div class="footer__social-left">
            <h3 class="footer__title">Follow us</h3>

            <div class="footer__icons">

              <a href="#">
                <img src="./assets/svg/footer/follow/facebook.svg" alt="Facebook">
              </a>

              <a href="#">
                <img src="./assets/svg/footer/follow/twitter.svg" alt="Twitter">
              </a>

              <a href="#">
                <img src="./assets/svg/footer/follow/youtube.svg" alt="YouTube">
              </a>

              <a href="#">
                <img src="./assets/svg/footer/follow/insta.svg" alt="Instagram">
              </a>

              <a href="#">
                <img src="./assets/svg/footer/follow/tiktok.svg" alt="TikTok">
              </a>

            </div>
          </div>

          <div class="footer__stores">
            <a href="#">
                <img
                src="./assets/svg/footer/google-play.svg"
                alt="Google Play"
                >
            </a>
            <a href="#">
                <img
                src="./assets/svg/footer/app-store.svg"
                alt="App Store"
                >
            </a>
          </div>

        </div>

        <div class="footer__bottom">
          <span>© 2024 Meetup</span>

          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Do Not Sell or Share My Personal Data</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Help</a>
        </div>

      </div>
    </footer>
  `;
}