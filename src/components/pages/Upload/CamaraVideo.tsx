import { useRef, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { SECTION_TYPE } from './FooterUpload';
import { useUploadVideoOrImages } from '@/store/useUploadVideoOrImages';
import { CircleOfCapture } from './CircleOfCapture';
import { TypeCaptureNavBottom } from './TypeCaptureNavBottom';

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
  const [capturaFoto, setCapturaFoto] = useState<string | null>(null);
  const [grabando, setGrabando] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const setArrayImages = useUploadVideoOrImages(st => st.setArrayImages);
  const setSrcVideo = useUploadVideoOrImages(st => st.setSrcVideo);
  const [cameraIsAllowing, setIsCameraAllowing] = useState(false);

  // Array local para guardar chunks
  const chunksRef = useRef<Blob[]>([]);

  const capturaImagen = useCallback(() => {
    if (!webcamRef.current || !webcamRef.current.stream) {
      setIsCameraAllowing(false);
      return;
    }
    setIsCameraAllowing(true);
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
      setIsCameraAllowing(false);
      return;
    }
    setIsCameraAllowing(true);
    chunksRef.current = [];
    setGrabando(true);

    try {
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: 'video/mp4'
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
      const blob = new Blob(chunksRef.current, { type: 'video/mp4' });

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        setVideoUrl(base64data);
      };
      reader.readAsDataURL(blob);
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
      {/* {
        <Webcam
          audio={true}
          ref={webcamRef}
          screenshotFormat='image/jpeg'
          videoConstraints={{ facingMode: 'user' }}
          className='am-webcam'
        />
      } */}

      <Webcam
        audio={true}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        videoConstraints={{
          facingMode: 'user',
          // width: { ideal: 1280 },
          // height: { ideal: 720 }
        }}
        className='am-webcam'
        mirrored={true}
        muted
        playsInline
      />

      {!cameraIsAllowing && (
        <p className='message-error'>
          To proceed, enable CAMERA and MICROPHONE access via your browser’s
          settings.
        </p>
      )}

      <TypeCaptureNavBottom
        modePhoto={modePhoto}
        activeModePhoto={activeModePhoto}
        activeModeVideo={activeModeVideo}
      />

      <CircleOfCapture
        modePhoto={modePhoto}
        grabando={grabando}
        capturaImagen={capturaImagen}
        iniciaGrabacion={iniciaGrabacion}
        paraGrabacion={paraGrabacion}
      />
    </div>
  );
}
