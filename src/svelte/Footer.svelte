<script>
  import Email24 from 'carbon-icons-svelte/lib/Email24';
</script>

<footer>
  <div class="copyright">
    <div>
      <a href="mailto:contact@rainbowmaker.co.kr">
        <Email24 />
      </a>
    </div>
    Copyright ⓒ 2020. All Rights Reserved.
    <!-- <img src="./img/rainbowmaker_logo_tr.png" alt="rainbowmaker" /> -->
  </div>
</footer>

<style>
  footer {
    /* background: white; */
    padding: 20px;
    text-align: center;
    text-shadow: 1px 1px 2px #835300;
    /* margin-top: 20px; */
  }

  .copyright {
    /* color: #aaa; */
    color: white;
    font-size: 14px;
    display: inline-block;
    padding: 10px;
    border-top: 1px solid #ddd;
  }

  a {
    color: white;
  }

  /* img {
    position: relative;
    top: 10px;
    max-width: 150px;
  } */
</style>
