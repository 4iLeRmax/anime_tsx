import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    width={280}
    height={490}
    // viewBox='0 0 450 400'
    backgroundColor='#f0f0f0'
    foregroundColor='#dedede'
  >
    <rect x='15' y='15' rx='20' ry='20' width='250' height='353' />
    <rect x='15' y='400' rx='3' ry='3' width='250' height='10' />
    <rect x='15' y='420' rx='3' ry='3' width='250' height='10' />
  </ContentLoader>
);

export default Skeleton;
