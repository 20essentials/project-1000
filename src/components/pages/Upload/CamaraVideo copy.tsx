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
  const timerRef = useRef<null | NodeJS.Timeout>(null);
  const [capturaFoto, setCapturaFoto] = useState<string | null>(null);
  const [grabando, setGrabando] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const setArrayImages = useUploadVideoOrImages(st => st.setArrayImages);
  const setSrcVideo = useUploadVideoOrImages(st => st.setSrcVideo);
  const [duration, setDuration] = useState(0);

  // Array local para guardar chunks
  const chunksRef = useRef<Blob[]>([]);

  const capturaImagen = useCallback(() => {
    const imagenSrc = webcamRef.current?.getScreenshot() || null;
    setCapturaFoto(imagenSrc);
    updateIndex(SECTION_TYPE.UPLOAD);
    if (imagenSrc) {
      setArrayImages(prev => [...prev, imagenSrc]);
    }
  }, []);

  const iniciaGrabacion = useCallback(() => {
    if (!webcamRef.current || !webcamRef.current.stream) {
      console.error('La cámara no está lista');
      return;
    }
    
    timerRef.current = setInterval(() => {
      setDuration(prev => {
        if (prev + 1 >= MAX_TIME_OF_SECONDS) {
          paraGrabacion(); 
        }
        return prev + 1;
      });
    }, 1000);

    chunksRef.current = []; // resetear chunks
    setGrabando(true);

    try {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/webm'
      });
    } catch (error) {
      console.error('Error creando MediaRecorder:', error);
      return;
    }

    mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
      if (event.data.size > 0) {
        chunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      setVideoUrl(url);
      setDuration(0);
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    mediaRecorderRef.current.start();
  }, []);

  const paraGrabacion = useCallback(() => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== 'inactive'
    ) {
      mediaRecorderRef.current.stop();
    }
  }, []);

  useEffect(() => {
    if (videoUrl) {
      setSrcVideo({ srcVideo: videoUrl });
      updateIndex(SECTION_TYPE.UPLOAD);
      setGrabando(false);
    }
  }, [videoUrl]);

  const activeModePhoto = () => {
    isModePhoto(true)();
    setSrcVideo({ srcVideo: null });
  };

  const activeModeVideo = () => {
    isModePhoto(false)();
    setArrayImages([]);
  };

  return (
    <div className='create-section'>
      <Webcam
        audio={true}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        videoConstraints={{ facingMode: 'user' }}
        className='am-webcam'
      />

      {/* <div style={{ marginTop: 10 }}>
        <button onClick={capturaImagen}>Tomar Foto</button>

        {!grabando ? (
          <button onClick={iniciaGrabacion}>Iniciar Grabación</button>
        ) : (
          <button onClick={paraGrabacion}>Detener Grabación</button>
        )}
      </div> */}

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

      {!modePhoto && grabando && <CurrentVideoDuration duration={duration} />}
      {modePhoto ? (
        <aside className='circle-of-capture' onClick={capturaImagen}>
          <aside className='circle-inner'></aside>
        </aside>
      ) : !grabando ? (
        <aside className='circle-of-capture' onClick={iniciaGrabacion}>
          <aside className='circle-inner circle-inner-red'></aside>
        </aside>
      ) : (
        <aside
          className='circle-of-capture circle-of-capture-video-start'
          onClick={paraGrabacion}
        >
          <aside className='circle-inner circle-inner-blue-testing'></aside>
          <svg width='70' height='70' viewBox='0 0 120 120' className='am-border'>
            <circle
              cx='60'
              cy='60'
              r='54'
              fill='none'
              stroke='#ddd'
              strokeWidth='7'
            />
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
              style={{
                animationDuration: `${MAX_TIME_OF_SECONDS}s`
              }}
            />
          </svg>
        </aside>
      )}

      {/* {capturaFoto && (
        <div>
          <h3>Foto Capturada:</h3>
          <img src={capturaFoto} alt="captura" style={{ width: 200 }} />
        </div>
      )} */}

      {/* {videoUrl && (
        <div>
          <h3>Video Grabado:</h3>
          <video src={videoUrl} controls style={{ width: 320 }} />
        </div>
      )} */}
    </div>
  );
}
