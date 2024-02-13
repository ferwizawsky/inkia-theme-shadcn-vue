<script setup lang="ts">
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-vue-next";
import Logo from "@/components/Logo.vue";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const notTop = ref(false);

interface MenuItem {
  to: string;
  text: string;
}
const list: MenuItem[] = [
  {
    to: "/dash/dashboard",
    text: "Chart Collection",
  },
  {
    to: "/dash/user",
    text: "User Data",
  },
];

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

const handleScroll = () => {
  const navbar = document.getElementById("navbar") as HTMLElement | null;
  if (navbar) {
    const rect = navbar.getBoundingClientRect();
    notTop.value = rect.top <= 0;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
<template>
  <div class="z-40 relative">
    <div class="flex justify-between p-4 items-center">
      <div class="flex space-x-4 items-center lg:pl-10 pt-1">
        <div class="text-lg font-medium tracking-widest">FIOEP</div>
      </div>
      <div class="flex space-x-4 items-center">
        <div>
          <button
            @click="toggleTheme"
            class="text-xs bg-foreground/10 px-3 py-1 rounded-full hover:bg-foreground/20"
          >
            Wanderer Plan
          </button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              class="w-8 h-8 cursor-pointer text-white bg-amber-400 flex items-center justify-center rounded-full"
            >
              <!-- {{ item?.name?.substring(0, 1) }} -->
              F
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56 mr-7 mt-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User class="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard class="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings class="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard class="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users class="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus class="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail class="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare class="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle class="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus class="mr-2 h-4 w-4" />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github class="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy class="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Cloud class="mr-2 h-4 w-4" />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut class="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  </div>
  <div
    :class="notTop ? 'lg:pl-14 pl-4 pr-4' : 'px-4'"
    id="navbar"
    class="navbar linear duration-100"
  >
    <RouterLink
      class="hover:text-foreground cursor-pointer pb-4"
      :class="
        route?.path?.toLowerCase().search(item.to) != -1
          ? 'text-foreground  border-b-[3px] border-current font-medium'
          : ''
      "
      v-for="(item, index) in list"
      :to="item.to"
    >
      {{ item.text }}
    </RouterLink>
  </div>
  <Logo
    :class="notTop ? 'scale-75' : ''"
    class="fixed top-3 left-2 z-30 linear w-10 h-10 duration-100 hidden lg:block"
  />
</template>
<style>
/* Hide the scrollbar */
.navbar::-webkit-scrollbar {
  height: 0rem; /* Set a small width for the scrollbar */
}

.navbar {
  @apply sticky left-0 w-full overflow-x-auto break-normal flex bg-background z-30 top-0 text-sm pt-4 border-b border-foreground/30 text-foreground/40 space-x-4;
}

.navbar::-webkit-scrollbar-thumb {
  background-color: transparent; /* Set the thumb color to transparent */
}
</style>
