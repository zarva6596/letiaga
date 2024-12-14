<script lang="ts" setup>
import PrivacyPolicy from '@locales/pages/terms/ua'
</script>

<template>
	<ol>
		<li
			v-for="(item, i) in PrivacyPolicy.items"
			:key="i"
			class="mt-8"
		>
			<h5 class="text-center">
				<span>{{ i + 1 }}. </span>
				{{ $t(`privacy_policy.items[${i}].heading`) }}
			</h5>

			<ol
				class="mt-4"
			>
				<li
					v-for="(p, j) in item.paragraphs"
					:key="j"
					class="mt-4 indent-10"
				>
					<span v-if="typeof p === 'string'">
						<span>{{ `${i + 1}.${j + 1}. ` }}</span>
						{{ $t(`privacy_policy.items[${i}].paragraphs[${j}]`) }}
					</span>

					<ol v-else>
						<li
							v-for="(_, k) in p"
							:key="k"
						>
							<span>{{ `${i + 1}.${j + 1}.${k + 1}. ` }}</span>
							{{ $t(`privacy_policy.items[${i}].paragraphs[${j}][${k}]`) }}
						</li>
					</ol>
				</li>
			</ol>
		</li>
	</ol>
</template>
