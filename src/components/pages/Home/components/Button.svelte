<script lang="ts">
  import { createEventDispatcher } from "svelte";
  export let noBorder = false;
  export let hasIcon = false;
  let styles = $$props.style;

  const dispatch = createEventDispatcher();

  const click = () => dispatch("click");
</script>

<button
  class:no-border={noBorder}
  class:has-icon={hasIcon}
  style={styles}
  on:click={click}
>
  <slot />
</button>

<style>
  button {
    /* margin: auto; */
    position: relative;
    padding: 1em;
    box-sizing: border-box;
    color: #fff;
    background-color: #0f0b30;
    background-clip: padding-box;
    border: solid 0.25em transparent;
    border-radius: 5em;
    cursor: pointer;
  }

  .no-border {
    border: 0;
    background-color: transparent;
  }

  button:not(.no-border):before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    margin: -0.25em;
    border-radius: inherit;
    --deg: 90deg;
    background: linear-gradient(
      var(--deg),
      rgba(0, 240, 255, 1) 0%,
      rgba(87, 115, 255, 1) 46.88%,
      rgba(255, 0, 122, 1) 100%
    );
    transition: all 0.2s ease-in-out;
  }

  .has-icon {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
  }

  button:not(.no-border):hover:before {
    animation: btn-anim 0.4s alternate infinite;
  }

  @keyframes btn-anim {
    0% {
      --deg: 0deg;
    }
    10% {
      --deg: 36deg;
    }
    20% {
      --deg: 72deg;
    }
    30% {
      --deg: 108deg;
    }
    40% {
      --deg: 144deg;
    }
    50% {
      --deg: 180deg;
    }
    60% {
      --deg: 216deg;
    }
    70% {
      --deg: 252deg;
    }
    80% {
      --deg: 288deg;
    }
    90% {
      --deg: 324deg;
    }
    100% {
      --deg: 360deg;
    }
  }
</style>
