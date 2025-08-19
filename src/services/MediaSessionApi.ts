export function updateMetadata({
  title,
  artist,
  urlPoster
}: {
  title: string;
  artist: string;
  urlPoster: string;
}) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title,
    artist,
    artwork: [
      {
        src: urlPoster,
        sizes: '128x128',
        type: 'image/avif'
      }
    ]
  });
}

// export function audioAddMediaSessionEvents({
//   audioRef
// }: {
//   audioRef: React.RefObject<HTMLAudioElement | null>;
// }) {
//   if (!audioRef.current) return;
//   const $audioElement = audioRef.current;

//   navigator.mediaSession.setActionHandler('play', () => {
//     $audioElement.play();
//     navigator.mediaSession.playbackState = 'playing';
//   });

//   navigator.mediaSession.setActionHandler('pause', () => {
//     $audioElement.pause();
//     navigator.mediaSession.playbackState = 'paused';
//   });

//   navigator.mediaSession.setActionHandler('seekbackward', details => {
//     $audioElement.currentTime = Math.max($audioElement.currentTime - 10, 0);
//   });

//   navigator.mediaSession.setActionHandler('seekforward', details => {
//     $audioElement.currentTime = Math.min(
//       $audioElement.currentTime + 10,
//       $audioElement.duration
//     );
//   });

//   navigator.mediaSession.setActionHandler('seekto', details => {
//     if (details.fastSeek && 'fastSeek' in $audioElement) {
//       $audioElement.fastSeek(details.seekTime as number);
//     } else {
//       $audioElement.currentTime = details.seekTime as number;
//     }
//   });

//   navigator.mediaSession.setActionHandler('nexttrack', () => {
//     // nextPost()
//   });

//   navigator.mediaSession.setActionHandler('previoustrack', () => {
//     //prevPost()
//   });
// }

export function videoAddMediaSessionEvents({
  videoRef,
  postVideoRef,
  callbackNextTrack,
  callBackPreviousTrack
}: {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  postVideoRef: React.RefObject<HTMLElement | null>;
  callbackNextTrack?: (...args: any[]) => void;
  callBackPreviousTrack?: (...args: any[]) => void;
}) {
  if (!videoRef.current) return;
  const $videoElement = videoRef.current;

  navigator.mediaSession.setActionHandler('play', () => {
    $videoElement.play();
    navigator.mediaSession.playbackState = 'playing';
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    $videoElement.pause();
    navigator.mediaSession.playbackState = 'paused';
  });

  navigator.mediaSession.setActionHandler('seekbackward', details => {
    $videoElement.currentTime = Math.max($videoElement.currentTime - 10, 0);
  });

  navigator.mediaSession.setActionHandler('seekforward', details => {
    $videoElement.currentTime = Math.min(
      $videoElement.currentTime + 10,
      $videoElement.duration
    );
  });

  navigator.mediaSession.setActionHandler('seekto', details => {
    if (details.fastSeek && 'fastSeek' in $videoElement) {
      $videoElement.fastSeek(details.seekTime as number);
    } else {
      $videoElement.currentTime = details.seekTime as number;
    }
  });

  navigator.mediaSession.setActionHandler('nexttrack', () => {
    if (!postVideoRef.current) return;
    if (callbackNextTrack) return callbackNextTrack();
    const nextElement = postVideoRef.current.nextElementSibling;
    nextElement && nextElement.scrollIntoView({ behavior: 'smooth' });
  });

  navigator.mediaSession.setActionHandler('previoustrack', () => {
    if (!postVideoRef.current) return;
    if (callBackPreviousTrack) return callBackPreviousTrack();
    const prevElement = postVideoRef.current.previousElementSibling;
    prevElement && prevElement.scrollIntoView({ behavior: 'smooth' });
  });
}

export function audioAddMediaSessionEvents({
  audioRef,
  postImageRef,
  callbackNextTrack,
  callBackPreviousTrack
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
  postImageRef: React.RefObject<HTMLElement | null>;
  callbackNextTrack?: (...args: any[]) => void;
  callBackPreviousTrack?: (...args: any[]) => void;
}) {
  if (!audioRef.current) return;
  const $audioElement = audioRef.current;

  navigator.mediaSession.setActionHandler('play', () => {
    $audioElement.play();
    navigator.mediaSession.playbackState = 'playing';
  });

  navigator.mediaSession.setActionHandler('pause', () => {
    $audioElement.pause();
    navigator.mediaSession.playbackState = 'paused';
  });

  navigator.mediaSession.setActionHandler('seekbackward', () => {
    $audioElement.currentTime = Math.max($audioElement.currentTime - 10, 0);
  });

  navigator.mediaSession.setActionHandler('seekforward', () => {
    $audioElement.currentTime = Math.min(
      $audioElement.currentTime + 10,
      $audioElement.duration
    );
  });

  navigator.mediaSession.setActionHandler('seekto', details => {
    if (details.fastSeek && 'fastSeek' in $audioElement) {
      $audioElement.fastSeek(details.seekTime as number);
    } else {
      $audioElement.currentTime = details.seekTime as number;
    }
  });

  navigator.mediaSession.setActionHandler('nexttrack', () => {
    if (!postImageRef.current) return;
    if (callbackNextTrack) return callbackNextTrack();
    const nextElement = postImageRef.current.nextElementSibling;
    nextElement && nextElement.scrollIntoView({ behavior: 'smooth' });
  });

  navigator.mediaSession.setActionHandler('previoustrack', () => {
    if (!postImageRef.current) return;
    if (callBackPreviousTrack) return callBackPreviousTrack();
    const prevElement = postImageRef.current.previousElementSibling;
    prevElement && prevElement.scrollIntoView({ behavior: 'smooth' });
  });
}
