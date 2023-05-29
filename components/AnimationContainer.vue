<template>
	<div id="animation-container"
		class="absolute w-full h-full z-0 shadow-inner">
		<svg viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid slice"
			style="width:100%; height:100%;"
			class="opacity-75">
			<defs>
				<radialGradient id="Gradient1"
					cx="50%"
					cy="50%"
					fx="50%"
					fy="50%"
					r=".5">
					<stop offset="0%"
						stop-color="rgba(255, 0, 255, 0.85)"></stop>
					<stop offset="120%"
						stop-color="rgba(255, 0, 255, 0)"></stop>
				</radialGradient>

				<radialGradient id="Gradient3"
					cx="50%"
					cy="50%"
					fx="50%"
					fy="50%"
					r=".5">
					<stop offset="0%"
						stop-color="rgba(0, 255, 255, 0.85)"></stop>
					<stop offset="120%"
						stop-color="rgba(0, 255, 255, 0)"></stop>
				</radialGradient>
			</defs>
			<rect x="0"
				y="0"
				width="120%"
				height="120%"
				fill="url(#Gradient1)">
				<animate attributeName="x"
					dur="90s"
					values="33%;0%;33%"
					repeatCount="indefinite" />
				<animate attributeName="y"
					dur="92s"
					values="0%;33%;0%"
					repeatCount="indefinite" />
				<animateTransform attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					dur="44s"
					repeatCount="indefinite" />
			</rect>
			<rect x="0"
				y="0"
				width="120%"
				height="120%"
				fill="url(#Gradient2)">
				<animate attributeName="x"
					dur="96s"
					values="0%;-33%;0%"
					repeatCount="indefinite" />
				<animate attributeName="y"
					dur="98s"
					values="33%;-33%;33%"
					repeatCount="indefinite" />
				<animateTransform attributeName="transform"
					type="rotate"
					from="0 50 50"
					to="360 50 50"
					dur="46s"
					repeatCount="indefinite" />
			</rect>
			<rect x="0"
				y="0"
				width="120%"
				height="120%"
				fill="url(#Gradient3)">
				<animate attributeName="x"
					dur="100s"
					values="-33%;0%;-33%"
					repeatCount="indefinite" />
				<animate attributeName="y"
					dur="102s"
					values="0%;-33%;0%"
					repeatCount="indefinite" />
				<animateTransform attributeName="transform"
					type="rotate"
					from="360 50 50"
					to="0 50 50"
					dur="48s"
					repeatCount="indefinite" />
			</rect>
		</svg>
	</div>
</template>