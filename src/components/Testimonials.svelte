<script lang="ts">
    import TestimonialCard from "./TestimonialCard.svelte";
    import Testimonail1 from "../assets/testimonial1.png";
    const Testimonials = [
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",
            profilePic: Testimonail1,
            profileName: "Saul Ramirez",
            profileDetails: "CEO, Mirrorly",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",
            profilePic: Testimonail1,
            profileName: "Saul Ramirez",
            profileDetails: "CEO, Mirrorly",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",
            profilePic: Testimonail1,
            profileName: "Saul Ramirez",
            profileDetails: "CEO, Mirrorly",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",
            profilePic: Testimonail1,
            profileName: "Saul Ramirez",
            profileDetails: "CEO, Mirrorly",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",
            profilePic: Testimonail1,
            profileName: "Saul Ramirez",
            profileDetails: "CEO, Mirrorly",
        },
        {
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis tellus nec aliquam volutpat. Dui dictum tortor dapibus integer convallis ut facilisi leo semper. Tristique nisl risus tristique nunc quis id elit. Suspendisse felis, tellus in sollicitudin.",
            profilePic: Testimonail1,
            profileName: "Saul Ramirez",
            profileDetails: "CEO, Mirrorly",
        },
    ];
</script>

<div>
    <h2>Testimonials</h2>
    <div>
        {#each Testimonials as testimonial}
            <TestimonialCard
                content={testimonial.content}
                profilePic={testimonial.profilePic}
                profileName={testimonial.profileName}
                profileDetails={testimonial.profileDetails}
            />
        {/each}
    </div>
</div>

<style>
    div {
        display: grid;
        place-items: center;
        gap: 3em;
    }

    h2 {
        font-size: 3.75em;
        font-weight: bold;
        background: linear-gradient(
            90deg,
            #00f0ff 0%,
            #5773ff 46.87%,
            #ff007a 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    div div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1rem;
        padding: 2em;
        margin-inline: 4.5rem;
    }
</style>
