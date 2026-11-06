"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Hind } from "next/font/google";
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5';
import { testimonials, Testimonial } from './testimonialsData';

const hind = Hind({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"]
})

const getInitials = (name: string) =>
    name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase()

/** Distância circular entre o card e o card ativo (-1 = esquerda, 0 = centro, 1 = direita) */
const getOffset = (index: number, active: number, total: number) => {
    const half = Math.floor(total / 2)
    return ((index - active + total + half) % total) - half
}

const Avatar = ({ testimonial, size = 'md' }: { testimonial: Testimonial, size?: 'md' | 'lg' }) => {
    const dimension = size === 'lg' ? 'w-14 h-14 text-lg' : 'w-12 h-12 text-base'
    const pixels = size === 'lg' ? 56 : 48

    if (testimonial.photo) {
        return (
            <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={pixels}
                height={pixels}
                quality={85}
                loading='eager'
                className={`${dimension} shrink-0 rounded-full object-cover ring-2 ring-[#E0F3FD]`}
            />
        )
    }

    return (
        <div className={`${dimension} shrink-0 rounded-full bg-[#47AEDE] text-white font-recoletaBold flex items-center justify-center ring-2 ring-[#E0F3FD]`}>
            {getInitials(testimonial.name)}
        </div>
    )
}

const Author = ({ testimonial, size, interactive = true }: { testimonial: Testimonial, size?: 'md' | 'lg', interactive?: boolean }) => (
    <div className='flex items-center gap-3'>
        <Avatar testimonial={testimonial} size={size} />
        <div className='flex-1 min-w-0'>
            <p className='font-recoletaBold text-[#223740] text-lg leading-tight'>{testimonial.name}</p>
            <p className={`text-[13px] sm:text-sm text-[#47626D] ${hind.className}`}>
                {testimonial.role}{testimonial.company && <> · <span className='font-[600]'>{testimonial.company}</span></>}
            </p>
            {testimonial.context && (
                <p className={`text-xs text-[#47AEDE] font-[500] ${hind.className}`}>{testimonial.context}</p>
            )}
        </div>
        {testimonial.linkedin && (
            <a
                href={testimonial.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`LinkedIn de ${testimonial.name}`}
                onClick={event => event.stopPropagation()}
                tabIndex={interactive ? 0 : -1}
                className={`w-9 h-9 shrink-0 rounded-full bg-[#EEF7FB] text-[#47AEDE] flex items-center justify-center hover:bg-[#47AEDE] hover:text-white transition-colors ${interactive ? '' : 'pointer-events-none'}`}
            >
                <FaLinkedinIn />
            </a>
        )}
    </div>
)

const TestimonialModal = ({ testimonial, onClose }: { testimonial: Testimonial, onClose: () => void }) => {
    useEffect(() => {
        const handleKey = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
    }, [onClose])

    return (
        <div
            className='fixed inset-0 z-[100] bg-[#223740]/40 backdrop-blur-sm flex items-center justify-center p-4 animate-[appear_.3s_ease-in-out]'
            onClick={onClose}
            role='dialog'
            aria-modal='true'
            aria-label={`Depoimento de ${testimonial.name}`}
        >
            <div
                className='relative bg-white rounded-3xl shadow-2xl shadow-[#47AEDE]/20 max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10'
                onClick={event => event.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label='Fechar'
                    className='absolute top-4 right-4 w-9 h-9 rounded-full bg-[#EEF7FB] text-[#47626D] flex items-center justify-center hover:bg-[#47AEDE] hover:text-white transition-colors'
                >
                    <IoClose size={20} />
                </button>
                <RiDoubleQuotesL className='text-[#47AEDE] text-5xl mb-4' />
                <div className={`flex flex-col gap-4 text-[15px] sm:text-base text-[#47626D] leading-7 ${hind.className}`}>
                    {testimonial.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                </div>
                <hr className='my-6 border-[#E0F3FD]' />
                <Author testimonial={testimonial} size='lg' />
            </div>
        </div>
    )
}

const TestimonialSection = () => {
    const [active, setActive] = useState(0)
    const [openTestimonial, setOpenTestimonial] = useState<Testimonial | null>(null)
    const touchStartX = useRef<number | null>(null)
    const total = testimonials.length

    const goTo = useCallback((index: number) => setActive((index + total) % total), [total])
    const next = () => goTo(active + 1)
    const prev = () => goTo(active - 1)
    const closeModal = useCallback(() => setOpenTestimonial(null), [])

    const handleTouchEnd = (event: React.TouchEvent) => {
        if (touchStartX.current === null) return
        const delta = event.changedTouches[0].clientX - touchStartX.current
        if (Math.abs(delta) > 50) delta < 0 ? next() : prev()
        touchStartX.current = null
    }

    const arrowClass = 'w-12 h-12 rounded-full bg-white text-[#47AEDE] shadow-lg shadow-[#47AEDE]/15 flex items-center justify-center hover:bg-[#47AEDE] hover:text-white transition-colors'

    return (
        <div id='testimonial' className='lg:min-h-screen bg-[#EEF7FB] w-full py-[100px] sm:py-[130px]'>
            <div className="container lg:px-24 sm:px-10 px-4 mb-6 mx-auto overflow-hidden">
                <Fade duration={800} direction='left' triggerOnce>
                    <div className='flex flex-col gap-5 items-start mb-12 sm:mb-16'>
                        <div className="text-[#47AEDE] font-recoletaBlack text-3xl md:text-3xl lg:text-5xl xl:text-5xl">
                            O que dizem sobre meu trabalho
                        </div>
                        <p className={`max-w-2xl font-[300] text-[13px] sm:text-base text-[#47626D] leading-6 sm:leading-8 ${hind.className}`}>
                            Mais do que apresentar o que faço, acredito que a melhor forma de conhecer meu trabalho é ouvir quem já teve a oportunidade de trabalhar comigo.
                        </p>
                    </div>
                </Fade>

                <Fade duration={800} direction='up' triggerOnce>
                    <div className='relative'>
                        <div
                            className='grid justify-items-center [--shift:110%] lg:[--shift:92%] py-6 lg:[mask-image:linear-gradient(to_right,transparent,#000_18%,#000_82%,transparent)]'
                            onTouchStart={event => { touchStartX.current = event.touches[0].clientX }}
                            onTouchEnd={handleTouchEnd}
                            aria-roledescription='carrossel'
                        >
                            {testimonials.map((testimonial, index) => {
                                const offset = getOffset(index, active, total)
                                const isActive = offset === 0
                                const isVisible = Math.abs(offset) <= 1

                                return (
                                    <article
                                        key={testimonial.name}
                                        aria-hidden={!isActive}
                                        onClick={() => !isActive && goTo(index)}
                                        style={{
                                            transform: `translateX(calc(${offset} * var(--shift))) scale(${isActive ? 1 : 0.82})`,
                                            zIndex: isActive ? 20 : 10 - Math.abs(offset),
                                        }}
                                        className={`[grid-area:1/1] w-full max-w-[560px] bg-white rounded-3xl p-6 sm:p-9 flex flex-col transition-all duration-500 ease-out
                                            ${isActive ? 'shadow-2xl shadow-[#47AEDE]/20 opacity-100' : 'shadow-lg shadow-[#47AEDE]/10 cursor-pointer'}
                                            ${!isActive && isVisible ? 'opacity-0 lg:opacity-60 hover:lg:opacity-80' : ''}
                                            ${!isVisible ? 'opacity-0 pointer-events-none' : ''}`}
                                    >
                                        <RiDoubleQuotesL className={`text-[#47AEDE] mb-4 transition-all duration-500 ${isActive ? 'text-5xl sm:text-6xl' : 'text-4xl'}`} />

                                        <p className='font-recoletaBold text-[#223740] text-lg sm:text-xl leading-snug mb-4'>
                                            “{testimonial.highlight}”
                                        </p>

                                        <p className={`text-[14px] sm:text-[15px] text-[#47626D] leading-6 sm:leading-7 line-clamp-3 ${hind.className}`}>
                                            {testimonial.content.join(' ')}
                                        </p>

                                        <button
                                            onClick={event => { event.stopPropagation(); setOpenTestimonial(testimonial) }}
                                            tabIndex={isActive ? 0 : -1}
                                            className={`self-start mt-3 text-sm font-[600] text-[#47AEDE] hover:underline underline-offset-4 ${hind.className}`}
                                        >
                                            Ler depoimento completo
                                        </button>

                                        <div className='mt-auto pt-6'>
                                            <hr className='mb-6 border-[#E0F3FD]' />
                                            <Author testimonial={testimonial} interactive={isActive} />
                                        </div>
                                    </article>
                                )
                            })}
                        </div>

                        <button onClick={prev} aria-label='Depoimento anterior' className={`${arrowClass} hidden lg:flex absolute left-[calc(50%-352px)] top-1/2 -translate-y-1/2 z-30`}>
                            <IoChevronBack size={22} />
                        </button>
                        <button onClick={next} aria-label='Próximo depoimento' className={`${arrowClass} hidden lg:flex absolute right-[calc(50%-352px)] top-1/2 -translate-y-1/2 z-30`}>
                            <IoChevronForward size={22} />
                        </button>
                    </div>

                    <div className='flex items-center justify-center gap-6 mt-8'>
                        <button onClick={prev} aria-label='Depoimento anterior' className={`${arrowClass} lg:hidden`}>
                            <IoChevronBack size={22} />
                        </button>
                        <div className='flex items-center gap-2'>
                            {testimonials.map((testimonial, index) => (
                                <button
                                    key={testimonial.name}
                                    onClick={() => goTo(index)}
                                    aria-label={`Ver depoimento de ${testimonial.name}`}
                                    aria-current={index === active}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${index === active ? 'w-8 bg-[#47AEDE]' : 'w-2.5 bg-[#47AEDE]/30 hover:bg-[#47AEDE]/60'}`}
                                />
                            ))}
                        </div>
                        <button onClick={next} aria-label='Próximo depoimento' className={`${arrowClass} lg:hidden`}>
                            <IoChevronForward size={22} />
                        </button>
                    </div>
                </Fade>
            </div>

            {openTestimonial && <TestimonialModal testimonial={openTestimonial} onClose={closeModal} />}
        </div>
    )
}

export default TestimonialSection
