<script lang="ts">
    import TestimonialCard from "./TestimonialCard.svelte";
		import PesIsLife from "../../../../assets/Testimonials/pesislife.jpg";
		import PesGoat from "../../../../assets/Testimonials/pesgoat.jpg";
    const Testimonials = [
        {
            content:
                "The idea is too good. Every players want these features. The number of tournaments will increase by this. I’ll promote it for free and will ask other creators to share it too ... if you manage to do it",
            profilePic: PesIsLife,
            profileName: "PES IS LIFE",
            profileDetails: "PES/eFootball Youtuber",
        },
        {
            content:
                "ROT can perform very good in the market. This idea has the potential to be big and perform well in the buisness market. The idea of individual hositng is very unique and will have a great impact on the market.",
            profilePic: PesGoat,
            profileName: "PES GOAT",
            profileDetails: "PES/eFootball Youtuber",
        },
        {
            content:
								"This is a realy great platform for gamers of all skill level to find like minded people. This is really useful especially for a up and coming region like India where Esports is still in its infancy. With time this site can be the huv for all eSports in India and help it reach new heights.",
            profilePic: PesIsLife,
            profileName: "Wesley(@snakeeyes)",
            profileDetails: "Competitive Valorant Player",
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
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    div div {
        display: grid;
        place-items: stretch;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        padding: 2em;
        margin-inline: 4.5rem;
    }

    @media (max-width: 768px) {
        div > div {
            grid-template-columns: repeat(2, 300px);
            grid-template-rows: auto;
        }
    }
</style>
