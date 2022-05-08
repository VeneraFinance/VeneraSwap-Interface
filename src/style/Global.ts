import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    // background-image:linear-gradient(#0c1b26 10%,#0a171f 50%,#0c1820 80%);
    background-color:#0a171f;   
    // background-image: radial-gradient(white,rgb(158 158 158 / 51%) 2px,transparent 40px), radial-gradient(white,rgb(158 158 158 / 37%) 1px,transparent 30px), radial-gradient(white,rgb(96 125 139 / 24%) 2px,transparent 40px), radial-gradient(rgb(59 42 42 / 40%),rgba(55,55,55,.1) 1px,transparent 10px);
  
    // background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    // background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    min-height: 100vh;
    img {
      height: auto;
      max-width: 100%;
    }
  }
  .bordbox:after, .bordboxout>div:after {
    content: "";
    height: 100%;
    width: 100%;
    left: 0;
    position: absolute;
    top: 0;
    background: black;
    z-index: -1;
}
  .bordbox, .bordboxout>div {
    position: relative;
    border: 1px solid #ff000000;
    background-image: linear-gradient(326deg,#743ad5,#009ac5);
    z-index: 9;
}
  .shadowBorder{
  	width: 436px;
  	max-width: 100%;
  }
  // .shadowBorder > div{
  // 	box-shadow: rgb(235 92 31) 0px 1px 10px;
  // }
  .pancake:nth-child(2),
  .pancake:nth-child(3),
  .butter {
    display: none;
  }
  svg {
    fill: #b79adc !important;
}
  .pancake:nth-child(1) {
    background: #139cc7 !important;
    box-shadow: none !important;
    top: 4px !important;
  }
  nav button[aria-label="Toggle menu"]
  {
    opacity:1 !important;
  }
  .bor_radius>div,.bor_radius a
  {
  border-radius:32px;
  }
  .bor_radius div a
  {
  // background-color:transparent;
  }
  .bor_radius div a:hover,.bor_radius div a:hover:not(:disabled):not(.button--disabled):not(:active),
  .bor_radius div a[variant="subtle"]:hover
  {
  background-color:#4c1d87 !important;
  opacity:1 !important;
  color:#fff !important;

  }
  .bor_radius div a(:active),.bor_radius div a:active
  {
  background-color: #353547 !important;
  }
  .bor_radius div a:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled),
  .bor_radius div a[variant="subtle"] {
  opacity: 1;
  background-color: #353547 !important;
  }
  #swap-page button, #pool-page-button button, nav button,#join-pool-button,.btn_yel_grad,.btn_yellow
  {
    background-image: linear-gradient(169deg,#6e489d 10%,#4c1d87 54%,#4c1d87 100%);
    border-radius:26px !important;
  }
  #swap-page button:hover, #pool-page-button button:hover, 
  nav button:hover,#join-pool-button:hover,.btn_yel_grad:hover,.btn_yellow:hover
  {
    background-image: linear-gradient(169deg,#4c1d87 10%,#6e489d 54%,#4c1d87 100%); 
    opacity:1 !important;
  }
  .btn_yel_grad,.btn_yellow
  {
    color:#fff !important;
  }
  .btn_tra button
  {
    background:transparent !important;
  }
  nav button[aria-label="Toggle menu"] {
    background-color: transparent !important;
    border-radius:0px !important;
    background:none !important;
    height:32px !important;
    padding-top:12px
    }
  .swap_page_icon button[title="Settings"], .swap_page_icon button[title="Recent transactions"],
  .swap_page_icon button.open-currency-select-button,.swap_page_icon  .arr_down_btn
  { background-color: transparent !important;
    border-radius:0px !important;
    background:none !important;

  }
  .inpt_tran {
    border: 2px solid #139cc7;
    border-radius: 16px;
    color: #139cc7;
    background-color: transparent !important;
}
.inpt_tran svg

{
  color: #139cc7;
  fill: #139cc7;
}
a[aria-label="Medium"],  a[aria-label="Gitbook"],a[aria-label="Twitter"],a[aria-label="Telgram"]
{
  margin-top:5px !important;
}
// a[aria-label="Gitbook"]
// {
//   margin-left:5px;
// }
.bor_radius a[variant="primary"]
{
  background-color:#663e98 !important;
}
#import-pool-link
{
  color: #139cc7 !important;
}
button[title="Settings"] svg,
button[title="Recent transactions"] svg
{
color: #139cc7 !important;
fill:#139cc7 !important;
}
.icon_sidebar
{
  max-width:18px;
  margin-right:8px;
}
`


export default GlobalStyle
