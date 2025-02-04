<header
  class="absolute inset-x-0 top-0 z-50 border border-gray-100 lg:px-16 px-4 shadow shadow-gray-100"
>
  <nav
    class="flex items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5">
        <img
          class="h-10 w-10 rounded-[25px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jS9aX893R-MoLPYLuZh2OiBNmT-Q9mOpQA&s"
          alt=""
        />
      </a>
    </div>

    <div class="flex items-center gap-x-6">
      <div class="hidden lg:flex">
        <div class="flex items-center justify-center">
          <div class="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search..."
              class="w-full pl-10 pr-4 py-2 text-gray-700 bg-white border border-gray-100 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <div
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.6 0 7.5 7.5 0 0 0 10.6 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <a href="#" class="text-sm/6 font-semibold text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  </nav>

  <!-- Mobile menu, show/hide based on menu open state. -->
  <!-- <div class="lg:hidden" role="dialog" aria-modal="true">
    <div class="fixed inset-0 z-50"></div>
    <div
      class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="m-1.5 p-1.5">
          <img
            class="h-12 w-12 rounded-[25px]"
            src="https://static.vecteezy.com/system/resources/previews/002/233/113/non_2x/restaurant-service-abstract-logo-template-symbol-icon-free-vector.jpg"
            alt=""
          />
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <svg
            class="size-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a
              href="/product"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >Product</a
            >
            <a
              href="/features"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >Features</a
            >
          <div class="py-6">
            <a
              href="/log-in"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
              >Log in</a
            >
          </div>
        </div>
      </div>
    </div>
  </div> -->
</header>
