import { CurrentVideoDuration, MAX_TIME_OF_SECONDS } from './VideoDuration';

export function CircleOfCapture({
  modePhoto,
  grabando,
  capturaImagen,
  iniciaGrabacion,
  paraGrabacion
}: {
  modePhoto: boolean;
  grabando: boolean;
  capturaImagen: (...args: any[]) => void;
  iniciaGrabacion: (...args: any[]) => void;
  paraGrabacion: (...args: any[]) => void;
}) {
  return (
    <>
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
    </>
  );
}
