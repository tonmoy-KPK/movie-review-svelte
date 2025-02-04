<script lang="ts">
  export let movie: any;
  export let onClick;

  // function capitalizeFirstLetter(str: string) {
  //   if (!str) return str;
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }
</script>

<div
  on:click={() => onClick(movie)}
  class="group relative cursor-pointer border border-gray-100"
>
  <img
    src={movie.primaryImage}
    alt="Front of men&#039;s Basic Tee in black."
    class="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
  />
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-sm text-gray-700 ml-2">
        <div class="font-bold">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {movie.originalTitle}
        </div>
      </h3>
      <p class="mt-1 ml-2 mb-1 text-sm text-gray-500">
        {movie.averageRating}
      </p>
    </div>
    <!-- <p class="text-sm font-medium text-gray-900">
      Best Character: {movie.characters[0]}
    </p> -->
  </div>
</div>
