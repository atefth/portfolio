import React from 'react';
import './style.scss';

export default function FileFolder(props) {
  const { openFolder, isFolderOpen } = props;
  return (
    <div className="folder-container">
      <div
        className={
          isFolderOpen ? 'folder-body slide-folder-down' : 'folder-body'
        }
      >
        <label
          className={isFolderOpen ? 'folder expand-folder' : 'folder vibrate-3'}
        >
          <input type="checkbox" onClick={openFolder} />
          <span></span>
        </label>
      </div>
    </div>
  );
}
