<template>
<footer class="footer">


      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <ul class="list-inline">
              <li class="list-inline-item"><RouterLink to="/">Home</RouterLink></li>
              <li class="list-inline-item"> <RouterLink to="/contact-us">Contact us</RouterLink></li>
              <li class="list-inline-item">
                <RouterLink to="/about">About us</RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul class="list-inline">
              <li class="list-inline-item">
                <a href="https://www.facebook.com" target="_blank"
                  ><img src="./image/Facebook_f_logo_(2019).svg.png" alt="Facebook" width="43"
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.instagram.com" target="_blank"
                  ><img
                    src="./image/InstagramLogo.webp"
                    alt="Instagram"
                    width="40"
                /></a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com" target="_blank"
                  ><img src="./image/LinkedIn_icon_circle.svg.png" alt="LinkedIn" width="43"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    </footer>

</template>


<style>

.footer {
  display: block;
  background-color: bisque;
  unicode-bidi: isolate;
}

.container {
  max-width: 540px;

width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-right: auto;
margin-left: auto;
}

ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}

.list-inline {
  padding-left: 0;
  list-style: none;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.list-inline-item:not(:last-child) {
  margin-right: 15px;
}

.list-inline-item {
  display: inline-block;
}

.col-md-6{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}


</style>


<script src="./footer.js"></script>
