export function TypeCaptureNavBottom({
  modePhoto,
  activeModePhoto,
  activeModeVideo
}: {
  modePhoto: boolean;
  activeModePhoto: () => void;
  activeModeVideo: () => void;
}) {
  return (
    <nav className='nav-of-type-of-capture'>
      <div
        className={`container-type-capture type-camera ${
          modePhoto ? 'active-button' : ''
        }`}
        onClick={activeModePhoto}
      >
        <button className='button'>Photo</button>
      </div>
      <div
        className={`container-type-capture type-video ${
          modePhoto ? '' : 'active-button'
        }`}
        onClick={activeModeVideo}
      >
        <button className='button'>Video</button>
      </div>
    </nav>
  );
}
