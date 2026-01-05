'use client';
import { motion } from 'motion/react'

const FooterEnd = () => {
    return (
        <section className="h-96 flex items-end relative justify-center w-full p-8">
            <motion.h1
                initial={{ 
                    opacity: 1, 
                    scale: 1,
                    backgroundPosition: "200% 0"
                }}
                whileInView={{ 
                    opacity: 1, 
                    scale: 1,
                    backgroundPosition: "0% 0"
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                    opacity: { duration: 0.8, ease: "easeOut" },
                    scale: { duration: 0.8, ease: "easeOut" },
                    backgroundPosition: { duration: 2, delay: 0.5, ease: "easeInOut" }
                }}
                className="text-5xl sm:text-7xl px-8 md:text-9xl lg:text-[192px] xl:text-[256px] font-light font-serif text-transparent bg-clip-text bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 bg-size-[200%_auto] z-10 text-center"
            >
                SteakHouse
            </motion.h1>
        </section>
    )
}

export default FooterEnd