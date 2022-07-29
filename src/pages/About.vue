<template>
	 <div class="about-hero q-pa-xl">
		  <div class="col-12 text-h3 text-bold" :class="$q.screen.gt.sm ? 'text-right' : 'text-center'">
				Allan Drozd
		  </div>
		  <div class="col-12 text-h4 text-bold" :class="$q.screen.gt.sm ? 'text-right' : 'text-center'">
				{{ $t("title") }}
		  </div>
		  <div class="col-12 q-py-xl" :class="$q.screen.gt.sm ? 'text-left' : 'text-center'">
				<div class="text-h4 text-bold">
					 {{ $t("who") }}
				</div>
		  </div>
		  <div class="col-12 q-pt-xl" :class="$q.screen.gt.sm ? 'text-left' : 'text-center'">
				<p class="text-h6 text-bold">
					 {{ $t("talk1") }}<br /> {{ $t("talk2") }}<br /> {{ $t("talk3") }}<br />
				</p>
		  </div>
	 </div>
</template>
<style scoped>
.about-hero {
    background-color: #507c54;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 97%, rgba(0, 0, 0, 1)), url('../assets/ivan-lopatin.jpg');
    background-size: cover;
    height: 100vh;
}
</style>
