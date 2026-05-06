<script setup lang="ts">
const cardRef = ref<HTMLElement | null>(null)

const rotateX = ref(0)
const rotateY = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return

  const rect = cardRef.value.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const deltaX = x - centerX
  const deltaY = y - centerY

  rotateY.value = deltaX / 15
  rotateX.value = -deltaY / 15
}

const resetRotation = () => {
  rotateX.value = 0
  rotateY.value = 0
}
</script>

<template>
  <div class="scene">
    <div
      ref="cardRef"
      class="card"
      :style="{
        transform: `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `
      }"
      @mousemove="handleMouseMove"
      @mouseleave="resetRotation"
    >
      <div class="card-face front">
        <div class="content">
          <h2>Yeadonaye Ashenafi</h2>
          <p>Full Stack Developer</p>

          <div class="divider" />

          <p>Nuxt • Vue • TypeScript</p>
          <p>Supabase • Prisma • UI/UX</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene {
  perspective: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  width: 380px;
  height: 220px;

  position: relative;

  transform-style: preserve-3d;

  transition:
    transform 0.12s ease-out,
    box-shadow 0.2s ease;

  border-radius: 24px;

  cursor: pointer;

  animation: floating 5s ease-in-out infinite;
}

.card:hover {
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.4),
    0 0 40px rgba(255, 255, 255, 0.1);
}

.card-face {
  position: absolute;
  inset: 0;

  border-radius: 24px;

  overflow: hidden;

  backdrop-filter: blur(18px);

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.12),
      rgba(255,255,255,0.04)
    );

  border: 1px solid rgba(255,255,255,0.12);

  transform-style: preserve-3d;
}

.content {
  padding: 28px;

  transform: translateZ(40px);
}

h2 {
  font-size: 1.8rem;
  font-weight: 700;
}

p {
  opacity: 0.8;
  margin-top: 8px;
}

.divider {
  width: 100%;
  height: 1px;

  margin: 20px 0;

  background: rgba(255,255,255,0.15);
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-12px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>