import React from 'react'

function ForgotPassword() {
  return (
    <>
    <link
  rel="preload"
  as="image"
  href="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
<div class="min-h-screen bg-[#121212]">
  <div class="mx-auto flex w-full items-stretch justify-between gap-10">
    <div class="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
      <div class="w-full">
        <h1 class="mb-2 text-5xl font-extrabold text-white">Forgot password?</h1>
        <p class="text-xs text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eius, aliquid autem numquam iure sint perspiciatis voluptatum soluta fugiat.</p>
      </div>
      <div class="my-14 flex w-full flex-col items-start justify-start gap-4">
        <div class="flex w-full flex-col items-start justify-start gap-2">
          <label class="text-xs text-slate-200">Email</label>
          <input
            placeholder="Enter an email..."
            autocomplete="false"
            type="email"
            class="w-full border-[1px] border-white bg-black p-4 text-white placeholder:text-gray-500" />
        </div>
        <button
          class="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]">
          Start recovery
        </button>
        <p class="my-14 text-sm font-light text-white">
          Already registered?
          <span class="cursor-pointer font-bold hover:underline">Sign in to your account</span>
        </p>
      </div>
    </div>
    <div class="fixed right-0 z-20 hidden h-screen w-1/2 md:block">
      <img
        class="h-full w-full object-cover"
        src="https://images.pexels.com/photos/1144275/pexels-photo-1144275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="register_image" />
    </div>
  </div>
</div>

    </>
  )
}

export default ForgotPassword