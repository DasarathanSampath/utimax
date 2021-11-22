<template>
    <footer>
        <div class="row-footer" style="color: #FFFFFF; background-color: #3d3d3d!important;">
            <div class="column-footer">
                <div class="row-footer-sub">
                    <div class="column-footer-sub-left">
                        <p >Address:</p>
                    </div>
                    <div class="column-footer-sub-right">
                        <h4> Utimax Industrial Solutions Pvt. Ltd., </h4>
                        <p class="footer-address"> # S2, C -Block, Saffron Apt., </p>
                        <p class="footer-address"> 1St Street Gandhi Nagar, </p>
                        <p class="footer-address"> Old Perungalathur, Chennai, </p>
                        <p class="footer-address"> Tamilnadu -600063, India. </p>
                        <p class="footer-address"> <b>GSTIN:</b> 33AACCU2867L1Z1 </p>
                    </div>
                </div>
            </div>
            <div class="column-footer">
                <div class="row-footer-sub">
                    <div class="column-footer-sub-left">
                        <img class="footer-image" src="/svg/call2.svg"/>
                    </div>
                    <div class="column-footer-sub-right">
                        <br/>
                        <p class="footer-address" style="padding-left: 2rem;"> +91 -87544 17478 </p>
                        <p class="footer-address" style="padding-left: 2rem;"> +91 -63744 88145 </p>
                        <p class="footer-address" style="padding-left: 2rem;"> 044 -4853 8481 </p>
                    </div>
                </div>
            </div>
            <div class="column-footer">
                <div class="row-footer-sub">
                    <div class="column-footer-sub-left">
                        <img class="footer-image" src="/svg/email3.svg"/>
                    </div>
                    <div class="column-footer-sub-right">
                        <br/>
                        <p class="footer-address"> <a href="mailto: m.alagupandi@utimax.in"><em style="color: white;">m.alagupandi@utimax.in</em></a> </p>
                        <p class="footer-address"> <a href="mailto: s.babu@utimax.in"><em style="color: white;">s.babu@utimax.in</em></a> </p>
                    </div>
                </div>
            </div>
        </div>              
        <p style="text-align: center; font-style: italic; font-size: 0.75rem; line-height: 0.5rem;"> ©2021 UTImax. All Rights Reserved </p>
    </footer>
</template>

<script>

export default {

}
</script>

<style lang="stylus" scoped>

.footer-address {
    line-height: 0.75rem;
    font-size: 0.75rem;
}

.column-footer {
  float: left;
  width: 30%;
  padding: 1rem 0 1rem 1rem;
}

.row-footer:after {
  content: "";
  display: table;
  clear: both;
}

.column-footer-sub-left {
  float: left;
  width: 25%;
  padding: 1rem 0 1rem 1rem;
}
.column-footer-sub-right {
  float: left;
  width: 65%;
  padding: 1rem 0 1rem 1rem;
}

.row-footer-sub:after {
  content: "";
  display: table;
  clear: both;
}

.footer-image {
    width: 80%;
}

@media screen and (max-width 1080px) {
    .column-footer-sub-left{
      padding: 1rem 0 1rem 0;
    }
    .column-footer-sub-right {
      padding: 0;
    }
    .column-footer {
        width: 40%;
        padding: 0;
    }
}

@media screen and (max-width 640px) {
    .column-footer {
        width: 90%;
        padding: 0;
    }
}

</style>