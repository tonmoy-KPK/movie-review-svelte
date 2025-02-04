<script lang="ts">
  import { goto } from '$app/navigation';
  import Card from '$lib/components/card.svelte';
  import { onMount } from 'svelte';
  import { movieStore } from '$lib/stores/movieStore';

  let data: any = null;
  let error = null;

  const CACHE_KEY = 'spunocularData';
  const CACHE_TIMESTAMP_KEY = 'spunocularTimestamp';
  const CACHE_DURATION = 2 * 60 * 60 * 1000;

  onMount(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

    if (cachedData && cachedTimestamp) {
      const now = new Date().getTime();
      const timeElapsed = now - parseInt(cachedTimestamp, 10);

      if (timeElapsed < CACHE_DURATION) {
        data = JSON.parse(cachedData);
      } else {
        fetchData();
      }
    } else {
      fetchData();
    }
  });

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://imdb236.p.rapidapi.com/imdb/top250-movies',
        {
          method: 'GET',
          headers: {
            Host: 'imdb236.p.rapidapi.com',
            'X-RapidAPI-Host': 'imdb236.p.rapidapi.com',
            'X-RapidAPI-Key':
              '4bfc960c13msh619c5e937153738p194b3ejsn9f79164ec188',
          },
        },
      );
      if (!res.ok) throw new Error('Failed to fetch');

      data = await res.json();

      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      localStorage.setItem(
        CACHE_TIMESTAMP_KEY,
        new Date().getTime().toString(),
      );
    } catch (err: any) {
      error = err.message;
    }
  };
  const goToDetails = (movie: any) => {
    movieStore.set(movie);
    goto(`/product/${movie.id}`);
  };
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
  <div
    class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
    ></div>
  </div>
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Top Movies</h2>
    <div
      class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      {#each data as movie}
        <Card {movie} onClick={goToDetails} />
      {/each}
    </div>
  </div>
</div>
