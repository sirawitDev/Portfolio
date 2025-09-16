<script setup>
import { ref, onMounted } from 'vue'

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
        <div class="flex w-full h-[500px]">
            <div class="flex-1 ">
                <div class="flex items-center justify-center h-full">
                    <div class=" text-4xl font-bold text-gray-800 dark:text-white">
                        <p>Hello, It's Sirawit</p>
                        <div class="flex gap-2 items-center">
                            <p>I'm a </p>
                            <p class="inline-block overflow-hidden whitespace-nowrap border-r-2 border-r-gray-800 dark:border-r-white pr-1
         bg-gradient-to-r from-green-500 to-yellow-200 text-transparent bg-clip-text">
                                {{ displayedText }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-1 ">
                <div class="flex items-center justify-center h-full">
                    <div>
                        <img src="/img/picresume3.png"  alt="profilenew" class="rounded-full w-80 h-80 object-cover
                            ring-2 ring-yellow-400/40 dark:ring-green-500/40
                          bg-yellow-400/60 dark:bg-green-400/80
                            shadow-[0_0_10px_#ffe649,0_0_20px_#ffe649,0_0_40px_#fff085,0_0_80px_#ffaa00]
                            dark:shadow-[0_0_10px_#00aa00,0_0_20px_#00aa00,0_0_40px_#00aa00,0_0_80px_#00aa00]
                            transition-all duration-500"
                             />
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