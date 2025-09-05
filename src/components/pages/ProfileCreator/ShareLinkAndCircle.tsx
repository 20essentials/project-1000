import { ShareLinkOfProfile } from '@/components/pages/ProfileCreator/ShareLinkOfProfile';
import { CircleCopy } from '@/components/pages/ProfileCreator/CircleCopy';
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
