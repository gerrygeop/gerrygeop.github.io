<script setup>
	defineProps({
		projects: Array,
	});
</script>

<template>
	<section class="mb-12">
		<!-- Top 3 Projects -->
		<h2 class="text-2xl font-semibold mb-6">Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
			<div v-for="project in projects.slice(0, 3)" :key="project.id" class="bg-white border rounded-xl overflow-hidden shadow-sm">
				<img :src="project.image" :alt="project.title" class="w-full h-40 object-cover" />
				<div class="p-4">
					<a :href="project.github" target="_blank" rel="noopener noreferrer" class="font-semibold text-lg mb-1 hover:text-indigo-700 transition duration-200">
						{{ project.title }}
					</a>
					<p class="text-sm text-neutral-600 mb-2">{{ project.description }}</p>
					<div class="flex flex-wrap gap-1 text-xs">
						<span v-for="(tag, index) in project.tech" :key="index" class="bg-neutral-200 px-2 py-1 rounded">{{ tag }}</span>
					</div>
				</div>
			</div>
		</div>

		<!-- Other Projects (2 col grid) -->
		<h3 class="text-lg font-medium mb-4">Other projects</h3>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div v-for="other in projects.slice(3, 11)" :key="other.id" class="bg-white border rounded-xl p-4">
				<a :href="other.github" target="_blank" rel="noopener noreferrer" class="font-medium text-lg mb-1 hover:text-indigo-700 transition duration-200">{{ other.title }}</a>
				<p class="text-sm text-neutral-600 mb-2">
					{{ other.description }}
				</p>
				<div class="flex flex-wrap gap-1 text-xs">
					<span v-for="(tag, index) in other.tech" :key="index" class="bg-neutral-200 px-2 py-1 rounded">{{ tag }}</span>
				</div>
			</div>
		</div>
	</section>
</template>
