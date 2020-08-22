<script>
  // export let imageFile = "./img/card.png";
  export let imageFile = "./img/rainbowmaker_logo_tr.png";
  export let appStoreLink = null;
  export let playStoreLink = null;

  const handleButtonAppStore = () => {
    // location.href = "https://arcade.rainbowmaker.co.kr";

    if (appStoreLink) window.open(appStoreLink);
  };

  const handleButtonPlayStore = () => {
    if (playStoreLink) window.open(playStoreLink);
  };
</script>

<style>
  .card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #f8f8ff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    max-width: 240px;
    border-radius: 5px;
    margin-top: 30px;
  }

  .content {
    font-size: 1rem;
    text-align: center;
    color: black;
    padding: 2px 10%;
  }

  /* .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  } */

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }

  @media (min-width: 600px) {
    .card {
      max-width: none;
    }
  }

  button {
    border: none;
    background: transparent;
  }

  .button_group {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 1em;
  }
</style>

<div class="card">
  <img src={imageFile} alt="Game" style="width:100%" />
  <div class="content">
    <slot />
  </div>
  <div class="button_group">
    <button on:click={handleButtonAppStore}>
      <img src="./img/app-store-badge.png" alt="AppStore" />
    </button>
    <button on:click={handleButtonPlayStore}>
      <img src="./img/google-play-badge.png" alt="GooglePlay" />
    </button>
  </div>
</div>
