function Image(imageProps: { src: string; alt: string; caption?: string }) {
  const { src, alt, caption } = imageProps
  return (
    <figure>
      <img src={src} alt={alt} />
      <figcaption>{caption ?? ''}</figcaption>
    </figure>
  )
}

export default Image
