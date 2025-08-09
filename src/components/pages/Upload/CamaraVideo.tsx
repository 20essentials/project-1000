import React, { useRef, useState, useCallback } from 'react';
import Webcam from 'react-webcam';
import { SECTION_TYPE } from './FooterUpload';

export default function CamaraVideo({
  updateIndex
}: {
  updateIndex: (index: number) => void;
}) {
  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [capturaFoto, setCapturaFoto] = useState<string | null>(null);
  const [grabando, setGrabando] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const [modePhoto, setModePhoto] = useState(true);

  const isModePhoto = (mode: boolean) => () => setModePhoto(mode);

  // Array local para guardar chunks
  const chunksRef = useRef<Blob[]>([]);

  const capturaImagen = useCallback(() => {
    const imagenSrc = webcamRef.current?.getScreenshot() || null;
    setCapturaFoto(imagenSrc);
    updateIndex(SECTION_TYPE.UPLOAD);
  }, []);

  const iniciaGrabacion = useCallback(() => {
    if (!webcamRef.current || !webcamRef.current.stream) {
      console.error('La cámara no está lista');
      return;
    }

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
    setGrabando(false);
  }, []);

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
          onClick={isModePhoto(true)}
        >
          <button className='button'>Photo</button>
        </div>
        <div
          className={`container-type-capture type-video ${
            modePhoto ? '' : 'active-button'
          }`}
          onClick={isModePhoto(false)}
        >
          <button className='button'>Video</button>
        </div>
      </nav>

      {modePhoto ? (
        <aside className='circle-of-capture' onClick={capturaImagen}>
          <aside className='circle-inner'></aside>
        </aside>
      ) : (
        <aside className='circle-of-capture'>
          <aside className='circle-inner circle-inner-red'></aside>
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
