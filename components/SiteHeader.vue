<template>
  <header class="bg-transparent w-full">
    <nav class="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8"
      aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/home"
          class="-m-1.5 p-1.5">
          <span class="sr-only">Agência Mav</span>
          <img class="h-6 w-auto"
            src="/img/logo.svg"
            alt="" />
        </a>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
      </div>
      <div class="flex flex-1 items-center justify-end gap-x-6">
        <!-- 
          TODO: Colocar aqui algo como notificações ou outra coisa dinâmica que o usuário possa querer ver. Talvez um balão de chat?
         -->

        <a href="#"
          class="flex flex-row rounded bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Seja parceiro          
        </a>

        <div class="hidden lg:ml-4 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
          <a href="#"
            class="hidden lg:flex items-center lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-900 flex-row">Minha conta
            <ArrowLongRightIcon class="ml-1.5 h-5 w-5 text-gray-500"
              aria-hidden="true" />
          </a>
        </div>
        <!-- <a href="#"
          class="rounded bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Criar conta</a> -->
      </div>
      <div class="flex lg:hidden">
        <button type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded p-2.5 text-gray-700"
          @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6"
            aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10 bg-black bg-opacity-50" />
      <DialogPanel class="bg-white fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-transparent px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center gap-x-6">
          <a href="#"
            class="-m-1.5 p-1.5">
            <span class="sr-only">Agência Mav</span>
            <img class="h-8 w-auto"
              src="/img/logo.svg"
              alt="" />
          </a>
          <a href="#"
            class="ml-auto rounded bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Criar conta</a>
          <button type="button"
            class="-m-2.5 rounded p-2.5 text-gray-700"
            @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6"
              aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
            </div>
            <div class="py-6">
              <a href="#"
                class="-mx-3 flex flex-row items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Minha conta
                <ArrowLongRightIcon class="ml-1.5 h-5 w-5 text-gray-500"
                  aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ArrowLongRightIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Serviços', href: '/services' },
  // { name: 'Produtos', href: '/products' },
  { name: 'Cases', href: '/cases' },
  { name: 'Blog', href: '/blog' },
  // { name: 'Contato', href: '/contact' },
]

const mobileMenuOpen = ref(false)
</script>