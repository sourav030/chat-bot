<template>
    <main>

        <div class="outer-box">
            <div class="container">
                <div class="third">
                    <div class="wrapper">
                        <div class="img-wrapper">
                            <img src="../assets/loading.png" alt="">
                        </div>
                        <div class="content-wrapper">
                            <div class="box">
                                <div class="green">
                                    <ul>
                                        <li>Checking Slot Availability</li>
                                    </ul>
                                </div>
                                <div class="green">
                                    <ul>
                                        <li>Creating your services request</li>
                                    </ul>
                                </div>
                                <div class="purple">
                                    <ul>
                                        <li>Creating your services request</li>
                                    </ul>
                                </div>
                                <div class="purple">
                                    <ul>
                                        <li>Finalizing your appointment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blobs-layer">
                        <div class="blob rect1"></div>
                        <div class="blob rect2"></div>
                        <div class="blob rect3"></div>
                        <div class="blob rect4"></div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;


    align-items: center;
}

.outer-box {
    width: 680px;
    height: 556px;
    padding: 16px;
    gap: 16px;

    background: #FFFFFF;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}

.container {
    width: 648px;
    height: 524px;

    padding: 12px 16px 16px 16px;
    gap: 10px;

    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #F3F4F6;

    opacity: 1;
}

.third {
    display: flex;
    flex-direction: column;
    width: 616px;
    height: 496px;
    position: relative;
    z-index: 1;
    justify-content: end;
}

.wrapper {
    display: flex;
    flex-direction: column;
    width: 616px;
    height: 311px;
    gap: 8px;

}

.wrapper img {
    width: 64px;
    height: 64px;
}

.content-wrapper {
    display: flex;
    width: 616px;
    height: 239px;
    gap: 8px;

    justify-content: center;
}

.img-wrapper {
    display: flex;

    width: 616px;
    justify-content: center;
}

.box {
    display: flex;
    flex-direction: column;
    width: 365px;
    height: 196px;
    gap: 12px;
}

.green {
    width: 365px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 20px;
    border-radius: 8px;
    border: 1px solid #10B981;
    padding-left: 27px;
    background: #ECFDF5;
    opacity: 1;
    color: #065F46;
}

.purple {
    width: 365px;
    height: 40px;
    display: flex;
    padding: 15px 20px;
    border-radius: 8px;
    border: 1px solid #A78BFA;
    flex-direction: column;
    justify-content: center;
    padding-left: 27px;
    background: #F5F3FF;
    opacity: 1;
    color: #5B21B6;
}

.blobs-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 639px;
    height: 178.1px;
    opacity: 0.1;
    z-index: 0;
    /* Behind content */
}
/* Common Blob Properties */
.blob {
  position: absolute;
  filter: blur(80px); /* Ye property blobs ko soft aur blurry banati hai */
  opacity: 0.6;       /* Ye transparency adjust karti hai */
  z-index: 0;         /* Isse blobs content ke peeche rahenge */
  border-radius: 50%; /* Blobs round hote hain */
}

/* Individual Colors and Sizes */
.rect1 { 
  background: #C0D7E2; 
  width: 150px; 
  height: 150px; 
  top: 342px; 
  left: -16px; 
}

.rect2 { 
  background: #6D28D9; 
  width: 180px; 
  height: 129px; 
  top: 390.28px;
  left: 395.67px; 
}

.rect3 { 
  background: #A78BFA; 
  width: 465px; 
  height: 177px; 
  top: 342px; 
  left: 51.69px; 
}

.rect4 { 
  background: #B5C9D5; 
  width: 262.06px; 
  height: 99px; 
  top: 342px;
  left: 360.94px;
}
</style>