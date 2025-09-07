import { render, screen } from '@testing-library/react'
import { SectionUpload } from '@/components/pages/Upload/SectionUpload'
import { useUploadVideoOrImages } from '@/store/useUploadVideoOrImages'

describe('SectionUpload', () => {
  beforeEach(() => {
    useUploadVideoOrImages.setState({
      arrayImages: [],
      setArrayImages: () => {},
      srcVideo: null,
      setSrcVideo: () => {}
    })
  })

  it('renders drop message for images when modePhoto is true', () => {
    render(<SectionUpload modePhoto={true} />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Drop your images here')
  })

  it('renders drop message for video when modePhoto is false', () => {
    render(<SectionUpload modePhoto={false} />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Drop your video here')
  })

  it('renders an image when arrayImages has items', () => {
    useUploadVideoOrImages.setState({
      arrayImages: ['data:image/png;base64,test'],
      setArrayImages: () => {},
      srcVideo: null,
      setSrcVideo: () => {}
    })

    render(<SectionUpload modePhoto={true} />)
    const imgs = document.querySelectorAll('img[alt="general img"]')
    expect(imgs.length).toBeGreaterThan(0)
  })

  it('renders a video when srcVideo is set', () => {
    useUploadVideoOrImages.setState({
      arrayImages: [],
      setArrayImages: () => {},
      srcVideo: 'video-test.mp4',
      setSrcVideo: () => {}
    })

    render(<SectionUpload modePhoto={false} />)
    const video = document.querySelector('video')
    expect(video).not.toBeNull()
  })
})
