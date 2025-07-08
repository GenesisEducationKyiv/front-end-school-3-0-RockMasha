function DefaultTrackPicture() {
  return (
    <picture>
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-1440-1x.avif 1x,
                ./src/assets/images/default_track/default_track-1440-2x.avif 2x
              "
        type="image/avif"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-1440-1x.webp 1x,
                ./src/assets/images/default_track/default_track-1440-2x.webp 2x
              "
        type="image/webp"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-1440-1x.jpg 1x,
                ./src/assets/images/default_track/default_track-1440-2x.jpg 2x
              "
        type="image/jpeg"
        media="(min-width: 1440px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-768-1x.avif 1x,
                ./src/assets/images/default_track/default_track-768-2x.avif 2x
              "
        type="image/avif"
        media="(min-width: 768px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-768-1x.webp 1x,
                ./src/assets/images/default_track/default_track-768-2x.webp 2x
              "
        type="image/webp"
        media="(min-width: 768px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-768-1x.jpg 1x,
                ./src/assets/images/default_track/default_track-768-2x.jpg 2x
              "
        type="image/jpeg"
        media="(min-width: 768px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-320-1x.avif 1x,
                ./src/assets/images/default_track/default_track-320-2x.avif 2x
              "
        type="image/avif"
        media="(max-width: 767.9px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-320-1x.webp 1x,
                ./src/assets/images/default_track/default_track-320-2x.webp 2x
              "
        type="image/webp"
        media="(min-width: 767.9px)"
      />
      <source
        srcSet="
                ./src/assets/images/default_track/default_track-320-1x.jpg 1x,
                ./src/assets/images/default_track/default_track-320-2x.jpg 2x
              "
        type="image/jpeg"
        media="(max-width: 767.9px)"
      />
      <img
        src="./src/assets/images/default_track/default_track-320-1x.jpg"
        alt="default track picture"
        loading="lazy"
      />
    </picture>
  )
}

export default DefaultTrackPicture
