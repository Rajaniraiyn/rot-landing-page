<script lang="ts">
    import Button from "./Button.svelte";

    function submit() {
        alert("Thank you for your submission. \n we'll contact you soon.")
    }
</script>

<div>
    <h2>Contact us</h2>
    <p>
			Feel free to drop a message in the contact box. Your each and every feedback is valuable in developing our final product	
    </p>

    <form on:submit|preventDefault>
        <input type="text" placeholder="Your Name" id="name" />
        <input type="email" placeholder="Your Email Address" id="email" />
        <textarea
            name="Message"
            placeholder="Your Message"
            id=""
            cols="30"
            rows="10"
        />
        <Button
            style="grid-area: 3 / 2 / 4 / 4; padding: 0.75em 4em; font-size: 2em; font-weight: bold;"
            on:click={submit}
        >
            Submit
        </Button>
    </form>
</div>

<style>
    div {
        margin-top: 10em;
        display: grid;
        place-items: center;
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

    div form {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 0.5fr 2fr 0.5fr;
        grid-gap: 3em;
        margin-top: 3em;
    }

    div form #name {
        grid-area: 1 / 1 / 2 / 3;
    }

    div form #email {
        grid-area: 1 / 3 / 2 / 5;
    }

    div form textarea {
        grid-area: 2 / 1 / 3 / 5;
    }

    input,
    textarea {
        background: none;
        outline: none;
        border: 1px solid red;
        border-radius: 50px;
        padding: 0 2em;
        color: white;
        --color-bg: #0f0b30;

        background: linear-gradient(90deg, var(--color-bg), var(--color-bg))
                padding-box,
            linear-gradient(
                    90deg,
                    rgb(0, 240, 255) 0%,
                    rgb(87, 115, 255) 46.88%,
                    rgb(255, 0, 122) 100%
                )
                border-box;
        border: 4px solid transparent;
    }

    textarea {
        padding: 1em 2em;
    }
</style>
