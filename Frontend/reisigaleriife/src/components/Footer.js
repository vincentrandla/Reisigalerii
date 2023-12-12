import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social_icons">
        <a
          href="https://www.facebook.com/Reisigalerii"
          target="blank"
          className="facebook_link"
        >
          <img
            className="fb_image"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Facebook_logo_2014_wiki_blue.gif"
            alt="FB Logo"
          />
        </a>
        <a
          href="https://github.com/vincentrandla"
          target="blank"
          className="github_logo"
        >
          <img
            className="github_image"
            src="https://cdn.iconscout.com/icon/free/png-256/free-github-163-761603.png"
            alt="Github Logo"
          />
        </a>
      </div>
      <p className="copyright_p">
        Copyright ©2023 Vincent Randla <br />
        Reisigalerii
      </p>
    </footer>
  );
};

export default Footer;
