<script>
 export default {
    data() {
        return {
            zoomLevel: 1, // Initial zoom level
            isMenuVisible: false,
            fontSize: 1, // Default scale (1 = 100%)
            currentHeaderColorPalette: 'headerDefaultColorPalette',
            currentLogoColorPalette: 'logoDefaultColorPalette',
            currentNavButtonColorPalette: 'navButtonDefaultColorPalette',
            currentNavAccessibiltyButtonColorPalette: 'navAccessibilityButtonDefaultColorPalette',
            currentaccessibilityButtonDivColorPalette: 'accessibilityButtonDivDefaultColorPalette',
            currentaccessiblityToolsHeadingColorPalette: 'accessiblityToolsHeadingDefaultColorPalette', 
            currentIncreaseTextIcon: 'increaseTextIcon', 
            currentDecreaseTextIcon: 'decreaseTextIcon', 
            currentGrayScaleIcon: 'grayScaleIcon', 
            currentHightContrastIcon: 'hightContrastIcon', 
            currentLinksUnderLineIcon: 'linksUnderLineIcon', 
            currentReadableFontIcon: 'readableFontIcon', 
            currentWcagColoursIcon: 'wcagColoursIcon', 
            currentResetIcon: 'resetIcon', 
            // leftbox
            isPinkCardIconVisible: true,
            isGrayCardIconVisible: false,
            currentLeftBoxGrayscale: 'left-box',
            currentLeftBoxHeadingGrayscale: 'left-box-heading', 
            currentLeftBoxParagraphGrayscale: 'left-box-paragraph',
            currentLeftBoxActionCallGrayscale: 'left-box-action-call',
           
                
    } 
  },

    methods: {

        accessibilityMenuVisibility(){
            this.isMenuVisible =! this.isMenuVisible
            console.log("test")

        }, 

        increaseZoom() {
            if (this.zoomLevel < 2) { // Prevent excessive zoom
                this.zoomLevel += 0.1;
                document.body.style.zoom = this.zoomLevel;
            }
        },

        decreaseZoom() {
            if (this.zoomLevel > 0.5) { // Prevent too much shrinking
                this.zoomLevel -= 0.1;
                document.body.style.zoom = this.zoomLevel;
            }
          }, 

        resetZoom() {
        this.zoomLevel = 1;
        document.body.style.zoom = "1"; // Reset zoom to default
        },
        
        increaseTextSize() {
            if (this.fontSize < 2) { // Prevents excessive scaling
                this.fontSize += 0.1;
                document.body.style.fontSize = `${this.fontSize}em`; // Apply scaling
            }
        },

        decreaseTextSize() {
            if (this.fontSize > 0.5) { // Prevents text from being too small
                this.fontSize -= 0.1;
                document.body.style.fontSize = `${this.fontSize}em`;
            }
          },

          resetTextSize() {
            this.fontSize = 1;
            document.body.style.fontSize = ""; // Resets to default

            this.currentHeaderColorPalette = 'headerDefaultColorPalette'
            this.currentLogoColorPalette = 'logoDefaultColorPalette'
            this.currentNavButtonColorPalette =  'navButtonDefaultColorPalette'
            this.currentNavAccessibiltyButtonColorPalette = 'navAccessibilityButtonDefaultColorPalette'
            this.currentaccessibilityButtonDivColorPalette = 'accessibilityButtonDivDefaultColorPalette'
            this.currentaccessiblityToolsHeadingColorPalette = 'accessiblityToolsHeadingDefaultColorPalette'
            this.currentIncreaseTextIcon = 'increaseTextIcon'
            this.currentDecreaseTextIcon = 'decreaseTextIcon'
            this.currentGrayScaleIcon = 'grayScaleIcon'
            this.currentHightContrastIcon = 'hightContrastIcon' 
            this.currentLinksUnderLineIcon = 'linksUnderLineIcon'
            this.currentReadableFontIcon = 'readableFontIcon' 
            this.currentWcagColoursIcon = 'wcagColoursIcon'
            this.currentResetIcon = 'resetIcon'
            // leftbox
            this.isPinkCardIconVisible = true
            this.isGrayCardIconVisible = false
            this.currentLeftBoxGrayscale = 'left-box'
            this.currentLeftBoxHeadingGrayscale = 'left-box-heading' 
            this.currentLeftBoxParagraphGrayscale = 'left-box-paragraph'
            this.currentLeftBoxActionCallGrayscale = 'left-box-action-call'
        }, 

        changeTograyscale(){
          this.currentNavButtonColorPalette = "navButtonGrayscale"
          this.currentNavAccessibiltyButtonColorPalette = "navAccessibilityButtonGrayscaleColorPalette"
          this.currentHeaderColorPalette = "headerGrayscaleColorPalette"
          this.currentLogoColorPalette = "logoGrayscaleColorPalette"
          this.currentaccessibilityButtonDivColorPalette = 'accessibilityButtonDivGrayscaleColorPalette'
          this.currentaccessiblityToolsHeadingColorPalette = 'accessiblityToolsHeadingGrayscaleColorPalette'
          // acc menu icons
          this.currentIncreaseTextIcon = 'increaseTextIconGray'
            this.currentDecreaseTextIcon = 'decreaseTextIconGray'
            this.currentGrayScaleIcon = 'grayScaleIconGray'
            this.currentHightContrastIcon = 'hightContrastIconGray'
            this.currentLinksUnderLineIcon = 'linksUnderLineIconGray'
            this.currentReadableFontIcon = 'readableFontIconGray'
            this.currentWcagColoursIcon = 'wcagColoursIconGray'
            this.currentResetIcon = 'resetIconGray'    
            
            // left box
            this.isPinkCardIconVisible = false
            this.isGrayCardIconVisible = true
            this.currentLeftBoxGrayscale = 'left-box-grayscale'
            this.currentLeftBoxHeadingGrayscale = 'left-box-heading-grayscale'
            this.currentLeftBoxParagraphGrayscale = 'left-box-paragraph-grayscale'
            this.currentLeftBoxActionCallGrayscale = 'left-box-action-call-grayscale'
        }

    }, 

}

</script>
    
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }


      body {
            /* display: flex; */
            /* justify-content: center; */
            /* align-items: center; */
            height: 100vh;
            margin: 0;
            background-color: #f9f9f9;
        }

      body {
        font-family: 'Inter', sans-serif;
        background: white;
        /* padding: 1em;  */
      }

      /* Header styles from previous implementation */
      .header {
        margin-top: 0.25em;
        margin-left: 0.25em;
        margin-right: 0.25em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rsem 0.5rem;
        border-bottom: 1px solid #eee;
        background-color: white;
        border: solid 1px #D400A6;
        border-radius: 17px;
      }

      .logo-section {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      .logo {
        width: 35px;
        height: 35px;
        background-image: url('/logo.svg'); 
        background-size: contain;
        background-repeat: no-repeat;    
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0.5em;
      }

      .library-text {
        font-family: 'Inter', monospace;
        color: #D400A6;
        font-size: 14px;
        white-space: nowrap;
        letter-spacing: 1px;
      }

      .nav-buttons {
        display: flex;
        gap: 1rem;
        padding: 0.5%;
        
      }

      .nav-button {
        padding: 0.5rem 1rem;
        border: 1px solid #D400A6;
        background: none;
        color: #D400A6;
        border-radius: 20px;
        font-size: 0.65em;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      .nav-button:hover {
        color: white;
        background-color: #D400A6;
      }

  
    
  .nav-buttonAccessibilityIcon {
    color: #D400A6;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    width: 5%;  
    height: auto;
    background-image: url('/person.svg'); 
    background-size: contain;
    background-repeat: no-repeat;    
    background-position: center;
    background-color: white;
    border: 1px solid #D400A6;
    transition: background-color 0.2s;
}
      
    .nav-buttonAccessibilityIcon:hover {
    background-image: url('/personIconWhite.svg'); 
    background-size: contain;
    background-repeat: no-repeat;    
    background-position: center;
    background-color: #D400A6;
      }

.accessibility-menu {
        cursor: pointer;
        z-index: 5;
        width: 15vw;
        /* background-color: red; */
        margin-left: 7.5em;

      }

     
      /* Ensure content boxes appear above background */
      .left-box, .right-box, .center-top-box, .center-bottom-box {
        z-index: 3; /* Place content above grid and background */
        margin: 1em;
      }

      .cardTitles {
        font-weight: bold;
      }

      .left-box {
        padding: 1.8%;
        /* width: 80%; */
        border-radius: 12px;
        border: 1px solid #D400A6;
      }


      .right-box {
        padding: 1.8%;
        /* width: 80%; */
        border-radius: 12px;
        border: 1px solid #D400A6;
      }

      .center-top-box {
        padding: 1.8%;
        /* width: 80%; */
        border-radius: 12px;
        border: 1px solid #D400A6;
      }

      .center-bottom-box {
        padding: 1.8%;
        /* width: 80%; */
        border-radius: 12px;
        border: 1px solid #D400A6;
      } 

      .grid-container {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: 7% repeat(8, 1fr);
            width: 100vw;
            height: 100vh;
        }

         
        .header {grid-column: 1/9; grid-row: 1 / 2; 
            /* Aligns to the top of the row */
          /* align-self: start;    */
          /* Takes up only half of the row height */
          /* height: 50%;           */
        }
        .left-box { grid-column: 2 / 4; grid-row: 4 / 6; align-self: center;   }
        .right-box { grid-column: 6 / 8; grid-row: 4 / 6; align-self: center;  }
        .center-top-box { grid-column: 4 / 6; grid-row: 3 / 5; align-self: center; }
        .center-bottom-box { grid-column: 4 / 6; grid-row:  6/ 9; align-self: center;  }
        .footer{grid-column: 1/9; grid-row: 9/10} 




 
  .dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}



/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  padding: 1em;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  right: 0.5vw;
  top: 7vh;
  width: 20vw;
  /* height: 10vh; */
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 4;
}

.accessiblityToolsHeading {
        padding: 1em;
        border-radius: 10px;
        margin-bottom: 0.25em;
        /* background-color: #D400A6; */
        color: white;
        font-size: 0.75em;
        font-family: Doto;
        font-weight: 900;
        text-align: center;
      }

/* Links inside the dropdown */
.dropdown-content p {
  border-radius: 5px;
  margin-bottom: 0.125em;
  /* color: #D400A6; */
  font-family: 'Inter', sans-serif;
  padding: 0.4em;
  text-decoration: none;
  text-align: left;
  display: block;
  font-size: 0.75em;

}

.accessibilityButtonDiv {
  display: flex;
  /* background-image: url("/accessibilityUnionNonHover.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center; */
  background-color: #FFEDF4;

  
}


.accessibilityButtonDiv:hover {
  /* background-image: url("/accessibilityUnionHover.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center; */
  background-color: #D400A6;
}

.accessibilityButtonDiv:hover p{
  color: white;
}

.increaseTextIcon{
  width: 1em;
  background-image: url("/IncreaseTextIcon.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.increaseTextIconGray{
  width: 1em;
  background-image: url("/IncreaseTextIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.decreaseTextIcon{
  width: 1em;
  background-image: url("/decreaseTextIconPink.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.decreaseTextIconGray{
  width: 1em;
  background-image: url("/decreaseTextIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.grayscaleIcon{
  width: 1em;
  background-image: url("/grayscaleIconPink.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.grayscaleIconGray{
  width: 1em;
  background-image: url("/grayscaleIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.highContrastIcon{
  width: 1em;
  background-image: url("/highContrastIconPink.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.highContrastIconGray{
  width: 1em;
  background-image: url("/highContrastIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.linksUnderlineIcon{
  width: 1em;
  background-image: url("/linksUnderlineIconPink.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.linksUnderlineIconGray{
  width: 1em;
  background-image: url("/linksUnderlineIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.readableFontIcon {
  width: 1em;
  background-image: url("/readableFontIconPink.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.readableFontIconGray {
  width: 1em;
  background-image: url("/readableFontIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.wcagColoursIcon {
  width: 1em;
  background-image: url("/wcagColorsIconPink.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.wcagColoursIconGray {
  width: 1em;
  background-image: url("/wcagColorsIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.resetIcon {
  width: 1em;
  background-image: url("/resetIconPink.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}


.resetIconGray {
  width: 1em;
  background-image: url("/resetIconGray.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-right: 0.10em;
}

.accessibilityButtonDiv:hover .increaseTextIcon{
  background-image: url("/IncreaseTextIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.accessibilityButtonDiv:hover .decreaseTextIcon{
  background-image: url("/decreaseTextIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.accessibilityButtonDiv:hover .grayscaleIcon{
  background-image: url("/grayscaleIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.accessibilityButtonDiv:hover .highContrastIcon{
  background-image: url("/highContrastIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.accessibilityButtonDiv:hover .linksUnderlineIcon{
  background-image: url("/linksUnderlineIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.accessibilityButtonDiv:hover .readableFontIcon{
  background-image: url("/readableFontIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.accessibilityButtonDiv:hover .wcagColoursIcon{
  background-image: url("/wcagColorsIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.accessibilityButtonDiv:hover .resetIcon{
  background-image: url("/resetIconWhite.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

/* Change color of dropdown links on hover */
.dropdown-content p {
  flex-grow: 1;
}

.left-box-heading{
  display: flex;
  border-radius: 8px;
  background-color: #E7EB17;
  font-family: 'Doto';
  color: #D400A6;
  font-weight: 900;
  font-size: 1.15em;
  margin-bottom: 0.35em;
}

.left-box-heading img {
  width: 8%;
  padding: 0.5%;
  margin-right: 0.2em;
  margin-left: 0.2em;
}

.left-box-paragraph{
  border-radius: 8px;
  background-color: #FCFCCE;
  color: #D400A6;  
  margin-bottom: 0.35em;
}

.left-box-paragraph p {
  padding: 0.75em;
  font-family: 'Inter', sans-serif;
  font-size: 0.7em;
  font-weight: 350;
  min-height:  16vh;
}

.left-box-action-call{
  display: flex;
  border-radius: 8px;
  font-family: 'Doto';
  color: #D400A6;
  font-weight: 900;
  font-size: 0.8em;
  background-color: #FCFCCE;
  /* background-image: url("/learnMoreUnionLightYellow.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center; */
}

.left-box-action-call:hover {
  /* background-image: url("/learnMoreUnionYellow.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center; */
  background-color: #E7EB17;
}

.call-action{
margin-left: 0.5em;
width:90%;
}

.goto-action{
  
}

/* Other boxes */

.other-box-heading{
  display: flex;
  border-radius: 8px;
  background-color: #D400A6;
  font-family: 'Doto';
  color: white;
  font-weight: 900;
  font-size: 1.15em;
  margin-bottom: 0.35em;
}

.other-box-subtitle {
  padding: 0.5em;
  border-radius: 8px;
  background-color: #FFEDF4;
  font-family: 'Inter', sans-serif;
  color:#D400A6;
  font-size: 0.60em;
  font-weight: 350;
  margin-bottom: 0.35em;

}

.other-box-heading img {
  width: 5%;
  padding: 0.5%;
  margin-right: 0.2em;
  margin-left: 0.2em;
}


.other-box-photos {
    display: block;  /* Ensures it behaves like a normal div */
    width: 100%;
    min-height: 16vh;
    border-radius: 8px;
    background-color: #FFEDF4;
    margin-bottom: 0.35em;
    
}

.other-box-photos img {
  width: 100%;
}

.other-box-action-call{
  display: flex;
  border-radius: 8px;
  font-family: 'Doto';
  color: #D400A6;
  font-weight: 900;
  font-size: 0.8em;
  /* background-image: url("/unionCallToActionOtherBoxesLightPink.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center; */
  background-color: #FFEDF4;
}

.other-box-action-call:hover {
  /* background-image: url("/unionCallToActionOtherBoxesPink.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center; */
  background-color: #D400A6;
}

.other-call-action{
margin-left: 0.5em;
width:92%;
}

.other-box-action-call:hover .other-call-action{
color:white
}

.other-goto-action{
  
}

.other-box-action-call:hover  .other-goto-action{
  color:white
}

      /* New Footer Styles */
      .footer {
        background-color: transparent;
        width: 100%;    
      }

      .footer-images {
        display: flex;
        gap: 1rem;
        animation: scroll 20s linear infinite;
      }

      .footer-image {
        /* height: 50%; */
        width: 5%;
        object-fit: contain;
        flex-shrink: 0;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      
      }

      /* defaultscale */

    .headerDefaultColorPalette {
      border-color: #D400A6;
    }

    .logo {
        background-image: url('/logo.svg'); 
        background-size: contain;
        background-repeat: no-repeat;    
      }

    

      .navButtonDefaultColorPalette {
        color: #D400A6;
        border-color: #D400A6;
      }

      .navButtonDefaultColorPalette:hover {
        background-color: #D400A6
      }

      .navAccessibilityButtonDefaultColorPalette {
        border-color: #D400A6;
      background-image: url('/person.svg'); 
      background-size: contain;
      background-repeat: no-repeat;    
      background-position: center;
      }

    .navAccessibilityButtonDefaultColorPalette:hover {
      background-image: url('/personIconWhite.svg'); 
      background-size: contain;
      background-repeat: no-repeat;    
      background-position: center;
    }


    .accessibilityButtonDivDefaultColorPalette  {
        background-color: #FFEDF4 ;
        color: #D400A6;
      }

      .accessibilityButtonDivDefaultColorPalette:hover  {
        background-color: #D400A6;
        color: white;
      }

      .accessiblityToolsHeadingDefaultColorPalette {
        background-color: #D400A6;
        color: white;
      }

      /* default left card colors */
      .left-box-heading{
      background-color: #E7EB17;
      color: #D400A6;
      }



.left-box-paragraph{
  background-color: #FCFCCE;
  color: #D400A6;  

}

/* .left-box-paragraph p {
  
} */

.left-box-action-call{
  color: #D400A6;
  background-color: #FCFCCE;

}

.left-box-action-call:hover {
  background-color: #E7EB17;
}




    /* grayscale */

    .headerGrayscaleColorPalette {
      border-color: #3E3E3E;
    }

    .logoGrayscaleColorPalette {
        background-image: url('/logoGray.svg'); 
        background-size: contain;
        background-repeat: no-repeat;    
      }

      .navButtonGrayscale {
        border-color: #3E3E3E;
        color: #3E3E3E;
      }
     
      .navButtonGrayscale:hover{
      background-color: #3E3E3E
      }
      

      .navAccessibilityButtonGrayscaleColorPalette {
      border-color: #3E3E3E;
      background-image: url('/personGray.svg'); 
      background-size: contain;
      background-repeat: no-repeat;    
      background-position: center;
      }

    .navAccessibilityButtonGrayscaleColorPalette:hover {
      background-color: #3E3E3E;
      background-image: url('/personIconWhite.svg'); 
      background-size: contain;
      background-repeat: no-repeat;    
      background-position: center;
    }

.accessibilityButtonDivGrayscaleColorPalette {
        background-color: #F3F3F3;
        color: #3E3E3E;
      }

.accessibilityButtonDivGrayscaleColorPalette:hover {
        background-color: #3E3E3E;
        color: white;
      }

  .accessiblityToolsHeadingGrayscaleColorPalette{
        background-color: #3E3E3E;
        color: white;

      }

  /* grayscale left card colors */
      .left-box-heading-grayscale{
      background-color: #D2D2D2;
      color: #3E3E3E;
      }



.left-box-paragraph-grayscale{
  background-color: #F3F3F3;
  color: #3E3E3E;  

}

/* .left-box-paragraph p {
  
} */

.left-box-action-call-grayscale{
  color: #3E3E3E;
  background-color: #F3F3F3;

}

.left-box-action-call-grayscale:hover {
  background-color: #D2D2D2;
}




    </style>

    <template>
      <div class="grid-container" :style="{ fontSize: size + 'em' }">
      <div :class="['header', currentHeaderColorPalette]">
        <div class="logo-section">
          <div :class="['logo' , currentLogoColorPalette]"></div>
          <!-- <span class="library-text">ASSET LIBRARY * ASSET LIBRARY * ASSET LIBRARY</span> -->
        </div>
        <div class="nav-buttons" >
          <button :class="['nav-button', currentNavButtonColorPalette]">About</button>
          <button :class="['nav-button', currentNavButtonColorPalette]">Accessibility Statement</button>
          <button :class="['nav-button', currentNavButtonColorPalette]">Terms of Use</button>
          <button :class="['nav-buttonAccessibilityIcon', currentNavAccessibiltyButtonColorPalette]" @click="accessibilityMenuVisibility" aria-label="Accessibility Options" ></button>
          
          <div v-show="isMenuVisible" class="dropdown-content">
            <div>
              <h3 :class="['accessiblityToolsHeading', currentaccessiblityToolsHeadingColorPalette]">Accessibility Tools</h3>
            </div>
              <div  
              @click="increaseTextSize" 
              :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
              <p>Increase Text</p>
              <div :class="['increaseTextIcon', currentIncreaseTextIcon]"></div>
              </div>


                  <div  @click="decreaseTextSize" :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
                  <p>Decrease Text</p>
                  <div :class="['decreaseTextIcon', currentDecreaseTextIcon]"></div>
                  </div>

                  <div @click="changeTograyscale" :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
                  <p>Grayscale</p>
                  <div :class="['grayscaleIcon', currentGrayScaleIcon]"></div>
                  </div>

                  <div :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
                  <p>High Contrast</p>
                  <div :class="['highContrastIcon', currentHightContrastIcon]"></div>
                  </div>

                  <div :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
                   <p>Links Underline</p>
                   <div :class="['linksUnderlineIcon', currentLinksUnderLineIcon]"></div>
                  </div>

                  <div :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
                  <p>Readable Font</p>
                  <div :class="['readableFontIcon', currentReadableFontIcon]"></div>
                  </div>

                  <div :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
                  <p>WCAG AAA Colours</p>
                  <div :class="['wcagColoursIcon', currentWcagColoursIcon]"></div>
                  </div>

                  <div @click="resetTextSize" :class="['accessibilityButtonDiv', currentaccessibilityButtonDivColorPalette]">
                  <p>Reset</p>
                  <div :class="['resetIcon', currentResetIcon]"></div>
                  </div>
            </div>          
        </div>
      </div>

       <!-- <div class="content-container"> -->
        <div class="background-image"></div>
        <div class="grid-background"></div>
        
        <div :class="['left-box', currentLeftBoxGrayscale]">
          <div :class="['left-box-heading', currentLeftBoxHeadingGrayscale]">
            <img v-show="isPinkCardIconVisible" src="/greaterThanBracketsPink.svg">
            <img v-show="isGrayCardIconVisible" src="/greaterThanBracketsGray.svg">
            <h5>Sari-Sari Xchange</h5></div>
          <div :class="['left-box-paragraph', currentLeftBoxParagraphGrayscale]">
            <p>SSX is a community-building research & creation project using Extended Reality (XR) (ie. Virtual,
               Augmented, Mixed Realities) to foster new works by artists from the Asian diaspora. 
               <br><br>
               Sari-Sari Xchange Assetory (SSXA) is a virtual asset library created with and for the Asian diaspora community.</p>
          </div>
          <div :class="['left-box-action-call', currentLeftBoxActionCallGrayscale]">
            <p :class="['call-action', currentCallActionGrayscale]">Learn More</p>
            <p class="goto-action">OK</p>
          </div>
        </div>

        

        <div class="center-top-box">
          <div class="other-box-heading">
            <img src="/asteriskWhite.svg">
            <h5>Artists</h5>
          </div>
          <div>
            <p class="other-box-subtitle">Explore community assets created by artists.</p>
          </div>
          <div class="other-box-photos">
          <img src="/sample-images-artists.png">

            </div>
            
          <div class="other-box-action-call">
            <p class="other-call-action">Open Artists</p>
            <p class="other-goto-action">></p>
          </div>
        </div>

        <div class="center-bottom-box">
          <div class="other-box-heading">
            <img src="/asteriskWhite.svg">
            <h5>Events</h5>
          </div>
          <div>
            <p class="other-box-subtitle">Assets created during SSX events.</p>
          </div>
          <div class="other-box-photos">
            <!-- <img src="/sample-images-artists.png"> -->

          
            </div>
          <div class="other-box-action-call">
            <p class="other-call-action">Open Events</p>
            <p class="other-goto-action">></p>
          </div>
        </div>

        <div class="right-box">
          <div class="other-box-heading">
            <img src="/asteriskWhite.svg">
            <h5>Collection</h5>
          </div>
          <div>
            <p class="other-box-subtitle">Explore collections by SSX.</p>
          </div>
          <div class="other-box-photos">
            <!-- <img src="/sample-images-artists.png"> -->


            </div>
          <div class="other-box-action-call">
            <p class="other-call-action">Open Collections</p>
            <p class="other-goto-action">></p>
          </div>
        </div>
      

      <div class="footer">
        <div class="footer-images">
          <!-- First set of images -->
          <img src="/item1.png" alt="item 1" class="footer-image">
          <img src="/item2.png" alt="item 2" class="footer-image">
          <img src="/item3.png" alt="item 3" class="footer-image">
          <img src="/item4.png" alt="item 4" class="footer-image">
          <img src="/item11.png" alt="item 11" class="footer-image">
          <img src="/item6.png" alt="item 6" class="footer-image">
          <img src="/item7.png" alt="item 7" class="footer-image">
          <img src="/item8.png" alt="item 8" class="footer-image">
          
          <!-- Duplicate set for smooth infinite scroll -->
          <img src="/item10.png" alt="item 10" class="footer-image">
          <img src="/item11.png" alt="item 11" class="footer-image">
          <img src="/item1.png" alt="item 1" class="footer-image">
          <img src="/item2.png" alt="item 2" class="footer-image">
          <img src="/item3.png" alt="item 3" class="footer-image">
          <img src="/item4.png" alt="item 4" class="footer-image">
          <img src="/item11.png" alt="item 11" class="footer-image">
          <img src="/item6.png" alt="item 6" class="footer-image">
        </div>
      </div>
    </div>
</template>