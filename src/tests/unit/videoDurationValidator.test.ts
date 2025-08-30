import { describe, it, expect, vi } from 'vitest';
import {
  videoDurationValidator,
  MAX_DURATION_OF_VIDEO
} from '@/utils/functions/videoDurationValidator';

describe('videoDurationValidator', () => {
  it('resolves true for videos shorter than MAX_DURATION_OF_VIDEO', async () => {
    const file = new File([], 'short-video.mp4');

    const mockVideo: any = {
      duration: 60, // 1 minuto
      preload: '',
      onloadedmetadata: null,
      onerror: null
    };
    vi.spyOn(document, 'createElement').mockReturnValue(mockVideo);
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob://fake-video');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    const promise = videoDurationValidator(file);
    mockVideo.onloadedmetadata?.();
    const result = await promise;

    expect(result).toBe(true);
  });

  it('resolves false for videos longer than MAX_DURATION_OF_VIDEO', async () => {
    const file = new File([], 'long-video.mp4');

    const mockVideo: any = {
      duration: MAX_DURATION_OF_VIDEO + 1, // 10 minutos + 1s
      preload: '',
      onloadedmetadata: null,
      onerror: null
    };
    vi.spyOn(document, 'createElement').mockReturnValue(mockVideo);
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob://fake-video');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    const promise = videoDurationValidator(file);
    mockVideo.onloadedmetadata?.();
    const result = await promise;

    expect(result).toBe(false);
  });

  it('resolves false if video fails to load', async () => {
    const file = new File([], 'fail-video.mp4');

    const mockVideo: any = {
      duration: 0,
      preload: '',
      onloadedmetadata: null,
      onerror: null
    };
    vi.spyOn(document, 'createElement').mockReturnValue(mockVideo);
    vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob://fail');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});

    const promise = videoDurationValidator(file);
    mockVideo.onerror?.();
    const result = await promise;

    expect(result).toBe(false);
  });
});
