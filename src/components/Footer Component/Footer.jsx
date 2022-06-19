import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      created by{' '}
      <a
        className="github-link"
        href="https://github.com/ismail449/github-jobs-master"
        target="_blank"
      >
        ismail449
      </a>{' '}
      -{' '}
      <a
        className="github-link link"
        href="https://devchallenges.io/paths/front-end-developer"
        target="_blank"
      >
        devChallenges.io
      </a>
    </div>
  );
};

export default Footer;
