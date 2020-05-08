import React from 'react';
import './style.scss';

export default function Terminal(props) {
  const { isFolderOpen, commands, logs } = props;
  return (
    <div className="window">
      <div className="terminal">
        <p className={isFolderOpen ? 'command' : 'hidden'}>{commands[0]}</p>
        <p className={isFolderOpen ? 'log' : 'hidden'}>
          <span>
            {logs.map((log, index) => {
              return (
                <React.Fragment key={index}>
                  {log}
                  <br />
                </React.Fragment>
              );
            })}
          </span>
        </p>
        <p className={isFolderOpen ? 'command' : 'hidden'}>{commands[1]}</p>
      </div>
    </div>
  );
}
