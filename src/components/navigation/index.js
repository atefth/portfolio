import React, { useState, useEffect } from 'react';
import Intent from '../link';
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as LinkedIn,
  FaStackOverflow as StackOverflow,
  FaHome,
  FaCodeBranch,
} from 'react-icons/fa';
import './style.scss';
import { css } from '@emotion/core';
import { rhythm } from '../../utils/typography';

export default function Navigation(props) {
  const { isFolderOpen } = props;
  const [zIndex, setZIndex] = useState('0 !important');

  useEffect(() => {
    if (isFolderOpen) {
      setZIndex('1 !important');
    } else {
      setZIndex('0 !important');
    }
  }, [isFolderOpen]);
  return (
    <nav className="navbar navbar-dark mx-0 px-0">
      <ul className="nav">
        <li
          className={
            isFolderOpen
              ? 'nav-item nav-github move-github'
              : 'nav-item nav-github nav-github'
          }
        >
          <a className="mr-5 icon" href="https://github.com/atefth">
            <Github size={24} />
          </a>
        </li>
        <li
          className={
            isFolderOpen
              ? 'nav-item nav-stackoverflow move-stackoverflow'
              : 'nav-item nav-stackoverflow'
          }
        >
          <a
            className="mr-5 icon"
            href="https://stackoverflow.com/users/2251689/atefth"
          >
            <StackOverflow size={24} />
          </a>
        </li>
        <li
          className={
            isFolderOpen
              ? 'nav-item nav-linkedin move-linkedin'
              : 'nav-item nav-linkedin'
          }
        >
          <a
            className="mr-5 icon"
            href="https://www.linkedin.com/in/atef-haque/"
          >
            <LinkedIn size={24} />
          </a>
        </li>
        <li
          id="nav-twitter"
          className={
            isFolderOpen
              ? 'nav-item nav-twitter move-twitter'
              : 'nav-item nav-twitter'
          }
        >
          <a className="mr-5 icon" href="https://twitter.com/AtefHaque">
            <Twitter size={24} />
          </a>
        </li>
        <li
          className={
            isFolderOpen ? 'nav-item nav-mail move-mail' : 'nav-item nav-mail'
          }
        >
          <a className="mr-5 icon" href="mailto://atefth@gmail.com">
            <Mail size={24} />
          </a>
        </li>
      </ul>
      <ul className="nav justify-content-center">
        <li
          className={
            isFolderOpen
              ? 'nav-item nav-home mx-4 move-home'
              : 'nav-item nav-home mx-4'
          }
        >
          <Intent to="/">
            <FaHome size={24} />
          </Intent>
        </li>
        <li
          className={
            isFolderOpen
              ? 'nav-item nav-projects move-projects'
              : 'nav-item nav-projects'
          }
        >
          <Intent to="/">
            <FaCodeBranch size={24} />
          </Intent>
        </li>
      </ul>
    </nav>
  );
}
