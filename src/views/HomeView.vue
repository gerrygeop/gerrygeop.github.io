<script setup>
	//
</script>

<template>
	<main class="min-h-screen bg-neutral-100 text-neutral-800 px-6 py-10 font-sans">
		<div class="max-w-5xl mx-auto grid grid-cols-1 gap-y-14">
			<!-- Header / Navbar -->
			<header class="flex items-center justify-between mb-12">
				<h1 class="text-3xl font-bold"><></h1>
				<nav class="space-x-4 text-sm text-neutral-600">
					<a href="https://github.com/gerrygeop" target="_blank" class="hover:underline">GitHub</a>
					<a href="https://linkedin.com/in/gerrygeop" target="_blank" class="hover:underline">LinkedIn</a>
					<a href="https://x.com/gerrygeop" target="_blank" class="hover:underline">X</a>
				</nav>
			</header>

			<section class="font-light tracking-wide space-y-3">
				<h3 class="text-6xl font-bold">
					Hey there. <br />
					I'm <span class="text-indigo-600">Gerry</span>.
				</h3>
				<h4 class="text-2xl font-semibold">Web Developer</h4>
			</section>

			<!-- Skill Section -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold mb-4">Skills</h2>
				<div class="flex flex-wrap gap-2">
					<span class="px-3 py-1 text-sm bg-neutral-200 rounded-full">Vue.js</span>
					<span class="px-3 py-1 text-sm bg-neutral-200 rounded-full">React</span>
					<span class="px-3 py-1 text-sm bg-neutral-200 rounded-full">Laravel</span>
					<span class="px-3 py-1 text-sm bg-neutral-200 rounded-full">Tailwind CSS</span>
					<span class="px-3 py-1 text-sm bg-neutral-200 rounded-full">Supabase</span>
				</div>
			</section>

			<!-- Project Section -->
			<section class="mb-12">
				<h2 class="text-2xl font-semibold mb-6">Projects</h2>

				<!-- Top 3 Projects -->
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
					<div class="bg-white border rounded-xl overflow-hidden shadow-sm">
						<img src="https://raw.githubusercontent.com/gerrygeop/portfolio/main/assets/pemira.png" class="w-full h-40 object-cover" />
						<div class="p-4">
							<h3 class="font-semibold text-lg mb-1">PEMIRA BEM-KM UNMUL</h3>
							<p class="text-sm text-neutral-600 mb-2">Web e-voting untuk BEM UNMUL.</p>
							<div class="flex flex-wrap gap-1 text-xs">
								<span class="bg-neutral-200 px-2 py-1 rounded">Laravel</span>
								<span class="bg-neutral-200 px-2 py-1 rounded">MySQL</span>
								<span class="bg-neutral-200 px-2 py-1 rounded">Tailwind</span>
								<span class="bg-neutral-200 px-2 py-1 rounded">React</span>
							</div>
						</div>
					</div>

					<div class="bg-white border rounded-xl overflow-hidden shadow-sm">
						<img src="https://raw.githubusercontent.com/gerrygeop/portfolio/main/assets/formustaqbal.png" class="w-full h-40 object-cover" />
						<div class="p-4">
							<h3 class="font-semibold text-lg mb-1">Formustaqbal</h3>
							<p class="text-sm text-neutral-600 mb-2">LMS interaktif untuk UINSI Samarinda.</p>
							<div class="flex flex-wrap gap-1 text-xs">
								<span class="bg-neutral-200 px-2 py-1 rounded">Laravel</span>
								<span class="bg-neutral-200 px-2 py-1 rounded">React</span>
								<span class="bg-neutral-200 px-2 py-1 rounded">Tailwind</span>
							</div>
						</div>
					</div>

					<div class="bg-white border rounded-xl overflow-hidden shadow-sm">
						<img src="https://raw.githubusercontent.com/gerrygeop/portfolio/main/assets/vandertech.png" class="w-full h-40 object-cover" />
						<div class="p-4">
							<h3 class="font-semibold text-lg mb-1">Vandertech</h3>
							<p class="text-sm text-neutral-600 mb-2">Profil perusahaan tambang.</p>
							<div class="flex flex-wrap gap-1 text-xs">
								<span class="bg-neutral-200 px-2 py-1 rounded">Laravel</span>
								<span class="bg-neutral-200 px-2 py-1 rounded">Blade</span>
								<span class="bg-neutral-200 px-2 py-1 rounded">Tailwind</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Other Projects (2 col grid) -->
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="bg-white border rounded-xl p-4">
						<h3 class="font-medium text-lg mb-1">Sistem Pemilu FISIP</h3>
						<p class="text-sm text-neutral-600 mb-2">E-voting khusus Fakultas Ilmu Sosial dan Ilmu Politik UNMUL.</p>
						<div class="flex flex-wrap gap-1 text-xs">
							<span class="bg-neutral-200 px-2 py-1 rounded">Laravel</span>
							<span class="bg-neutral-200 px-2 py-1 rounded">Blade</span>
						</div>
					</div>

					<div class="bg-white border rounded-xl p-4">
						<h3 class="font-medium text-lg mb-1">Ujian Online Faperta</h3>
						<p class="text-sm text-neutral-600 mb-2">Ujian digital untuk Fakultas Pertanian UNMUL.</p>
						<div class="flex flex-wrap gap-1 text-xs">
							<span class="bg-neutral-200 px-2 py-1 rounded">Laravel</span>
							<span class="bg-neutral-200 px-2 py-1 rounded">Blade</span>
						</div>
					</div>
				</div>
			</section>

			<!-- Footer -->
			<footer class="flex flex-col md:flex-row justify-between text-sm text-neutral-500 border-t pt-6 mt-12">
				<div class="space-y-1 mb-4 md:mb-0">
					<div>📍 Kalimantan, Indonesia</div>
					<div>📞 +62 812-3456-7890</div>
					<div>✉️ gerrygeop@email.com</div>
				</div>
				<div class="space-x-4">
					<a href="https://github.com/gerrygeop" target="_blank">GitHub</a>
					<a href="https://linkedin.com/in/gerrygeop" target="_blank">LinkedIn</a>
					<a href="https://x.com/gerrygeop" target="_blank">X</a>
				</div>
			</footer>
		</div>
	</main>
</template>
