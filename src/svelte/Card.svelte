<script>
  export let imageFile = "./img/card.png";
  // export let imageFile = "./img/rainbowmaker_logo_tr.png";

  const handleButtonAppStore = () => {
    console.log("Button AppStore");
  };

  const handleButtonPlayStore = () => {
    console.log("Button PlayStore");
  };
</script>

<style>
  .card {
    display: flex;
    justify-content: space-between;
    /* align-items: stretch; */
    flex-direction: column;
    background: #f8f8ff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    /* width: 80%; */
    /* height: 80%; */
    max-width: 240px;
    /* max-height: 80%; */
    border-radius: 5px;
    margin-top: 30px;
  }

  .content {
    font-size: 1rem;
    text-align: center;
    color: black;
    padding: 2px 10%;
    /* margin: auto; */
  }

  h2 {
    color: #ffa100;
    font-weight: bold;
    font-size: 1.2rem;
    margin: 10px 0 8px;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    margin: 0 0 16px;
  }

  li {
    line-height: 140%;
    margin: 10px 0;
    text-align: left;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.8);
  }

  /* .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  } */

  img {
    border-radius: 5px 5px 0 0;
  }

  @media (min-width: 600px) {
    .card {
      max-width: none;
    }
  }

  button {
    border: none;
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
    <h2>Acrade Flip Match</h2>
    <h1>Simple Card Flip Match Game</h1>
    <ul>
      <li>Pick cards with same images.</li>
      <li>Get high scores.</li>
      <li>Try with various card packs.</li>
    </ul>
  </div>
  <div class="button_group">
    <button on:click={handleButtonAppStore}>
      <img src="./img/app-store-badge.png" alt="AppStore" style="width:100%" />
    </button>
    <button on:click={handleButtonPlayStore}>
      <img
        src="./img/google-play-badge.png"
        alt="GooglePlay"
        style="width:100%" />
    </button>
  </div>
</div>
