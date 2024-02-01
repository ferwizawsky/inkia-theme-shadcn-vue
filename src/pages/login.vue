<script setup lang="ts">
import { h } from "vue";
import { useForm } from "vee-validate";

import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { vAutoAnimate } from "@formkit/auto-animate/vue";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/toast";
import Toaster from "@/components/ui/toast/Toaster.vue";

const formSchema = toTypedSchema(
  z.object({
    username: z
      .string()
      .min(2, { message: "Username must be at least 2 characters" })
      .max(25, { message: "Username max 25 characters" }),
    password: z.string().min(2).max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const onSubmit = handleSubmit((values) => {
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2))
    ),
  });
});
</script>

<template>
  <div class="max-w-md mx-auto px-8 pt-16">
    <div class="text-center mb-6">
      <div>
        <svg
          class="mx-auto w-16 mb-4"
          viewBox="0 0 46 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32.0547 0L0 32.0547H32.0547V0Z" class="fill-primary" />
          <path
            d="M45.5 34.246H0.167834L22.8339 56.9121L45.5 34.246Z"
            class="fill-primary"
          />
        </svg>
      </div>
      <div class="font-medium text-xl">Sign In to Inkia</div>
      <!-- <div>Please fill form below to continue</div> -->
    </div>
    <form
      class="p-6 space-y-4 border border-input pt-8 rounded-xl"
      @submit.prevent="onSubmit"
    >
      <FormField v-slot="{ componentField }" name="username">
        <FormItem v-auto-animate>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input type="text" placeholder="username" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="password">
        <FormItem v-auto-animate>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              type="password"
              placeholder="password"
              v-bind="componentField"
            />
          </FormControl>
          <FormDescription> </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="text-center">
        <Button type="submit" class="px-20"> Sign In </Button>
      </div>
    </form>
    <div class="pt-10">
      <div>
        <button
          class="px-4 py-2 mx-auto border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
        >
          <img
            class="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </div>
    </div>

    <Toaster />
  </div>
</template>
