<script setup>
	import { ref, onMounted } from "vue";
	import Skills from "@/components/Skills.vue";
	import Navbar from "@/components/Navbar.vue";
	import FooterSection from "@/components/Footer.vue";
	import HeroSection from "@/components/HeroSection.vue";
	import ProjectSection from "@/components/ProjectSection.vue";

	const projects = ref([]);

	onMounted(async () => {
		const res = await fetch("/data.json");
		const data = await res.json();
		projects.value = data || [];
	});
</script>

<template>
	<main class="min-h-screen bg-neutral-100 text-neutral-800 px-6 py-10 font-sans">
		<div class="max-w-5xl mx-auto grid grid-cols-1 gap-y-14">
			<Navbar />

			<HeroSection />

			<Skills />

			<ProjectSection :projects="projects" />

			<FooterSection />
		</div>
	</main>
</template>
