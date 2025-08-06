import { ShareLinkOfProfile } from './ShareLinkOfProfile';
import { CircleCopy } from './CircleCopy';
import { useState } from 'react';

export function ShareLinkAndCircle() {
  const [showCircle, setShowCircle] = useState(false);

  function handleShowCircle() {
    setShowCircle(!showCircle)
    let timer = setTimeout(() => {
      setShowCircle(false);
      clearTimeout(timer)
    }, 1000)
  }

  return (
    <>
      <ShareLinkOfProfile className='share-link' handleShowCircle={handleShowCircle} />
      { showCircle && <CircleCopy />}
    </>
  );
}
