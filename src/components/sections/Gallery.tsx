import Image from 'next/image'
import { Card } from '@/components/ui/Card'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const images = [
  { src: '/gym1.jpg', alt: 'Premium gym floor' },
  { src: '/gym2.jpg', alt: 'Strength training' },
  { src: '/gym3.jpg', alt: 'Cardio zone' },
  { src: '/gym4.jpg', alt: 'Transformation' },
  { src: '/gym5.jpg', alt: 'Recovery zone' },
  { src: '/gym6.jpg', alt: 'Trainer session' },
]

export function Gallery() {
  return (
    <SectionWrapper id="gallery" className="py-16 sm:py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.22em] text-muted">GALLERY</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-text">
            Proof in the atmosphere
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Swap these placeholders with your own gym shots or transformations.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <Card
            key={img.src}
            className="group overflow-hidden p-0 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(212,175,55,0.18),0_0_26px_rgba(212,175,55,0.10)]"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-black/70 via-transparent to-transparent" />
            </div>
          </Card>
        ))}
      </div>

      {/*<p className="mt-6 text-xs text-muted">*/}
      {/*  Add files: <span className="text-text">`public/gallery-1.jpg`</span> ...{' '}*/}
      {/*  <span className="text-text">`gallery-6.jpg`</span>*/}
      {/*</p>*/}
    </SectionWrapper>
  )
}

