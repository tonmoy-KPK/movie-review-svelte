<script>
  let email = '';
  let password = '';
  let error = '';

  const handleSubmit = () => {
    if (!email || !password) {
      error = 'Both fields are required';
      return;
    }
    error = '';

    console.log('Logging in with:', { email, password });
  };
</script>

<div class="flex min-h-screen items-center justify-center bg-gray-100 p-4">
  <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-center text-gray-700">Login</h2>
    <form on:submit|preventDefault={handleSubmit} class="mt-4">
      {#if error}
        <p class="text-red-500 text-sm mb-2">{error}</p>
      {/if}

      <div>
        <label class="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          bind:value={email}
          class="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="mt-4">
        <label class="block text-sm font-medium text-gray-600">Password</label>
        <input
          type="password"
          bind:value={password}
          class="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-indigo-300"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full mt-6 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Login
      </button>
    </form>

    <p class="text-center text-sm text-gray-500 mt-4">
      Don't have an account? <a
        href="/register"
        class="text-indigo-600 hover:underline">Sign up</a
      >
    </p>
  </div>
</div>
