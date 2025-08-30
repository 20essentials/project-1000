
export const MAX_DURATION_OF_VIDEO = 10 * 60; // 10 minutes
export const videoDurationValidator = (file: File): Promise<boolean> => {
  return new Promise(resolve => {
    const url = URL.createObjectURL(file);
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.src = url;
    video.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(video.duration <= MAX_DURATION_OF_VIDEO);
    };
    video.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(false); 
    };
  });
};