import { useRef, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { SECTION_TYPE } from './FooterUpload';
import { useUploadVideoOrImages } from '@/store/useUploadVideoOrImages';
import { CurrentVideoDuration } from './VideoDuration';
import { MAX_TIME_OF_SECONDS } from './VideoDuration';

export default function CamaraVideo({
  updateIndex,
  modePhoto,
  isModePhoto
}: {
  updateIndex: (index: number) => void;
  modePhoto: boolean;
  isModePhoto: (mode: boolean) => () => void;
}) {
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const [capturaFoto, setCapturaFoto] = useState<string | null>(null);
  const [grabando, setGrabando] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [cameraIsAllowing, setIsCameraAllowing] = useState(false);

  const setArrayImages = useUploadVideoOrImages(st => st.setArrayImages);
  const setSrcVideo = useUploadVideoOrImages(st => st.setSrcVideo);

  const capturaImagen = useCallback(() => {
    if (!webcamRef.current || !webcamRef.current.stream) {
      setIsCameraAllowing(false);
      return;
    }
    setIsCameraAllowing(true);
    const imagenSrc = webcamRef.current.getScreenshot() || null;
    setCapturaFoto(imagenSrc);
    updateIndex(SECTION_TYPE.UPLOAD);
    if (imagenSrc) setArrayImages(prev => [...prev, imagenSrc]);
  }, [updateIndex, setArrayImages]);

  const iniciaGrabacion = useCallback(() => {
    if (!webcamRef.current || !webcamRef.current.stream) {
      console.error('La cámara no está lista');
      setIsCameraAllowing(false);
      return;
    }
    setIsCameraAllowing(true);
    chunksRef.current = [];
    setGrabando(true);

    try {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm;codecs=vp8,opus'
      });
    } catch (error) {
      console.error('Error creando MediaRecorder:', error);
      return;
    }

    mediaRecorderRef.current.ondataavailable = event => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' });
      const reader = new FileReader();
      reader.onloadend = () => setVideoUrl(reader.result as string);
      reader.readAsDataURL(blob);
    };

    mediaRecorderRef.current.start();
  }, []);

  const paraGrabacion = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
  }, []);

  useEffect(() => {
    if (videoUrl) {
      setSrcVideo({ srcVideo: videoUrl });
      updateIndex(SECTION_TYPE.UPLOAD);
      setGrabando(false);
    }
  }, [videoUrl, setSrcVideo, updateIndex]);

  const activeModePhoto = () => {
    isModePhoto(true)();
    setSrcVideo({ srcVideo: null });
  };

  const activeModeVideo = () => {
    isModePhoto(false)();
    setArrayImages([]);
  };

  useEffect(() => {
    async function requestCameraAccess() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: true
        });
        setIsCameraAllowing(true);
        if (webcamRef.current) webcamRef.current.stream = stream;
      } catch (error) {
        console.error('El usuario no permitió acceso a la cámara:', error);
        setIsCameraAllowing(false);
      }
    }
    requestCameraAccess();
  }, []);

  return (
    <div className='create-section'>
      <Webcam
        audio
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        videoConstraints={{ facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } }}
        className='am-webcam'
        mirrored
        muted
        playsInline
      />

      {!cameraIsAllowing && (
        <p
          className='message-error'
          onClick={async () => alert('Por favor permite el acceso a la cámara.')}
        >
          Camera access is disabled. To continue, allow camera access from your
          browser’s site settings
        </p>
      )}

      <nav className='nav-of-type-of-capture'>
        <div
          className={`container-type-capture type-camera ${modePhoto ? 'active-button' : ''}`}
          onClick={activeModePhoto}
        >
          <button className='button'>Photo</button>
        </div>
        <div
          className={`container-type-capture type-video ${modePhoto ? '' : 'active-button'}`}
          onClick={activeModeVideo}
        >
          <button className='button'>Video</button>
        </div>
      </nav>

      {!modePhoto && grabando && (
        <CurrentVideoDuration paraGrabacion={paraGrabacion} grabando={grabando} />
      )}

      {modePhoto ? (
        <aside className='circle-of-capture' onClick={capturaImagen}>
          <aside className='circle-inner'></aside>
        </aside>
      ) : !grabando ? (
        <aside className='circle-of-capture' onClick={iniciaGrabacion}>
          <aside className='circle-inner circle-inner-red'></aside>
        </aside>
      ) : (
        <aside className='circle-of-capture circle-of-capture-video-start' onClick={paraGrabacion}>
          <aside className='circle-inner circle-inner-blue-testing'></aside>
          <svg width='70' height='70' viewBox='0 0 120 120' className='am-border'>
            <circle cx='60' cy='60' r='54' fill='none' stroke='#ddd' strokeWidth='7' />
            <circle
              cx='60'
              cy='60'
              r='54'
              fill='none'
              stroke='#ff2b54'
              strokeWidth='7'
              strokeLinecap='round'
              strokeDasharray='339.292'
              strokeDashoffset='339.292'
              className='circle-dashed'
              style={{ animationDuration: `${MAX_TIME_OF_SECONDS}s` }}
            />
          </svg>
        </aside>
      )}
    </div>
  );
}
