<script setup lang="ts">
definePageMeta({ layout: false })

useSeoMeta({
  title: 'Yeadonaye Ashenafi — Business Card',
  ogTitle: 'Yeadonaye Ashenafi',
  description: 'Full Stack Developer · Nuxt · Vue · TypeScript',
  ogDescription: 'Full Stack Developer · Nuxt · Vue · TypeScript',
  twitterCard: 'summary_large_image',
})

const cardRef = ref<HTMLElement | null>(null)
const shimmerX = ref(50)
const shimmerY = ref(50)
const rotateX = ref(0)
const rotateY = ref(0)
const isHovered = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return

  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const cx = rect.width / 2
  const cy = rect.height / 2

  rotateX.value = -((y - cy) / 12)
  rotateY.value = (x - cx) / 12

  shimmerX.value = (x / rect.width) * 100
  shimmerY.value = (y / rect.height) * 100

  isHovered.value = true
}

const handleMouseLeave = () => {
  rotateX.value = 0
  rotateY.value = 0
  shimmerX.value = 50
  shimmerY.value = 50
  isHovered.value = false
}

const cardStyle = computed(() => ({
  transform: isHovered.value
    ? `rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) translateY(-6px)`
    : undefined,
  animation: isHovered.value ? 'none' : undefined,
}))

const shimmerStyle = computed(() => ({
  background: isHovered.value
    ? `radial-gradient(circle at ${shimmerX.value}% ${shimmerY.value}%, rgba(255,255,255,0.1) 0%, transparent 65%)`
    : 'none',
}))
</script>

<template>
  <div class="root">
    <!-- Ambient background -->
    <div class="bg" />

    <!-- Scene -->
    <div class="scene">
      <div
        ref="cardRef"
        class="card-wrap"
        :class="{ hovered: isHovered }"
        :style="cardStyle"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      >
        <div class="card">
          <!-- Texture layer -->
          <div class="noise" />
          <!-- Shimmer highlight -->
          <div class="shimmer" :style="shimmerStyle" />
          <!-- Bottom accent gradient -->
          <div class="accent-line" />

          <div class="content">
            <!-- Top row -->
            <div class="top">
              <div class="avatar">YA</div>
              <div class="logo-mark" aria-hidden="true">
                <span class="dot" />
                <span class="dot" />
                <span class="dot" />
              </div>
            </div>

            <!-- Name + role -->
            <div class="middle">
              <h1 class="name">Yeadonaye Ashenafi</h1>
              <p class="role">Full Stack Developer</p>
            </div>

            <!-- Bottom row -->
            <div class="bottom">
              <div class="stack">
                <div class="stack-line">
                  <span class="pill">Nuxt</span>
                  <span class="pill">Vue</span>
                  <span class="pill">TypeScript</span>
                </div>
                <div class="stack-line">
                  <span class="pill">Supabase</span>
                  <span class="pill">Prisma</span>
                  <span class="pill">UI/UX</span>
                </div>
              </div>

              <a
                href="mailto:hello@yeadonaye.dev"
                class="contact-btn"
                aria-label="Send an email"
              >
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" />
                </svg>
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="hint">Move your cursor over the card</p>
  </div>
</template>

<style scoped>
/* ─── Reset & root ───────────────────────────────────────────── */
.root {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Inter', system-ui, sans-serif;
  background: #09090f;
  position: relative;
}

/* ─── Ambient background ─────────────────────────────────────── */
.bg {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse 80% 60% at 20% 40%, rgba(99, 60, 180, 0.18) 0%, transparent 60%),
    radial-gradient(ellipse 60% 50% at 80% 60%, rgba(30, 140, 255, 0.12) 0%, transparent 60%);
  pointer-events: none;
  z-index: 0;
}

/* ─── Scene / perspective ────────────────────────────────────── */
.scene {
  perspective: 1400px;
  z-index: 1;
  position: relative;
}

/* ─── Card wrapper (3D + float animation) ────────────────────── */
.card-wrap {
  width: 420px;
  height: 245px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
  animation: float 6s ease-in-out infinite;
  cursor: default;
  user-select: none;
  /* disable float while hovered — done via inline style */
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
}

/* ─── Card face ──────────────────────────────────────────────── */
.card {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  transform-style: preserve-3d;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    0 0 0 0.5px rgba(255, 255, 255, 0.06),
    0 25px 60px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(99, 60, 180, 0.08);
  transition: box-shadow 0.3s ease;
}

.card-wrap.hovered .card {
  box-shadow:
    0 0 0 0.5px rgba(255, 255, 255, 0.1),
    0 35px 80px rgba(0, 0, 0, 0.7),
    0 0 100px rgba(99, 60, 180, 0.14);
}

/* ─── Noise texture ──────────────────────────────────────────── */
.noise {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  /* inline SVG noise via data URI */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
}

/* ─── Dynamic shimmer ────────────────────────────────────────── */
.shimmer {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  z-index: 3;
  pointer-events: none;
  transition: background 0.05s linear;
}

/* ─── Animated accent line ───────────────────────────────────── */
.accent-line {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(90deg, #7b5cf0, #2d82ff, #7b5cf0);
  background-size: 200% 100%;
  animation: slide 4s linear infinite;
  z-index: 5;
}

@keyframes slide {
  0%   { background-position: 0% 0%; }
  100% { background-position: 200% 0%; }
}

/* ─── Content (lifted in Z) ──────────────────────────────────── */
.content {
  position: relative;
  z-index: 4;
  padding: 28px 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translateZ(30px);
}

/* ─── Top row ────────────────────────────────────────────────── */
.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7b5cf0, #2d82ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
}

.logo-mark {
  display: flex;
  align-items: center;
  gap: 5px;
  opacity: 0.35;
}

.dot {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}

.dot:nth-child(2) { transform: scale(0.65); }
.dot:nth-child(3) { transform: scale(0.4); }

/* ─── Name + role ────────────────────────────────────────────── */
.middle {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 1.6rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -0.4px;
  line-height: 1.1;
}

.role {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.38);
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-top: 7px;
}

/* ─── Bottom row ─────────────────────────────────────────────── */
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.stack {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.stack-line {
  display: flex;
  gap: 6px;
  align-items: center;
}

.pill {
  font-size: 10px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.06);
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3px 9px;
  letter-spacing: 0.2px;
  transition: background 0.2s, color 0.2s;
}

.card-wrap.hovered .pill {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.65);
}

/* ─── Contact button ─────────────────────────────────────────── */
.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.65);
  background: rgba(255, 255, 255, 0.07);
  border: 0.5px solid rgba(255, 255, 255, 0.14);
  border-radius: 20px;
  padding: 7px 14px;
  text-decoration: none;
  letter-spacing: 0.3px;
  transition: background 0.2s, color 0.2s, transform 0.15s;
  cursor: pointer;
}

.contact-btn:hover {
  background: rgba(255, 255, 255, 0.13);
  color: white;
  transform: scale(1.04);
}

.contact-btn svg {
  width: 11px;
  height: 11px;
  flex-shrink: 0;
}

/* ─── Hint text ──────────────────────────────────────────────── */
.hint {
  margin-top: 28px;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.16);
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
  position: relative;
  animation: fadeUp 2s 1s both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ─── Mobile ─────────────────────────────────────────────────── */
@media (max-width: 480px) {
  .card-wrap {
    width: calc(100vw - 40px);
    height: auto;
    aspect-ratio: 420 / 245;
  }

  .name {
    font-size: 1.25rem;
  }
}
</style>