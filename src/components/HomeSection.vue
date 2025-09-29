<script setup>
import { ref, onMounted } from 'vue'
import {FileDown} from 'lucide-vue-next'

const texts = ['Web Developer', 'FullStack Developer']
const displayedText = ref('')
const currentIndex = ref(0)
const isTyping = ref(true)
const isDeleting = ref(false)
const typeSpeed = 150
const deleteSpeed = 100
const pauseTime = 2000
onMounted(() => {
    const type = () => {
        const currentText = texts[currentIndex.value]
        if (isTyping.value) {
            displayedText.value = currentText.substring(0, displayedText.value.length + 1)
            if (displayedText.value === currentText) {
                isTyping.value = false
                setTimeout(() => {
                    isDeleting.value = true
                }, pauseTime)
            }
        } else if (isDeleting.value) {
            displayedText.value = currentText.substring(0, displayedText.value.length - 1)
            if (displayedText.value === '') {
                isDeleting.value = false
                currentIndex.value = (currentIndex.value + 1) % texts.length
                isTyping.value = true
            }
        }
        const speed = isDeleting.value ? deleteSpeed : typeSpeed
        setTimeout(type, speed)
    }
    type()
})
</script>
<template>
    <div class="max-w-5xl mx-auto px-4 py-8 w-full">
        <div class="flex w-full h-[500px] flex-col-reverse md:flex-row">
            <!-- left - ข้อความ (อยู่ล่างใน mobile, อยู่ซ้ายใน desktop) -->
            <div class="flex-1">
                <div class="flex flex-col items-center justify-center h-full">
                    <div class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center md:text-left">
                        <p>Hello, It's Sirawit</p>
                        <div class="flex gap-2 items-center justify-center md:justify-start">
                            <p>I'm a </p>
                            <p class="inline-block overflow-hidden whitespace-nowrap border-r-2 border-r-gray-800 dark:border-r-white pr-1
                                    bg-gradient-to-r from-green-500 to-yellow-200 text-transparent bg-clip-text">
                                {{ displayedText }}
                            </p>
                        </div>
                    </div>

                    <div class="w-full flex items-center justify-center mt-6">
                        <a href="/resume.pdf" download
                            class="group px-6 py-3 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-md border border-yellow-400/50 dark:border-green-500/50 text-gray-900 dark:text-white font-semibold shadow-lg hover:bg-yellow-400/20 dark:hover:bg-green-500/20 hover:border-yellow-400 dark:hover:border-green-500 transition-all duration-300 flex justify-center">
                            <span class="flex items-center gap-2">
                                <FileDown  class="w-5 h-5 group-hover:rotate-12 transition-transform"/>
                                Download Resume
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="flex-1">
                <div class="flex items-center justify-center h-full">
                    <div>
                        <img src="/img/picresume3.png" alt="profilenew" class="rounded-full w-60 h-60 md:w-80 md:h-80 object-cover
                            ring-2 ring-yellow-400/40 dark:ring-green-500/40
                        bg-yellow-400/60 dark:bg-green-400/80
                            shadow-[0_0_10px_#ffe649,0_0_20px_#ffe649,0_0_40px_#fff085,0_0_80px_#ffaa00]
                            dark:shadow-[0_0_10px_#00aa00,0_0_20px_#00aa00,0_0_40px_#00aa00,0_0_80px_#00aa00]
                            transition-all duration-500" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@keyframes blink {
    50% {
        opacity: 0
    }
}

.animate-blink {
    animation: blink 1s step-end infinite;
}
</style>