<template>
    <div id="snow-hexagon">
        <svg fill="#b8e3f5" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-18.48 -18.48 221.71 221.71" xml:space="preserve" stroke="#ffffff">
            <defs>
                <g id="tree">
                    <polygon points="-10,0 10,0 0 -50" fill="#38755b" />
                    <line x2="0" y2="10" stroke="#778074" stroke-width="2" />
                </g>
                <circle id="big" cx="0" cy="0" r="5" fill="#FFFFFF" />
                <circle id="small" cx="0" cy="0" r="3" fill="#FFFFFF" />
            </defs>
            <g id="SVGRepo_iconCarrier" transform="rotate(90 90 90)">
                <path d="M 0,92.375 l 46.188 -80 h 92.378 l 46.185,80 l -46.185,80 H 46.188 L 0,92.375 z"></path>
            </g>
            <path fill="#F8F4E8" transform="rotate(90 90 90)" d="M 139,13 L 187 94 L 140,171 H 80 L 50, 155 L 80 140 L 50 122 L 100, 94 L 50 73.75 L 80 53.5 L 35 33.25 L 80 13 z"/>
            <use href="#tree" x="48" y="90" transform="scale(1.7)" />
            <use href="#tree" x="105" y="120" transform="scale(1.2)" />
            <use href="#tree" x="155" y="120"/>
            <use href="#tree" x="20" y="90" transform="scale(1.4)" />

            <!-- Snowflakes 
            <use href="#big" x="2" y="90" class="flake fast" />
            <use href="#big" x="-50" y="20" class="flake fast opaque" />
            <use href="#big" x="30" y="140" class="flake fast" />
            <use href="#big" x="-20" y="70" class="flake fast opaque" />
            <use href="#big" x="30" y="50" class="flake slow" />
            <use href="#big" x="0" y="169" class="flake slow opaque" />
            <use href="#big" x="30" y="50" class="flake slow" />
            <use href="#big" x="0" y="-120" class="flake slow opaque" />
            <use href="#small" x="10" y="-50" class="flake slow" />
            <use href="#small" x="-50" y="-60" class="flake slow opaque" />
            <use href="#small" x="30" y="70" class="flake slow" />
            <use href="#small" x="10" y="-80" class="flake slow opaque" />-->
        </svg>
    </div>
</template>

<style lang="scss">
.flake {
  animation-duration: inherit;
  animation-name: snowing;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes snowing {
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100px, 0);
  }
}

.flake.opaque {
  opacity: 0.7;
}

.flake.slow {
  animation-duration: 5s;
}

.flake.fast {
  animation-duration: 3s;
}
</style>