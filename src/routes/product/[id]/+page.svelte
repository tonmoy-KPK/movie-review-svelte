<script lang="ts">
  import { page } from '$app/state';
  import { movieStore } from '$lib/stores/movieStore';
  import { onMount } from 'svelte';

  let id = $derived(page.params.id);
  let movie: any = $state(null);
  onMount(() => {
    movieStore.subscribe((m) => {
      if (m) movie = m;
      console.log(movie, 'done');
    });
  });
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
    class="my-16 mx-auto max-w-5xl rounded-lg p-8 flex gap-8 border border-gray-100 lg:flex-row flex-col"
  >
    <div class="lg:w-1/3 w-full">
      <img
        src={movie?.primaryImage}
        alt={movie?.originalTitle}
        class="w-full h-auto rounded-lg shadow-md"
      />
    </div>

    <div class="lg:w-2/3 w-full">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Movie Details</h3>
      <table class="w-full border-collapse border border-gray-200">
        <tbody>
          <tr class="border-b border-gray-200">
            <td class="p-4 font-medium text-gray-900 w-1/3">Title</td>
            <td class="p-4 text-gray-700">{movie?.originalTitle}</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-4 font-medium text-gray-900">Genre</td>
            <td class="p-4 text-gray-700">{movie?.genres.join(', ')}</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-4 font-medium text-gray-900">Languages</td>
            <td class="p-4 text-gray-700"
              >{movie?.spokenLanguages.join(', ')}</td
            >
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-4 font-medium text-gray-900">Interests</td>
            <td class="p-4 text-gray-700">{movie?.interests.join(', ')}</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-4 font-medium text-gray-900">Release Year</td>
            <td class="p-4 text-gray-700">{movie?.startYear}</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-4 font-medium text-gray-900">Content Rating</td>
            <td class="p-4 text-gray-700">{movie?.contentRating}</td>
          </tr>
          <tr class="border-b border-gray-200">
            <td class="p-4 font-medium text-gray-900">Budget</td>
            <td class="p-4 text-gray-700">${movie?.budget}</td>
          </tr>
          <tr>
            <td class="p-4 font-medium text-gray-900">Description</td>
            <td class="p-4 text-gray-700">{movie?.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
