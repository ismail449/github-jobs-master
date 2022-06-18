import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './SideSection.css';

const SideSection = ({ url }) => {
  return (
    <div className="side-section">
      <Link
        className="side-section-back"
        style={{ textDecoration: 'none', color: '#1e86ff' }}
        to="/"
      >
        <KeyboardBackspaceIcon />
        <span>Back to search</span>
      </Link>

      <div className="side-section-apply-link">
        <p>How to Apply</p>
        <a href={url} target="_blank">
          Click here to apply
        </a>
      </div>
    </div>
  );
};

export default SideSection;
