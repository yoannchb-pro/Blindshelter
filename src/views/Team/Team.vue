<template>
  <div class="min-h-screen p-5 w-full lg:w-3/5 text-white flex flex-col items-center overflow-x-hidden">
    <article class="lg:mt-40 mt-10 flex flex-col gap-10 text-center" data-aos="fade-left">
        <h2 class="text-3xl uppercase font-bold">
            {{ $t('message.team.titles.path') }}
        </h2>
        <p class="text-lg" v-html="$t('message.team.path-text')"></p>
        <img lazy-animation="opacity" lazy-src="/static/team/enjmin.png" alt="Enjmin" class="w-full">
    </article>

    <article class="mt-20 flex flex-col gap-10 text-center items-center" data-aos="fade-right">
        <h2 class="text-3xl uppercase font-bold">
            {{ $t('message.team.titles.ambitions') }}
        </h2>
        <p class="text-lg" v-html="$t('message.team.ambitions-text')"></p>
        <img lazy-src="/static/team/aveugle.png" alt="Enjmin" class="w-32 walking">
    </article>

    <article class="flex flex-col items-center mt-20 mb-10" data-aos="fade-left">
        <h2 class="text-3xl uppercase font-bold">
            {{ $t('message.team.titles.members') }}
        </h2>
        <section class="grid grid-cols-3 md:grid-cols-6 gap-3 mt-10">
            <template v-for="member of members" :key="member.lastName">
                <a v-if="member.profile" :href="member.profile" target="_blank" class="pointer-cursor">
                    <div class="flex flex-col items-center p-3" 
                    data-card3d  data-card3d-glare="0.2" data-card3d-delta="20">
                        <div 
                        class="w-full bg-cover bg-no-repeat bg-center" style="padding-bottom: 100%"
                        :lazy-background="member.picture ? member.picture : '/static/team/members/default.png'"
                        lazy-animation="opacity"
                        alt="Profile picture"></div>
                        <p class="mt-2 text-center">{{ member.firstName }}</p>
                        <p class="text-center">{{ member.lastName }}</p>
                    </div>
                </a>
                <div v-else class="flex flex-col items-center p-3" 
                data-card3d  data-card3d-glare="0.2" data-card3d-delta="20">
                    <div 
                    class="w-full bg-cover bg-no-repeat bg-center" style="padding-bottom: 100%"
                    :lazy-background="member.picture ? member.picture : '/static/team/members/default.png'"
                    lazy-animation="opacity"
                    alt="Profile picture"></div>
                    <p class="mt-2 text-center">{{ member.firstName }}</p>
                    <p class="text-center">{{ member.lastName }}</p>
                </div>
            </template>
        </section>
        <!-- IFRAME -->
        <iframe class="mt-5 max-w-full" src="https://discordapp.com/widget?id=959871120444633088&theme=dark" 
        width="350" height="500" allowtransparency="true" frameborder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </article>

    <article>
        <h2 class="text-3xl uppercase font-bold">
            {{ $t('message.team.titles.sponsors') }}
        </h2>
        <div class="flex flex-col w-full items-center gap-5 my-10">
            <img class="w-40" v-for="item of sponsors" :key="item" lazy-animation="opacity" :lazy-src="item" alt="Sponsor">
        </div>
    </article>
  </div>
</template>

<script>
import members from "./members"
import sponsors from "./sponsors"
export default {
    name: "Team",
    data(){
        return {
            members: members,
            sponsors: sponsors
        }
    }
}
</script>

<style scoped>
.walking{
    animation: walking-an 5s linear infinite;
}

@keyframes walking-an {
    from{
        transform: translateX(calc(-50vw - 50%));
    }
    to{
        transform: translateX(calc(50vw + 50%));
    }
}
</style>