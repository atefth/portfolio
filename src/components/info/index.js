import React from 'react';
import Terminal from '../terminal';
import './style.scss';

export default function Info(props) {
  const { isFolderOpen } = props;
  const commands = [
    `I'm a full stack web developer!`,
    `I'm an engineer by day and vampire by night!!!`,
  ];
  const logs = [
    `With over 6+ years of experience...`,
    `...and a bachelors degree in Computer Science`,
    `Watch out for me because...`,
    `......`,
  ];
  return (
    <div
      className={
        isFolderOpen
          ? 'container info-body slide-terminal'
          : 'container info-body'
      }
    >
      <div
        className={isFolderOpen ? 'display-5' : 'hidden'}
        style={{ color: '#00d900' }}
      >
        <span style={{ color: '#818181' }}>Hi, I'm</span> Atef 👋
      </div>
      <br />
      <Terminal isFolderOpen={isFolderOpen} commands={commands} logs={logs} />
    </div>
  );
}
