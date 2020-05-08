import React, { useState } from 'react';
import '../style.css';
import Navigation from '../components/navigation';
import FileFolder from '../components/file-folder';
import Info from '../components/info';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const Index = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(false);

  function openFolder(event) {
    setIsFolderOpen(!isFolderOpen);
  }
  return (
    <Layout>
      <Navigation isFolderOpen={isFolderOpen} />
      <Info isFolderOpen={isFolderOpen} />
      <FileFolder openFolder={openFolder} isFolderOpen={isFolderOpen} />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Atef Haque</title>
      </Helmet>
    </Layout>
  );
};

export default Index;
