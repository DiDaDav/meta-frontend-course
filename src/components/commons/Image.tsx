type ImageProps = {
  src: string
  mobileSrc?: string
  alt: string
  caption?: string
}

function Image(imageProps: ImageProps) {
  const { src, mobileSrc, alt, caption } = imageProps
  return (
    <figure className='col'>
      <picture>
        <source media='(max-width:768px)' srcSet={mobileSrc ?? src} />
        <img className='img-fluid' src={src} alt={alt} />
      </picture>
      <figcaption>{caption ?? ''}</figcaption>
    </figure>
  )
}

export default Image
