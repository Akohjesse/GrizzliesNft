<template>
    <section class="flex flex_r">
        <div class="sect flex flex_r">
            <img src="@/assets/db.svg" alt="" />
            <p>@johnny Just bougnt Robotic Bug</p>
        </div>
        <div class="sect flex flex_r">
            <img src="@/assets/db.svg" alt="" />
            <p>@johnny Just bougnt Robotic Bug</p>
        </div>
        <div class="sect flex flex_r">
            <img src="@/assets/db.svg" alt="" />
            <p>@johnny Just bougnt Robotic Bug</p>
        </div>
        <div class="sect flex flex_r">
            <img src="@/assets/db.svg" alt="" />
            <p>@johnny Just bougnt Robotic Bug</p>
        </div>
        <div class="sect flex flex_r">
            <img src="@/assets/db.svg" alt="" />
            <p>@johnny Just bougnt Robotic Bug</p>
        </div>
        <div class="sect flex flex_r">
            <img src="@/assets/db.svg" alt="" />
            <p>@johnny Just bougnt Robotic Bug</p>
        </div>
        <div class="sect flex flex_r">
            <img src="@/assets/db.svg" alt="" />
            <p>@johnny Just bougnt Robotic Bug</p>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
    border: 1px solid white;
    margin: 3rem 0px;
    border-left: none;
    border-right: none;
    gap: 0 2rem;
    flex-wrap: nowrap;
    padding: 1.3rem 0px;
    overflow: scroll;
    .sect {
        flex-shrink: 0;
        flex-shrink: 0;
        animation: scrollInfinitely 5s linear infinite;
        gap: 0 1rem;
        transition: animation 4s ease-in-out;
        p {
            font-size: 1.3em;
        }
    }
}
@keyframes scrollInfinitely {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-120%, 0, 0);
    }
}
</style>
