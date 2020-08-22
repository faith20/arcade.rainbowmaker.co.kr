<script>
  export let imageFile = "./img/card.png";

  const handleButton = () => {};
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
    max-width: 300px;
    /* max-height: 80%; */
    border-radius: 5px;
    margin-top: 30px;
  }

  .container {
    padding: 2px 60px;
    font-size: 1rem;
    text-align: center;
    color: black;
    pointer-events: auto;
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

  /* button {
	color: #333;
	background-color: #f4f4f4;
	outline: none;
} */

  button:disabled {
    color: #999;
  }

  button:not(:disabled):active {
    background-color: #ddd;
  }

  button:focus {
    /* border-color: #666; */
    outline: 0;
  }

  .button {
    border: none;
    /* background-color: #50ee7a; */
    background-color: #ffa100;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    /* box-shadow: 5px 5px 10px #aeaeb3, -5px -5px 10px #ffffff; */
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 5px 0px 0px 0px;
  }

  .button.neutral {
    /* background-color: #2dabf9; */
    background-color: white;
    border: 3px solid #2dabf9;
    color: #2dabf9;
  }

  .button.negative {
    /* background-color: #d0451b; */
    background-color: white;
    border: 3px solid #d0451b;
    color: #d0451b;
  }

  .button:active {
    /* box-shadow: inset 5px 5px 10px #aeaeb3, inset -5px -5px 10px #ffffff; */
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12),
      inset 0 -1px -2px rgba(0, 0, 0, 0.24);
  }

  .button_group {
    display: flex;
    justify-content: space-between;
  }
</style>

<div class="card">
  <img src={imageFile} alt="Game" style="width:100%" />
  <div class="container">
    <h2>Acrade Flip Match</h2>
    <h1>Simple Card Flip Match Game</h1>
    <ul>
      <li>Pick cards with same images.</li>
      <li>Get high scores.</li>
      <li>Try with various card packs.</li>
    </ul>
    <div class="button_group">
      <button class="button" on:click={handleButton} style="width:45%">
        Google Play
      </button>
      <button class="button" on:click={handleButton} style="width:45%">
        App Store
      </button>
    </div>
  </div>
</div>
